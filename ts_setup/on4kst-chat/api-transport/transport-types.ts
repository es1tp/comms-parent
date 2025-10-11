
export namespace Transport {

  export type TransportState = 
    | { status: 'disconnected' }
    | { status: 'connecting'; host: string; port: number }
    | { status: 'connected'; host: string; port: number }
    | { status: 'error'; error: Error }

  export interface WriteError {
    code: 'NOT_CONNECTED' | 'WRITE_FAILED' | 'NETWORK_ERROR';
    message: string;
  }

  export type Result<T, E> = [T, null] | [null, E];
  export type Unsubscribe = () => void;

  export interface BackendConfig {
    autoAppendCRLF?: boolean; // default true
    host: string, 
    port: number
  }

  export interface Backend {
    connect(config: BackendConfig): Promise<Transport.Result<void, Transport.WriteError>>
    disconnect(): Promise<Transport.Result<void, Transport.WriteError>>
    write(data: string): Result<void, WriteError>
    
    getState(): TransportState
    
    onStateChange(callback: (state: TransportState) => void): Unsubscribe
    onData(callback: (line: string) => void): Unsubscribe
  }
}