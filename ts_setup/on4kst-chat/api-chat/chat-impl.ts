import { ChatApi } from './chat-api';
import { Transport, TelnetBackend } from '@/api-transport';
import { parseLine } from './parsers';
import { buildLoginCommand, serializeCommand } from './builders';
import { SessionState, SessionStateImpl } from './session-state';
import { FrameSubscriber, FrameSubscriberImpl } from './frame-subscriber';

/**
 * Implementation of ChatApi.Client
 * Uses Transport.Backend for raw TCP, handles protocol operations
 */
export class ClientImpl implements ChatApi.Client {
  private backend: Transport.Backend;
  private sessionState: SessionState;
  private frameSubscriber: FrameSubscriber;
  private stateCallbacks: Array<(state: ChatApi.ConnectionState) => void> = [];
  
  constructor(backend?: Transport.Backend) {
    this.backend = backend || new TelnetBackend();
    this.sessionState = new SessionStateImpl();
    this.frameSubscriber = new FrameSubscriberImpl();
    this.setupBackendHandlers();
  }

  // ========== Connection Management ==========

  async connect(config: ChatApi.ClientConfig): Promise<ChatApi.Result<ChatApi.LoginResponse, ChatApi.LoginError>> {
    if (this.sessionState.connectionState.status === 'connecting') {
      return [null, { 
        code: 'NETWORK_ERROR', 
        message: 'Already connected or connecting' 
      }];
    }

    if (this.sessionState.isConnected) {
      if (this.sessionState.loginResponse) {
        return [this.sessionState.loginResponse, null];
      }

      return [null, { 
        code: 'NETWORK_ERROR', 
        message: 'Already connected but no login data' 
      }];
    }

    this.sessionState.initialize(config);
    this.sessionState.setConnecting();
    this.notifyStateChange();

    // Connect transport
    const [, transportError] = await this.backend.connect({
      host: config.host,
      port: config.port,
      autoAppendCRLF: true,
    });

    if (transportError) {
      this.sessionState.setError('Connection failed');
      this.notifyStateChange();
      return [null, { code: 'NETWORK_ERROR', message: transportError.message }];
    }

    this.sessionState.setAuthenticating();
    this.notifyStateChange();

    // Build LOGIN command
    const loginCmd = buildLoginCommand(config);
    const [, writeError] = this.backend.write(loginCmd);

    if (writeError) {
      await this.backend.disconnect();
      this.sessionState.setError('Failed to send login');
      this.notifyStateChange();
      return [null, { code: 'NETWORK_ERROR', message: writeError.message }];
    }

    // Wait for LOGSTAT response
    return new Promise((resolve) => {
      const timeout = setTimeout(() => {
        this.backend.disconnect();
        this.sessionState.setError('Login timeout');
        this.notifyStateChange();
        resolve([null, { code: 'TIMEOUT', message: 'Login timeout' }]);
      }, config.connectionTimeout || 10000);

      const unsubscribe = this.onFrame((frame) => {
        if (frame.type === 'login_response') {
          clearTimeout(timeout);
          unsubscribe();

          if (frame.data.code === 100) {
            const sessionKey = frame.data.sessionKey || '';
            this.sessionState.setConnected(sessionKey, frame.data);
            this.notifyStateChange();
            resolve([frame.data, null]);
          } else {
            this.backend.disconnect();
            this.sessionState.setError(frame.data.errorMessage || 'Login failed');
            this.notifyStateChange();
            resolve([null, {
              code: 'INVALID_CREDENTIALS',
              message: frame.data.errorMessage || 'Login failed',
              serverCode: frame.data.code as ChatApi.LoginErrorCode,
            }]);
          }
        }
      });
    });
  }

  async disconnect(): Promise<ChatApi.Result<void, ChatApi.DisconnectError>> {
    if (!this.sessionState.isConnected) {
      return [null, { code: 'NOT_CONNECTED', message: 'Not connected' }];
    }

    await this.backend.disconnect();
    this.cleanup();
    return [undefined, null];
  }

  isConnected(): boolean {
    return this.sessionState.isConnected;
  }

  getConnectionState(): ChatApi.ConnectionState {
    return this.sessionState.connectionState;
  }

  // ========== Frame Subscriptions ==========

  onFrame(callback: (frame: ChatApi.Frame) => void): ChatApi.Unsubscribe {
    return this.frameSubscriber.onFrame(callback);
  }

