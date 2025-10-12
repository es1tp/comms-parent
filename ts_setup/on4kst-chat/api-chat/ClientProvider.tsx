import React from 'react';
import { create } from 'zustand'
import { ChatApi } from './chat-api';
import { ClientImpl } from './chat-impl';

export interface ClientContextType {
  client: ChatApi.Client;
  store: MessageStore;
}

export type ClientProviderProps = {
  children: React.ReactNode;
}


interface MessageStore {
  messages: ChatApi.ChatFrame[];
}

const useMessageStore = create<MessageStore>((set) => ({
  messages: [],
  addMessages: (messages: ChatApi.ChatFrame[]) => set((state) => ({ 
    ...state,
    messages: [...state.messages,...messages]
  })) 
}))

export const ClientProvider = ({ children }: ClientProviderProps) => {
  const store = useMessageStore();
  const client = React.useMemo(() => {
    const result = new ClientImpl();
    result.onFrame((frames) => {

      //console.log(frames);

    });

        result.onHistoricalMessages((frames) => {

      console.log('historical', frames);

    });

    result.onChatMessages((frames) => {
      console.log('chat', frames);
    });

    return result;
  }, []);
  

  return (
    <ClientContext.Provider value={{ client, store }}>
      {children}
    </ClientContext.Provider>
  );
}

const ClientContext = React.createContext<ClientContextType | undefined>(undefined);

export const useClient = () => {
  const context = React.useContext(ClientContext);
  if (!context) {
    throw new Error('useClient must be used within ClientProvider');
  }
  return context;
}