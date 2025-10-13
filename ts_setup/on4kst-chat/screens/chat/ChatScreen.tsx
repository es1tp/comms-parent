import { FlashList } from '@shopify/flash-list';
import { YStack, XStack, Input, Text, Card } from 'tamagui';
import { useState } from 'react';
import { useChat, User, UserMessage } from '@/chat-provider';
import React from 'react';


// Format timestamp to HH:mm
const formatTime = (date: Date): string => {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};

// Message item component
const MessageItem = ({ item }: { item: UserMessage }) => {
  const { store } = useChat();
  return (<YStack padding="$3" gap="$1">
    {/* Header: callsign | time | locator - ALL RED */}
    <XStack gap="$2" alignItems="center">
      <Text color="$color" fontWeight="bold">
        {item.callsign}
      </Text>
      <Text color="$color" opacity={0.6}>|</Text>
      <Text color="$color" opacity={0.8} fontSize="$2">
        {formatTime(item.date)}
      </Text>
      <Text color="$color" opacity={0.6}>|</Text>
      <Text color="$color" opacity={0.8} fontSize="$2">
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
    </XStack>
    
    {/* Message box with cyan border and glow */}
    <Card
      bordered
      borderColor="$neonPink"
      borderWidth={0.5}
      padding="$3"
      backgroundColor="$background"
      shadowColor="$neonPink"
      shadowOffset={{ width: 0, height: 0 }}
      shadowOpacity={0.5}
      shadowRadius={4}
      elevationAndroid={4}
    >
      <Text color="$color">
        {item.message}
      </Text>
    </Card>
  </YStack>)
}

// Main chat screen
export function ChatScreen() {
  const [inputText, setInputText] = useState('');
  const chat = useChat();

  const handleSend = async () => {
    //await chat.client.sendMessage('2', '0', inputText);
    setInputText('');
  };
  
  return (
    <YStack flex={1} backgroundColor="$background">
      <YStack flex={1}>
        <FlashList
          data={chat.store.messages}
          renderItem={({ item }) => <MessageItem item={item} />}
          keyExtractor={(item, index) => index + ''}
        />
      </YStack>
      
      <XStack 
        borderTopWidth={1}
        padding="$3" 
        gap="$2" 
        backgroundColor="$background"
        borderTopColor="$borderColor">
        <Input
          flex={1}
          borderWidth={1}
          placeholder="Type message..."
          value={inputText}
          onChangeText={setInputText}
          onSubmitEditing={handleSend}
        />
      </XStack>
    </YStack>
  );
}