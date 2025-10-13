import React from 'react';
import { create } from 'zustand'
import { ClientImpl } from '@/api-chat';
import { ChatContextType, ChatProviderProps, ChatStore, User } from './chat-provider-types';
import { mapToMessage, mapToUser } from './mappers';
import { useAuthStorage } from '@/api-auth';


const useMessageStore = create<ChatStore>((set) => ({
  messages: [],
  callbook: {},

  addUsers: (users, myLocation) => set((state) => ({ 
    ...state,
    callbook: { ...state.callbook, ...[users].reduce((acc, user) => {
      acc[user.callsign.toUpperCase()] = mapToUser(user, myLocation);
      return acc;
    }, {} as Record<string, User>)}
  })),

  addMessages: (messages) => set((state) => ({ 
    ...state,

    messages: [...state.messages,...messages.map(mapToMessage)]
      .sort(({ date: a }, { date: b }) => a.getTime() - b.getTime())
  })) 
}))

export const ChatProvider = ({ children }: ChatProviderProps) => {
  const store = useMessageStore();
  const auth = useAuthStorage();

  const client = React.useMemo(() => {
    const result = new ClientImpl();
    result.onFrame((frames) => {
      //console.log(frames)
    });

    result.onHistoricalMessages((frames) => {
      store.addMessages(frames)
    });

    result.onChatMessages((frames) => {
      console.log(frames);
      store.addMessages(frames)
    });

    result.onUserEvents((frame) => {
      if(frame.frameType == 'user_list') {
        auth.getMyLocaltion().then(me => store.addUsers(frame, me))
      }
    })
    return result;
  }, []);

  return (
    <ChatContext.Provider value={{ client, store }}>
      {children}
    </ChatContext.Provider>
  );
}

const ChatContext = React.createContext<ChatContextType | undefined>(undefined);

export const useChat = () => {
  const context = React.useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within ClientProvider');
  }
  return context;
}