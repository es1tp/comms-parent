import { ChatApi } from "@/api-chat";
import { User, UserMessage } from "./chat-provider-types";
import { locatorToCoords, calculateBearing, calculateDistance } from './locator';


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


export function mapToUser(user: ChatApi.UserListFrame, rotator: { locator: string | null, calibrationOffset: number | null }): User {
  const cords = locatorToCoords(user.locator);

  
  return {
    chatId: user.chatId,
    callsign: user.callsign,
    firstName: user.firstName,
    state: user.state,
    locator: {
      maidenhead: user.locator,
      distanceInKm: rotator.locator ? calculateDistance(rotator.locator, user.locator) : undefined,
      rotator: rotator.locator ? calculateBearing(rotator.locator, user.locator, rotator.calibrationOffset ?? 0) : undefined,
      lat: cords?.lat,
      lng: cords?.lng,
    },
  }
}