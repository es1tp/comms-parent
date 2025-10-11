import { ChatApi } from './chat-api';
import { Transport, TelnetBackend } from '@/api-transport';
import { parseLine } from './parsers';
import { buildLoginCommand, serializeCommand } from './builders';

/**
 * Implementation of ChatApi.Client
 * Uses Transport.Backend for raw TCP, handles protocol parsing and state
 */
export class ClientImpl implements ChatApi.Client {
  private backend: Transport.Backend;
  private state: ChatApi.ConnectionState = { status: 'disconnected' };
  private login: ChatApi.LoginResponse| null = null;
  private config: ChatApi.ClientConfig | null = null;
  
  // Subscriptions
  private frameCallbacks: Array<(frame: ChatApi.Frame) => void> = [];
  private chatCallbacks: Array<(frames: ChatApi.ChatFrame[]) => void> = [];
  private dxSpotCallbacks: Array<(frames: ChatApi.DXSpotFrame[]) => void> = [];
  private userEventCallbacks: Array<(frame: 
    | ChatApi.UserConnectedFrame 
    | ChatApi.UserDisconnectedFrame 
    | ChatApi.UserStateChangeFrame
  ) => void> = [];
  private stateCallbacks: Array<(state: ChatApi.ConnectionState) => void> = [];
  
  // Frame batching for efficiency
  private chatBatch: ChatApi.ChatFrame[] = [];
  private dxSpotBatch: ChatApi.DXSpotFrame[] = [];
  private batchTimer: number | null = null;
  
  constructor(backend?: Transport.Backend) {
    this.backend = backend || new TelnetBackend();
    this.setupBackendHandlers();
  }

  // ========== Connection Management ==========

