import React from 'react';
import { AppState } from 'react-native';
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

  login: (callsign: string, password: string, chatId: ChatApi.ChatId, locator: string | null, calibrationOffset: number | null) => Promise<void>;
  logout: (perm?: boolean) => Promise<void>;
}

export type AuthProviderProps = {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [connectionState, setConnectionState] = React.useState<ChatApi.ConnectionState>({ status: 'disconnected' });
  const chat = useChat();

  const { secureStorage } = useSecureStorage();
  const appState = React.useRef(AppState.currentState);


  React.useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        // App came to foreground - check backend connection

        Promise.all([ 
          secureStorage.getCallsign(), 
          secureStorage.getPassword(), 
          secureStorage.getChatId() ])
        .then(([callsign, password, chatId]) => {
          if(chatId && callsign && password) {
            console.log('background reconnect ...');
            chat.client.connect({ ...CONNECTION_PROPS, chatId: chatId as ChatApi.ChatId, callsign, password }, true);
          }
        })

      } else if (nextAppState.match(/inactive|background/)) {

      }
      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const login = React.useCallback(async (callsign: string, password: string, chatId: ChatApi.ChatId, locator: string | null, calibrationOffset: number | null) => {
    try {
      setConnectionState({ status: 'connecting' });

      const [token, error] = await chat.client.connect({
        ...CONNECTION_PROPS,
        chatId,
        callsign, password
      });

      if (error) {
        throw error;
      }

      const connectionState = chat.client.getConnectionState();
      await secureStorage.saveCredentials(callsign, password, chatId, locator, calibrationOffset);
      await secureStorage.saveToken(JSON.stringify(token));

      setConnectionState(connectionState);
    } catch (error) {
      setConnectionState({ status: 'error', error: error as Error });
      throw error;
    }
  }, [])

  const logout = React.useCallback(async (perm?: boolean) => {
    if (perm) {
      await secureStorage.clearAll();
    }
    await chat.client.disconnect();
    setConnectionState({ status: 'disconnected' });
  }, []);

  return (
    <AuthContext.Provider value={{ connectionState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}