import React from 'react';
import { XStack, Text } from 'tamagui';
import { useChat, UserMessage } from '@/chat-provider';



// Format timestamp to HH:mm
const formatTime = (date: Date): string => {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};

export const ChatMessageTitle: React.FC<{ 
  item: UserMessage, 
  onLocatorMap: (locator: string, callsign: string) => void 
}> = ({item, onLocatorMap}) => {

  const { store } = useChat();
  function handleLocatorMap() {
    const theirLocator = store.callbook[item.callsign]?.locator.maidenhead;
    if(theirLocator) {
      onLocatorMap(theirLocator, item.callsign);
    }
  }

  return (
    <XStack gap="$2" alignItems="center">
      <Text color="$color" fontWeight="bold">
        {item.callsign}
      </Text>
      <Text color="$color" opacity={0.6}>|</Text>
      <Text color="$color" opacity={0.8} fontSize="$2">
        {formatTime(item.date)}
      </Text>
      <Text color="$color" opacity={0.6}>|</Text>

      
      <Text color="$color" opacity={0.8} fontSize="$2" onPress={handleLocatorMap}>
        {store.callbook[item.callsign]?.locator.maidenhead}
      </Text>

      <Text color="$color" opacity={0.6}>|</Text>
      <Text color="$color" opacity={0.8} fontSize="$2">
        {store.callbook[item.callsign]?.locator.distanceInKm} km
      </Text>

      <Text color="$color" opacity={0.6}>|</Text>
      <Text color="$color" opacity={0.8} fontSize="$2">
        {store.callbook[item.callsign]?.locator.rotator} bearing
      </Text>
    </XStack>)
}