import React from 'react';
import { create } from 'zustand'
import { ClientImpl } from '@/api-chat';
import { ChatContextType, ChatProviderProps, ChatStore, User } from './chat-provider-types';
import { mapToMessage, mapToUser } from './mappers';
import { useProfile } from '@/api-profile';


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
const init = new ClientImpl();

export const ChatProvider = ({ children }: ChatProviderProps) => {
  const store = useMessageStore();
  const { profile } = useProfile();

  const client = React.useMemo(() => {    
    init.onFrame((frames) => {
      //console.log(frames)
    });

    init.onHistoricalMessages((frames) => {
      store.addMessages(frames)
    });

    init.onChatMessages((frames) => {
      console.log('new messages');
      store.addMessages(frames)
    });

    init.onUserEvents((frame) => {
      if(frame.frameType == 'user_list') {
        store.addUsers(frame, {
          calibrationOffset: profile.rotator.calibrationOffset,
          locator: profile.locator
        });
      }
    })
    return init;
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