  async connect(config: ChatApi.ClientConfig): Promise<ChatApi.Result<ChatApi.LoginResponse, ChatApi.LoginError>> {
    if (this.state.status === 'connecting') {
      return [null, { 
        code: 'NETWORK_ERROR', 
        message: 'Already connected or connecting' 
      }];
    }

    if(this.state.status === 'connected') {
      if(this.login) {
        return [this.login, null];
      }

      return [null, { 
        code: 'NETWORK_ERROR', 
        message: 'Already connected but no login data' 
      }];
    }

    this.config = config;
    this.updateState({ status: 'connecting' });

    // Connect transport
    
    const [, transportError] = await this.backend.connect({
      host: config.host,
      port: config.port,
      autoAppendCRLF: true,
    });

    if (transportError) {
      this.updateState({ status: 'error', error: 'Connection failed' });
      return [null, { code: 'NETWORK_ERROR', message: transportError.message }];
    }

    this.updateState({ status: 'authenticating' });

    // Build LOGIN command
    const loginCmd = buildLoginCommand(config);
    const [, writeError] = this.backend.write(loginCmd);

    if (writeError) {
      await this.backend.disconnect();
      this.updateState({ status: 'error', error: 'Failed to send login' });
      return [null, { code: 'NETWORK_ERROR', message: writeError.message }];
    }

    // Wait for LOGSTAT response
    return new Promise((resolve) => {
      const timeout = setTimeout(() => {
        this.backend.disconnect();
        this.updateState({ status: 'error', error: 'Login timeout' });
        resolve([null, { code: 'TIMEOUT', message: 'Login timeout' }]);
      }, config.connectionTimeout || 10000);

      const unsubscribe = this.onFrame((frame) => {
        if (frame.type === 'login_response') {
          clearTimeout(timeout);
          unsubscribe();

          if (frame.data.code === 100) {
            const sessionKey = frame.data.sessionKey || '';
            this.updateState({ status: 'connected', sessionKey });
            this.updateLogin(frame.data);
            resolve([frame.data, null]);
          } else {
            this.backend.disconnect();
            this.updateState({ status: 'error', error: frame.data.errorMessage || 'Login failed' });
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
    if (this.state.status === 'disconnected') {
      return [null, { code: 'NOT_CONNECTED', message: 'Not connected' }];
    }

    await this.backend.disconnect();
    this.cleanup();
    return [undefined, null];
  }

  isConnected(): boolean {
    return this.state.status === 'connected';
  }

  getConnectionState(): ChatApi.ConnectionState {
    return this.state;
  }

  // ========== Frame Subscriptions ==========

  onFrame(callback: (frame: ChatApi.Frame) => void): ChatApi.Unsubscribe {
    this.frameCallbacks.push(callback);
    return () => {
      const index = this.frameCallbacks.indexOf(callback);
      if (index > -1) this.frameCallbacks.splice(index, 1);
    };
  }

  onChatMessages(callback: (frames: ChatApi.ChatFrame[]) => void): ChatApi.Unsubscribe {
    this.chatCallbacks.push(callback);
    return () => {
      const index = this.chatCallbacks.indexOf(callback);
      if (index > -1) this.chatCallbacks.splice(index, 1);
    };
  }

  onDXSpots(callback: (frames: ChatApi.DXSpotFrame[]) => void): ChatApi.Unsubscribe {
    this.dxSpotCallbacks.push(callback);
    return () => {
      const index = this.dxSpotCallbacks.indexOf(callback);
      if (index > -1) this.dxSpotCallbacks.splice(index, 1);
    };
  }

  onUserEvents(callback: (frame: 
    | ChatApi.UserConnectedFrame 
    | ChatApi.UserDisconnectedFrame 
    | ChatApi.UserStateChangeFrame
  ) => void): ChatApi.Unsubscribe {
    this.userEventCallbacks.push(callback);
    return () => {
      const index = this.userEventCallbacks.indexOf(callback);
      if (index > -1) this.userEventCallbacks.splice(index, 1);
    };
  }

  onConnectionStateChange(callback: (state: ChatApi.ConnectionState) => void): ChatApi.Unsubscribe {
    this.stateCallbacks.push(callback);
    callback(this.state); // Immediate call with current state
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
    if (!this.isConnected()) {
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
    if (!this.isConnected()) {
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
    if (!this.isConnected()) {
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
    if (!this.isConnected()) {
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
    if (!this.isConnected()) {
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
    if (!this.isConnected()) {
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
    if (!this.isConnected()) {
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
    if (!this.isConnected()) {
      return [null, { code: 'NOT_CONNECTED', message: 'Not connected' }];
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
    if (!this.isConnected()) {
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
    return this.config;
  }

  // ========== Internal Methods ==========

  private setupBackendHandlers(): void {
    this.backend.onData((line) => {
      this.handleLine(line);
    });

    this.backend.onStateChange((transportState) => {
      if (transportState.status === 'disconnected') {
        this.cleanup();
      }
    });
  }

  private handleLine(line: string): void {
    const frame = parseLine(line);
    
    // Emit to raw frame subscribers
    this.frameCallbacks.forEach(cb => {
      try {
        cb(frame);
      } catch (error) {
        console.error('Error in frame callback:', error);
      }
    });

    // Handle special frames
    if (frame.type === 'keepalive') {
      // Auto-respond to keepalive
      this.backend.write('');
    } else if (frame.type === 'chat') {
      this.chatBatch.push(frame.data);
      this.scheduleBatchFlush();
    } else if (frame.type === 'dx_spot' || frame.type === 'combined_spot') {
      this.dxSpotBatch.push(frame.data as ChatApi.DXSpotFrame);
      this.scheduleBatchFlush();
    } else if (frame.type === 'user_connected' || frame.type === 'user_disconnected' || frame.type === 'user_state_change') {
      this.userEventCallbacks.forEach(cb => {
        try {
          cb(frame.data as any);
        } catch (error) {
          console.error('Error in user event callback:', error);
        }
      });
    }
  }




  private scheduleBatchFlush(): void {
    if (this.batchTimer) return;
    
    this.batchTimer = setTimeout(() => {
      this.flushBatches();
    }, 50); // 50ms debounce
  }

  private flushBatches(): void {
    if (this.chatBatch.length > 0) {
      const batch = [...this.chatBatch];
      this.chatBatch = [];
      this.chatCallbacks.forEach(cb => {
        try {
          cb(batch);
        } catch (error) {
          console.error('Error in chat callback:', error);
        }
      });
    }

    if (this.dxSpotBatch.length > 0) {
      const batch = [...this.dxSpotBatch];
      this.dxSpotBatch = [];
      this.dxSpotCallbacks.forEach(cb => {
        try {
          cb(batch);
        } catch (error) {
          console.error('Error in DX spot callback:', error);
        }
      });
    }

    this.batchTimer = null;
  }

  private updateState(newState: ChatApi.ConnectionState): void {
    this.state = newState;
    this.stateCallbacks.forEach(cb => {
      try {
        cb(newState);
      } catch (error) {
        console.error('Error in state callback:', error);
      }
    });
  }

  private updateLogin(newState: ChatApi.LoginResponse): void {
    this.login = newState;
  }

  private cleanup(): void {
    if (this.batchTimer) {
      clearTimeout(this.batchTimer);
      this.batchTimer = null;
    }
    this.flushBatches();
    this.updateState({ status: 'disconnected' });
    this.config = null;
  }
}