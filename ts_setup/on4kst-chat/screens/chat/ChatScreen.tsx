import React from 'react';
import { FlashList } from '@shopify/flash-list';
import { YStack, XStack, Text, Button } from 'tamagui';

import { useChat } from '@/chat-provider';
import { ChatApi } from '@/api-chat';
import { useProfile } from '@/api-profile';


import { ChatMessage } from './ChatMessage';
import { ChatMessageTitle } from './ChatMessageTitle';
import { ChatFilter } from './ChatFilter';
import { ChatInput } from './ChatInput';



// Main chat screen
export const ChatScreen: React.FC<{
  onLocatorMap: (locator: string, callsign: string) => void;
  onLogout: () => void;
}> = ({ onLocatorMap, onLogout }) => {

  const { profile } = useProfile();
  const [appliedFilter, setAppliedFilter] = React.useState<number | null>(null);

  const chat = useChat();
  const chatName = profile.chatId ? ChatApi.CHAT_OPTIONS.find(e => e.id === profile.chatId)?.label : undefined;

  const messages = React.useMemo(() => {
    if (appliedFilter) {
      return chat.store.messages.filter(msg => {
        const distance = chat.store.callbook[msg.callsign]?.locator.distanceInKm;
        return distance !== undefined && distance <= appliedFilter;
      });
    }
    return chat.store.messages
  }, [chat.store.messages, appliedFilter]);


  return (
    <>
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

          <ChatFilter onFilter={setAppliedFilter}/>
          <Button size="$3" onPress={onLogout}>Logout</Button>
        </XStack>

        <YStack flex={1}>
          <FlashList
            initialScrollIndex={Math.max(0, chat.store.messages.length - 1)}
            data={messages}
            renderItem={({ item }) => (
              <YStack padding="$3" gap="$1">
                <ChatMessageTitle item={item} onLocatorMap={onLocatorMap} />
                <ChatMessage item={item} />
              </YStack>)}
            keyExtractor={(_item, index) => index + ''}
          />
        </YStack>

        <ChatInput />
      </YStack>
    </>
  );
}
