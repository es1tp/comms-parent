import { ChatApi } from './chat-api';

export interface SessionState {
  // State queries (getters)
  readonly connectionState: ChatApi.ConnectionState;
  readonly isConnected: boolean;
  readonly sessionKey: string | null;
  readonly config: ChatApi.ClientConfig | null;
  readonly loginResponse: ChatApi.LoginResponse | null;
  
  // State mutations
  setConnecting(): void;
  setAuthenticating(): void;
  setConnected(sessionKey: string, loginResponse: ChatApi.LoginResponse): void;
  setReconnecting(attempt: number): void;
  setError(error: string | Error): void;
  setDisconnected(): void;
  
  // Lifecycle
  initialize(config: ChatApi.ClientConfig): void;
  cleanup(): void;
}


export class SessionStateImpl implements SessionState {
  private _connectionState: ChatApi.ConnectionState = { status: 'disconnected' };
  private _config: ChatApi.ClientConfig | null = null;
  private _loginResponse: ChatApi.LoginResponse | null = null;

  // Getters
  get connectionState(): ChatApi.ConnectionState {
    return this._connectionState;
  }

  get isConnected(): boolean {
    return this._connectionState.status === 'connected';
  }

  get sessionKey(): string | null {
    if (this._connectionState.status === 'connected') {
      return this._connectionState.sessionKey;
    }
    return null;
  }

  get config(): ChatApi.ClientConfig | null {
    return this._config;
  }

  get loginResponse(): ChatApi.LoginResponse | null {
    return this._loginResponse;
  }

  // State mutations
  setConnecting(): void {
    this._connectionState = { status: 'connecting' };
  }

  setAuthenticating(): void {
    this._connectionState = { status: 'authenticating' };
  }

  setConnected(sessionKey: string, loginResponse: ChatApi.LoginResponse): void {
    this._connectionState = { status: 'connected', sessionKey };
    this._loginResponse = loginResponse;
  }

  setReconnecting(attempt: number): void {
    this._connectionState = { status: 'reconnecting', attempt };
  }

  setError(error: string | Error): void {
    this._connectionState = { status: 'error', error };
  }

  setDisconnected(): void {
    this._connectionState = { status: 'disconnected' };
  }

  // Lifecycle
  initialize(config: ChatApi.ClientConfig): void {
    this._config = config;
    this._connectionState = { status: 'disconnected' };
    this._loginResponse = null;
  }

  cleanup(): void {
    this._connectionState = { status: 'disconnected' };
    this._config = null;
    this._loginResponse = null;
  }
}