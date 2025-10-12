import { FlashList } from '@shopify/flash-list';
import { YStack, XStack, Input, Text, Card } from 'tamagui';
import { useState } from 'react';
import { useClient } from '@/api-chat';
import React from 'react';

// Mock data structure
interface Message {
  id: string;
  callsign: string;
  message: string;
  timestamp: number;
  locator: string;
}

// Mock messages with locator field
const MOCK_MESSAGES: Message[] = [
  { id: '1', callsign: 'W1ABC', message: 'CQ on 144.200', timestamp: Date.now() - 60000, locator: 'FN42ab' },
  { id: '2', callsign: 'K2XYZ', message: 'QRZ?', timestamp: Date.now() - 55000, locator: 'FN31pr' },
  { id: '3', callsign: 'N3QQQ', message: 'Anyone working satellites today?', timestamp: Date.now() - 50000, locator: 'FM19fg' },
  { id: '4', callsign: 'VE4HAM', message: 'Hearing W1ABC weak here', timestamp: Date.now() - 45000, locator: 'EN19dx' },
  { id: '5', callsign: 'G5RST', message: '73 to all from the UK', timestamp: Date.now() - 40000, locator: 'IO91vk' },
  { id: '6', callsign: 'JA6CCC', message: 'Good morning from Japan', timestamp: Date.now() - 35000, locator: 'PM74uu' },
  { id: '7', callsign: 'W1ABC', message: 'VE4HAM thanks for the report', timestamp: Date.now() - 30000, locator: 'FN42ab' },
  { id: '8', callsign: 'K9TEST', message: 'Testing new antenna setup', timestamp: Date.now() - 25000, locator: 'EN52wc' },
  { id: '9', callsign: 'DL1QQQ', message: 'Propagation good to NA today', timestamp: Date.now() - 20000, locator: 'JO62sm' },
  { id: '10', callsign: 'W2UUU', message: 'Looking for skeds on 6m', timestamp: Date.now() - 15000, locator: 'FN13bt' },
];

// Format timestamp to HH:mm
const formatTime = (timestamp: number): string => {
  const date = new Date(timestamp);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};

// Message item component
const MessageItem = ({ item }: { item: Message }) => (
  <YStack padding="$3" gap="$2">
    {/* Header: callsign | time | locator - ALL RED */}
    <XStack gap="$2" alignItems="center">
      <Text color="$color" fontWeight="bold">
        {item.callsign}
      </Text>
      <Text color="$color" opacity={0.6}>|</Text>
      <Text color="$color" opacity={0.8} fontSize="$2">
        {formatTime(item.timestamp)}
      </Text>
      <Text color="$color" opacity={0.6}>|</Text>
      <Text color="$color" opacity={0.8} fontSize="$2">
        {item.locator}
      </Text>
    </XStack>
    
    {/* Message box with cyan border and glow */}
    <Card
      bordered
      borderColor="$neonCyan"
      borderWidth={1}
      padding="$3"
      backgroundColor="$background"
      shadowColor="$neonCyan"
      shadowOffset={{ width: 0, height: 0 }}
      shadowOpacity={0.5}
      shadowRadius={8}
      elevationAndroid={8}
    >
      <Text color="$color">
        {item.message}
      </Text>
    </Card>
  </YStack>
);

// Main chat screen
export function ChatScreen() {
  const [messages] = useState<Message[]>(MOCK_MESSAGES);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim()) {
      // TODO: Send message via API
      console.log('Send:', inputText);
      setInputText('');
    }
  };

  const chat = useClient();

  React.useEffect(() => {
    //chat.client.sendCommand('2', { type: ''})
  }, [])

  console.log(chat.store.messages);

  return (
    <YStack flex={1} backgroundColor="$background">
      <YStack flex={1}>
        <FlashList
          data={messages}
          renderItem={({ item }) => <MessageItem item={item} />}
          keyExtractor={(item) => item.id}
        />
      </YStack>
      
      <XStack 
        padding="$3" 
        gap="$2" 
        backgroundColor="$background"
        borderTopWidth={1}
        borderTopColor="$borderColor"
      >
        <Input
          flex={1}
          placeholder="Type message..."
          value={inputText}
          onChangeText={setInputText}
          onSubmitEditing={handleSend}
        />
      </XStack>
    </YStack>
  );
}