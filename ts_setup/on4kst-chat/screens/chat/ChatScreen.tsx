import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { YStack, XStack, Input, Text, Button } from 'tamagui';

import { useChat } from '@/chat-provider';

import { ChatMessage } from './ChatMessage';
import { ChatMessageTitle } from './ChatMessageTitle';
import { ChatApi } from '@/api-chat';
import { useSecureStorageToken } from '@/api-secure-storage';

// Main chat screen
export const ChatScreen: React.FC<{
  onLocatorMap: (locator: string, callsign: string) => void;
  onLogout: () => void;
}> = ({ onLocatorMap, onLogout }) => {
  const { token } = useSecureStorageToken();
  const [inputText, setInputText] = React.useState('');
  const chat = useChat();
  const chatName = token?.chatId ? ChatApi.CHAT_OPTIONS.find(e => e.id === token.chatId)?.label : undefined;

  const handleSend = async () => {
    await chat.client.sendMessage(token?.chatId as any, '0', inputText);
    setInputText('');
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
      <YStack flex={1} backgroundColor="$background" marginTop='$5' marginBottom='$7'>

        {/* Header row */}
        <XStack
          paddingHorizontal="$3"
          paddingVertical="$2"
          justifyContent="space-between"
          alignItems="center"
          borderBottomWidth={1}
          borderBottomColor="$borderColor"
        >
          <Text fontSize="$6" fontWeight="bold">{chatName ?? 'Chat'}</Text>
          <Button size="$3" onPress={onLogout}>Logout</Button>
        </XStack>
        <YStack flex={1}>
          <FlashList
            initialScrollIndex={Math.max(0, chat.store.messages.length - 1)}
            data={chat.store.messages}
            renderItem={({ item }) => (
              <YStack padding="$3" gap="$1">
                <ChatMessageTitle item={item} onLocatorMap={onLocatorMap} />
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
    </KeyboardAvoidingView>
  );
}
