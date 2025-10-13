import React from 'react';
import { FlashList } from '@shopify/flash-list';
import { YStack, XStack, Input } from 'tamagui';

import { useChat } from '@/chat-provider';

import { ChatMessage } from './ChatMessage';
import { ChatMessageTitle } from './ChatMessageTitle';

// Main chat screen
export const ChatScreen: React.FC<{ onLocatorMap: (locator: string, callsign: string) => void }> = ({ onLocatorMap }) => {
  const [inputText, setInputText] = React.useState('');
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
          renderItem={({ item }) => (
            <YStack padding="$3" gap="$1">
              <ChatMessageTitle item={item} onLocatorMap={onLocatorMap}/>
              <ChatMessage item={item} />
            </YStack>)}
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
