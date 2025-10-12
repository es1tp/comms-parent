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
  addMessages: (messages: ChatApi.ChatFrame[]) => void;
}

const useMessageStore = create<MessageStore>((set) => ({
  messages: [],
  addMessages: (messages: ChatApi.ChatFrame[]) => set((state) => ({ 
    ...state,
    messages: [...state.messages,...messages].sort(({ date: a }, { date: b }) => a.getTime() - b.getTime())
  })) 
}))

export const ClientProvider = ({ children }: ClientProviderProps) => {
  const store = useMessageStore();
  const client = React.useMemo(() => {
    const result = new ClientImpl();
    result.onFrame((frames) => {

    });

    result.onHistoricalMessages((frames) => {
      store.addMessages(frames)
    });

    result.onChatMessages((frames) => {
      console.log(frames);
      store.addMessages(frames)
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