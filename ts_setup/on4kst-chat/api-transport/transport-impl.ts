import TcpSocket from 'react-native-tcp-socket';
import type { Transport } from './transport-types';

/**
 * Implementation of Transport.Backend using react-native-tcp-socket
 * Handles raw TCP connection with line-buffering for telnet protocol
 */
export class TelnetBackend implements Transport.Backend {
  private socket: TcpSocket.Socket | null = null;
  private state: Transport.TransportState = { status: 'disconnected' };
  private config: Transport.BackendConfig | null = null;
  
  // Line buffering
  private buffer: string = '';
  
  // Subscriptions
  private stateChangeCallbacks: Array<(state: Transport.TransportState) => void> = [];
  private dataCallbacks: Array<(line: string) => void> = [];

  async connect(config: Transport.BackendConfig): Promise<Transport.Result<void, Transport.WriteError>> {
    if (this.state.status === 'connected' || this.state.status === 'connecting') {
      return [null, { code: 'NETWORK_ERROR', message: 'Already connected or connecting' }];
    }

    this.config = config;
    this.updateState({
      status: 'connecting',
      host: config.host,
      port: config.port,
    });

    return new Promise<Transport.Result<void, Transport.WriteError>>((resolve) => {
      try {
        this.socket = TcpSocket.createConnection(
          {
            host: config.host,
            port: config.port,
          },
          () => {
            // Connection established
            this.updateState({
              status: 'connected',
              host: config.host,
              port: config.port,
            });
            resolve([undefined, null]);
          }
        );

        // Set up event handlers
        this.socket.on('data', (data: any) => {
          this.handleIncomingData(data);
        });

        this.socket.on('error', (error: Error) => {
          this.updateState({ status: 'error', error });
          resolve([null, { code: 'NETWORK_ERROR', message: error.message }]);
        });

        this.socket.on('close', () => {
          this.handleClose();
        });
      } catch (error) {
        const errorMsg = error instanceof Error ? error.message : String(error);
        this.updateState({ 
          status: 'error', 
          error: error instanceof Error ? error : new Error(errorMsg)
        });
        resolve([null, { code: 'NETWORK_ERROR', message: errorMsg }]);
      }
    });
  }

  async disconnect(): Promise<Transport.Result<void, Transport.WriteError>> {
    if (!this.socket) {
      return [undefined, null];
    }

    return new Promise<Transport.Result<void, Transport.WriteError>>((resolve) => {
      if (this.socket) {
        this.socket.destroy();
        this.socket = null;
      }
      this.buffer = '';
      this.updateState({ status: 'disconnected' });
      resolve([undefined, null]);
    });
  }

  write(data: string): Transport.Result<void, Transport.WriteError> {
    if (this.state.status !== 'connected') {
      return [null, { code: 'NOT_CONNECTED', message: 'Not connected to server' }];
    }

    if (!this.socket) {
      return [null, { code: 'NOT_CONNECTED', message: 'Socket not available' }];
    }

    try {
      const payload = this.config?.autoAppendCRLF !== false 
        ? data + '\r\n' 
        : data;
      
      this.socket.write(payload);
      return [undefined, null];
    } catch (error) {
      return [
        null,
        {
          code: 'WRITE_FAILED',
          message: error instanceof Error ? error.message : String(error),
        },
      ];
    }
  }

  getState(): Transport.TransportState {
    return this.state;
  }

  onStateChange(callback: (state: Transport.TransportState) => void): Transport.Unsubscribe {
    this.stateChangeCallbacks.push(callback);
    
    // Immediately call with current state
    callback(this.state);
    
    return () => {
      const index = this.stateChangeCallbacks.indexOf(callback);
      if (index > -1) {
        this.stateChangeCallbacks.splice(index, 1);
      }
    };
  }

  onData(callback: (line: string) => void): Transport.Unsubscribe {
    this.dataCallbacks.push(callback);
    
    return () => {
      const index = this.dataCallbacks.indexOf(callback);
      if (index > -1) {
        this.dataCallbacks.splice(index, 1);
      }
    };
  }
  
  private updateState(newState: Transport.TransportState): void {
    console.log(newState);
    this.state = newState;
    this.stateChangeCallbacks.forEach((callback) => {
      try {
        callback(newState);
      } catch (error) {
        console.error('Error in state change callback:', error);
      }
    });
  }

  private handleIncomingData(data: any): void {
    // Convert to string - handle both Buffer and Uint8Array
    const chunk = typeof data === 'string' 
      ? data 
      : data.toString('utf8');
    
    this.buffer += chunk;

    // Split on \r\n and process complete lines
    const lines = this.buffer.split('\r\n');
    
    // Keep the last incomplete line in the buffer
    this.buffer = lines.pop() || '';

    // Emit complete lines
    lines.forEach((line) => {
      if (line.length > 0) {
        this.emitLine(line);
      }
    });
  }

  private emitLine(line: string): void {
    this.dataCallbacks.forEach((callback) => {
      try {
        callback(line);
      } catch (error) {
        console.error('Error in data callback:', error);
      }
    });
  }

  private handleClose(): void {
    this.socket = null;
    this.buffer = '';
    this.updateState({ status: 'disconnected' });
  }
}