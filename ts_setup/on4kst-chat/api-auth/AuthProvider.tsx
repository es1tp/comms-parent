import React from 'react';
import { AppState } from 'react-native';
import { ChatApi } from '@/api-chat';
import { useChat } from '@/chat-provider';
import { Profile, useProfile } from '@/api-profile';


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

  login: (profile: Profile) => Promise<void>;
  logout: (perm?: boolean) => Promise<void>;
}

export type AuthProviderProps = {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [connectionState, setConnectionState] = React.useState<ChatApi.ConnectionState>({ status: 'disconnected' });
  const chat = useChat();

  const { profile, clear } = useProfile();
  const appState = React.useRef(AppState.currentState);


  React.useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        // App came to foreground - check backend connection
        chat.client.connect({ 
          ...CONNECTION_PROPS, 
          chatId: profile.chatId as ChatApi.ChatId, 
          callsign: profile.callsign, 
          password: profile.password }, true);

      } else if (nextAppState.match(/inactive|background/)) {

      }
      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const login = React.useCallback(async (profile: Profile) => {
    try {
      setConnectionState({ status: 'connecting' });

      const [token, error] = await chat.client.connect({
        ...CONNECTION_PROPS,
        chatId: profile.chatId as ChatApi.ChatId, 
        callsign: profile.callsign, 
        password: profile.password
      });

      if (error) {
        throw error;
      }

      const connectionState = chat.client.getConnectionState();
      setConnectionState(connectionState);
    } catch (error) {
      setConnectionState({ status: 'error', error: error as Error });
      throw error;
    }
  }, [profile])

  const logout = React.useCallback(async (perm?: boolean) => {
    if (perm) {
      clear();
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