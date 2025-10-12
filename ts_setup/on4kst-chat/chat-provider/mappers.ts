import { ChatApi } from "@/api-chat";
import { UserMessage } from "./chat-provider-types";



export function mapToMessage(message: ChatApi.ChatFrame | ChatApi.ChatLoginFrame): UserMessage {
  return {
    chatId: message.chatId,
    date: message.date,
    callsign: message.callsign.toUpperCase(),
    destination: message.destination,
    message: message.message,
    highlight: message.highlight
  }
}