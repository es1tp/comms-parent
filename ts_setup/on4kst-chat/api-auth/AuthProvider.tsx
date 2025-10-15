import React, { createContext, useContext, useState, useEffect, ReactNode, useMemo } from 'react';
import { ChatApi } from '@/api-chat';
import { useChat } from '@/chat-provider';
import { useSecureStorage } from '@/api-secure-storage';


const CONNECTION_PROPS: ChatApi.ClientConfig = {
  host: 'www.on4kst.info',
  port: 23001,
  chatId: '2',
  clientVersion: 'react_native_v_1',
  pastMessages: 50,
  callsign: '',
  password: ''
} 

export interface AuthContextType {
  connectionState: ChatApi.ConnectionState;
  needsReauth: boolean;
  
  login: (callsign: string, password: string, chatId: ChatApi.ChatId, locator: string | null, calibrationOffset: number | null) => Promise<void>;
  logout: (perm?: boolean) => Promise<void>;
  
  reconnect: (password: string) => Promise<void>;
  dismissReauth: () => void;
}

export type AuthProviderProps = {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [connectionState, setConnectionState] = useState<ChatApi.ConnectionState>({ status: 'disconnected' });
  const [needsReauth, setNeedsReauth] = useState(false);
  const { client } = useChat();
  const { secureStorage } = useSecureStorage();

  // On mount, try to restore session
  useEffect(() => {
    restoreSession();
  }, []);

  const restoreSession = async () => {
    try {
      const tokenRaw = await secureStorage.getToken();
      const token: ChatApi.LoginResponse = tokenRaw ? JSON.parse(tokenRaw) : undefined;
      const callsign = await secureStorage.getCallsign();
      const password = await secureStorage.getPassword();
      const chatId = await secureStorage.getChatId();
      const me = await secureStorage.getMyLocaltion()

      if (token && callsign && password && chatId) {
        // Check if token still works
        const connectionState = client.getConnectionState();
        await secureStorage.saveCredentials(callsign, password, chatId, me.locator, me.calibrationOffset);
        await secureStorage.saveToken(JSON.stringify(token));

        if (connectionState.status === 'disconnected' || connectionState.status === 'error') {
          setNeedsReauth(true);
        }
      }
    } catch (error) {
      console.error('Session restore failed:', error);
      setConnectionState({ status: 'disconnected' });
    }
  }

  const login = async (callsign: string, password: string, chatId: ChatApi.ChatId, locator: string | null, calibrationOffset: number | null) => {
    try {
      setConnectionState({ status: 'connecting' });

      const [token, error] = await client.connect({
        ...CONNECTION_PROPS,
        chatId,
        callsign, password
      });

      if(error) {
        throw error;
      }

      const connectionState = client.getConnectionState();
      await secureStorage.saveCredentials(callsign, password, chatId,locator, calibrationOffset);
      await secureStorage.saveToken(JSON.stringify(token));

      setConnectionState(connectionState);
      setNeedsReauth(false);
    } catch (error) {
      setConnectionState({ status: 'error', error: error as Error });
      throw error;
    }
  }

  const reconnect = async (password: string) => {
    const callsign = await secureStorage.getCallsign();
    const me = await secureStorage.getMyLocaltion();
    const chatId: ChatApi.ChatId = (await secureStorage.getChatId()) as ChatApi.ChatId;
    if (!callsign) {
      throw new Error('No saved callsign found');
    }
    await login(callsign, password, chatId, me.locator, me.calibrationOffset);
  }

  const logout = async (perm?: boolean) => {
    if(perm) {
      await secureStorage.clearAll();
    }
    await client.disconnect();
    setConnectionState({ status: 'disconnected' });
    setNeedsReauth(false);
  }

  const dismissReauth = () => {
    setNeedsReauth(false);
  }

  return (
    <AuthContext.Provider
      value={{
        connectionState,
        needsReauth,
        login,
        reconnect,
        logout,
        dismissReauth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}

