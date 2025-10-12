import { FlashList } from '@shopify/flash-list';
import { Stack, YStack, XStack, Input, Text } from 'tamagui';
import { useState } from 'react';

// Mock data structure
interface Message {
  id: string;
  callsign: string;
  message: string;
  timestamp: number;
}

// Mock messages
const MOCK_MESSAGES: Message[] = [
  { id: '1', callsign: 'W1ABC', message: 'CQ on 144.200', timestamp: Date.now() - 60000 },
  { id: '2', callsign: 'K2XYZ', message: 'QRZ?', timestamp: Date.now() - 55000 },
  { id: '3', callsign: 'N3QQQ', message: 'Anyone working satellites today?', timestamp: Date.now() - 50000 },
  { id: '4', callsign: 'VE4HAM', message: 'Hearing W1ABC weak here', timestamp: Date.now() - 45000 },
  { id: '5', callsign: 'G5RST', message: '73 to all from the UK', timestamp: Date.now() - 40000 },
  { id: '6', callsign: 'JA6CCC', message: 'Good morning from Japan', timestamp: Date.now() - 35000 },
  { id: '7', callsign: 'W1ABC', message: 'VE4HAM thanks for the report', timestamp: Date.now() - 30000 },
  { id: '8', callsign: 'K9TEST', message: 'Testing new antenna setup', timestamp: Date.now() - 25000 },
  { id: '9', callsign: 'DL1QQQ', message: 'Propagation good to NA today', timestamp: Date.now() - 20000 },
  { id: '10', callsign: 'W2UUU', message: 'Looking for skeds on 6m', timestamp: Date.now() - 15000 },
];

// Message item component
const MessageItem = ({ item }: { item: Message }) => (
  <XStack padding="$2" gap="$2">
    <Text color="$green10" fontWeight="bold">
      {item.callsign}:
    </Text>
    <Text color="$gray11" flex={1}>
      {item.message}
    </Text>
  </XStack>
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

  return (
    <YStack flex={1} backgroundColor="$background">
      <Stack flex={1}>
        <FlashList
          data={messages}
          renderItem={MessageItem}
          keyExtractor={(item) => item.id}
        />
      </Stack>
      
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