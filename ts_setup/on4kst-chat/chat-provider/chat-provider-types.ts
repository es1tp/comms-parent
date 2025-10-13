import { ChatApi } from '@/api-chat';


export interface ChatContextType {
  client: ChatApi.Client;
  store: Omit<ChatStore, 'addMessages' | 'addUsers'>;
}

export type ChatProviderProps = {
  children: React.ReactNode;
}

export interface User {
  chatId: string;
  callsign: string;
  firstName: string;
  locator: { 
    maidenhead: string, 
    lat: number | undefined; 
    lng: number | undefined;
    distanceInKm: number | undefined;
    rotator: number | undefined;
  };
  state: ChatApi.UserState;
}

export interface UserMessage {
  chatId: ChatApi.ChatId;
  /** Unix timestamp in seconds */
  date: Date;
  callsign: string;
  /** '0' for public, or callsign for private message */
  destination: string;
  message: string;
  /** To ignore */
  highlight: string;

  
}

export interface ChatStore {
  messages: UserMessage[];
  callbook: Record<string, User> 
  addMessages: (messages: (ChatApi.ChatFrame | ChatApi.ChatLoginFrame)[]) => void;
  addUsers: (users: ChatApi.UserListFrame, myLocation: { locator: string | null, calibrationOffset: number | null}) => void;
}