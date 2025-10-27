import React from 'react';
import { XStack, Text } from 'tamagui';
import { useChat, UserMessage } from '@/chat-provider';
import { useProfile } from '@/api-profile';
import { useRotator } from '@/api-rotator';



// Format timestamp to HH:mm
const formatTime = (date: Date): string => {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};

const AppendValue: React.FC<{
  value: string | number | undefined | null;
  children: (value: string | number) => React.ReactNode;
}> = (props) => {
  
  if(props.value) {
    return (
      <>
        <Text color="$color" opacity={0.6}>|</Text>
        {props.children(props.value)}
      </>
    )
  }
  return null;
}

export const ChatMessageTitle: React.FC<{ 
  item: UserMessage, 
  onLocatorMap: (locator: string, callsign: string) => void 
}> = ({item, onLocatorMap}) => {

  const { profile } = useProfile();
  const rotator = useRotator(profile.rotator.config)

  const { store } = useChat();
  function handleLocatorMap() {
    const theirLocator = store.callbook[item.callsign]?.locator.maidenhead;
    if(theirLocator) {
      onLocatorMap(theirLocator, item.callsign);
    }
  }

  function handleBearing() {
    const azimuth = store.callbook[item.callsign]?.locator.rotator;
    if(azimuth) {
      rotator.setSpeed(4).then(() => rotator.setAzimuth(azimuth));
    }
  }

  return (
    <XStack gap="$2" alignItems="center">
      <Text color="$color" fontWeight="bold">
        {item.callsign}
      </Text>
      <AppendValue value={formatTime(item.date)}>
        {(value) => (<Text color="$color" opacity={0.8} fontSize="$2">{value}</Text>)}
      </AppendValue>
      
      <AppendValue value={store.callbook[item.callsign]?.locator.maidenhead}>
        {(value) => (<Text color="$color" textDecorationLine="underline" opacity={0.8} fontSize="$2" onPress={handleLocatorMap}>{value}</Text>)}
      </AppendValue>

      <AppendValue value={store.callbook[item.callsign]?.locator.distanceInKm}>
        {(value) => (<Text color="$color" opacity={0.8} fontSize="$2">{value} km</Text>)}
      </AppendValue>

      <AppendValue value={store.callbook[item.callsign]?.locator.rotator} >
        {(value) => (<Text color="$color" textDecorationLine="underline" opacity={0.8} fontSize="$2" onPress={handleBearing}>{value} bearing</Text>)}
      </AppendValue>
    </XStack>)
}