  onChatMessages(callback: (frames: ChatApi.ChatFrame[]) => void): ChatApi.Unsubscribe {
    return this.frameSubscriber.onChatMessages(callback);
  }

  onHistoricalMessages(callback: (frames: ChatApi.ChatLoginFrame[]) => void): ChatApi.Unsubscribe {
    return this.frameSubscriber.onHistoricalMessages(callback);
  }

  onDXSpots(callback: (frames: ChatApi.DXSpotFrame[]) => void): ChatApi.Unsubscribe {
    return this.frameSubscriber.onDXSpots(callback);
  }

  onUserEvents(callback: (frame: 
    | ChatApi.UserConnectedFrame 
    | ChatApi.UserDisconnectedFrame 
    | ChatApi.UserStateChangeFrame
    | ChatApi.UserListFrame
  ) => void): ChatApi.Unsubscribe {
    return this.frameSubscriber.onUserEvents(callback);
  }

  onConnectionStateChange(callback: (state: ChatApi.ConnectionState) => void): ChatApi.Unsubscribe {
    this.stateCallbacks.push(callback);
    callback(this.sessionState.connectionState); // Immediate call with current state
    return () => {
      const index = this.stateCallbacks.indexOf(callback);
      if (index > -1) this.stateCallbacks.splice(index, 1);
    };
  }

  // ========== Commands ==========

  async sendMessage(
    chatId: string,
    destination: string,
    message: string
  ): Promise<ChatApi.Result<void, ChatApi.SendError>> {
    if (!this.sessionState.isConnected) {
      return [null, { code: 'NOT_CONNECTED', message: 'Not connected' }];
    }

    const cmd = `MSG|${chatId}|${destination}|${message}|0|`;
    const [, error] = this.backend.write(cmd);

    if (error) {
      return [null, { code: 'NETWORK_ERROR', message: error.message }];
    }

    return [undefined, null];
  }

  async sendCommand(
    chatId: string,
    command: ChatApi.Command
  ): Promise<ChatApi.Result<void, ChatApi.SendError>> {
    if (!this.sessionState.isConnected) {
      return [null, { code: 'NOT_CONNECTED', message: 'Not connected' }];
    }

    const cmdString = serializeCommand(command);
    const frameCmd = `MSG|${chatId}|0|${cmdString}|0|`;
    const [, error] = this.backend.write(frameCmd);

    if (error) {
      return [null, { code: 'NETWORK_ERROR', message: error.message }];
    }

    return [undefined, null];
  }

  // ========== Advanced Configuration ==========

  async addChat(
    chatId: string,
    options?: {
      pastMessages?: number;
      pastDxSpots?: number;
      includeUsers?: boolean;
      lastMessageTimestamp?: number;
      lastDxTimestamp?: number;
    }
  ): Promise<ChatApi.Result<void, ChatApi.SendError>> {
    if (!this.sessionState.isConnected) {
      return [null, { code: 'NOT_CONNECTED', message: 'Not connected' }];
    }

    const cmd = `ACHAT|${chatId}|${options?.pastMessages || 1}|${options?.pastDxSpots || 1}|${options?.includeUsers ? 1 : 0}|${options?.lastMessageTimestamp || 0}|${options?.lastDxTimestamp || 0}|`;
    const [, error] = this.backend.write(cmd);

    if (error) {
      return [null, { code: 'NETWORK_ERROR', message: error.message }];
    }

    return [undefined, null];
  }

  async removeChat(chatId: string): Promise<ChatApi.Result<void, ChatApi.SendError>> {
    if (!this.sessionState.isConnected) {
      return [null, { code: 'NOT_CONNECTED', message: 'Not connected' }];
    }

    const cmd = `DCHAT|${chatId}|`;
    const [, error] = this.backend.write(cmd);

    if (error) {
      return [null, { code: 'NETWORK_ERROR', message: error.message }];
    }

    return [undefined, null];
  }

  async setDXFrequencyRanges(
    chatId: string,
    ranges: Array<{ min: number; max: number }>
  ): Promise<ChatApi.Result<void, ChatApi.SendError>> {
    if (!this.sessionState.isConnected) {
      return [null, { code: 'NOT_CONNECTED', message: 'Not connected' }];
    }

    const rangeStr = ranges.map(r => `${r.min}|${r.max}`).join('|');
    const cmd = `SDXQ|${chatId}|${rangeStr}|`;
    const [, error] = this.backend.write(cmd);

    if (error) {
      return [null, { code: 'NETWORK_ERROR', message: error.message }];
    }

    return [undefined, null];
  }

  async setMapFrequencyRanges(
    chatId: string,
    ranges: Array<{ min: number; max: number }>
  ): Promise<ChatApi.Result<void, ChatApi.SendError>> {
    if (!this.sessionState.isConnected) {
      return [null, { code: 'NOT_CONNECTED', message: 'Not connected' }];
    }

    const rangeStr = ranges.map(r => `${r.min}|${r.max}`).join('|');
    const cmd = `SMAQ|${chatId}|${rangeStr}|`;
    const [, error] = this.backend.write(cmd);

    if (error) {
      return [null, { code: 'NETWORK_ERROR', message: error.message }];
    }

    return [undefined, null];
  }

  async readDXFrequencyRanges(chatId: string): Promise<ChatApi.Result<ChatApi.DXRangesFrame, ChatApi.SendError>> {
    if (!this.sessionState.isConnected) {
      return [null, { code: 'NOT_CONNECTED', message: 'Not connected' }];
    }

    const cmd = `RDXQ|${chatId}|`;
    const [, error] = this.backend.write(cmd);

    if (error) {
      return [null, { code: 'NETWORK_ERROR', message: error.message }];
    }

    // Wait for DXQ response
    return new Promise((resolve) => {
      const timeout = setTimeout(() => {
        resolve([null, { code: 'NETWORK_ERROR', message: 'Timeout waiting for response' }]);
      }, 5000);

      const unsubscribe = this.onFrame((frame) => {
        if (frame.type === 'dx_ranges' && frame.data.chatId === chatId) {
          clearTimeout(timeout);
          unsubscribe();
          resolve([frame.data, null]);
        }
      });
    });
  }

  async readMapFrequencyRanges(chatId: string): Promise<ChatApi.Result<ChatApi.MapRangesFrame, ChatApi.SendError>> {
    if (!this.sessionState.isConnected) {
      return [null, { code: 'NOT_CONNECTED', message: 'NOT_CONNECTED' }];
    }

    const cmd = `RMAQ|${chatId}|`;
    const [, error] = this.backend.write(cmd);

    if (error) {
      return [null, { code: 'NETWORK_ERROR', message: error.message }];
    }

    // Wait for MAQ response
    return new Promise((resolve) => {
      const timeout = setTimeout(() => {
        resolve([null, { code: 'NETWORK_ERROR', message: 'Timeout waiting for response' }]);
      }, 5000);

      const unsubscribe = this.onFrame((frame) => {
        if (frame.type === 'map_ranges' && frame.data.chatId === chatId) {
          clearTimeout(timeout);
          unsubscribe();
          resolve([frame.data, null]);
        }
      });
    });
  }

  async setPropagationReception(enabled: boolean): Promise<ChatApi.Result<void, ChatApi.SendError>> {
    if (!this.sessionState.isConnected) {
      return [null, { code: 'NOT_CONNECTED', message: 'Not connected' }];
    }

    const cmd = `SPR|${enabled ? '1' : '0'}|`;
    const [, error] = this.backend.write(cmd);

    if (error) {
      return [null, { code: 'NETWORK_ERROR', message: error.message }];
    }

    return [undefined, null];
  }

  getConfig(): ChatApi.ClientConfig | null {
    return this.sessionState.config;
  }

  // ========== Internal Methods ==========

  private setupBackendHandlers(): void {
    this.backend.onData((line) => {
      const frame = parseLine(line);
      
      // Handle keepalive before dispatching
      if (frame.type === 'keepalive') {
        this.backend.write('');
      }
      // Dispatch to subscribers
      this.frameSubscriber.dispatch(frame);
    });

    this.backend.onStateChange((transportState) => {
      if (transportState.status === 'disconnected') {
        this.cleanup();
      }
    });
  }

  private notifyStateChange(): void {
    const state = this.sessionState.connectionState;
    this.stateCallbacks.forEach(cb => {
      try {
        cb(state);
      } catch (error) {
        console.error('Error in state callback:', error);
      }
    });
  }

  private cleanup(): void {
    this.frameSubscriber.dispose();
    this.sessionState.cleanup();
    this.notifyStateChange();
  }
}