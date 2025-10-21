import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { YStack, XStack, Input, Text, Button, Sheet } from 'tamagui';
import { Filter } from '@tamagui/lucide-icons';

import { useChat } from '@/chat-provider';
import { ChatApi } from '@/api-chat';
import { useSecureStorageToken } from '@/api-secure-storage';


import { ChatMessage } from './ChatMessage';
import { ChatMessageTitle } from './ChatMessageTitle';



// Main chat screen
export const ChatScreen: React.FC<{
  onLocatorMap: (locator: string, callsign: string) => void;
  onLogout: () => void;
}> = ({ onLocatorMap, onLogout }) => {
  const { token } = useSecureStorageToken();
  const [inputText, setInputText] = React.useState('');
  const [filterOpen, setFilterOpen] = React.useState(false);
  const [distanceFilter, setDistanceFilter] = React.useState<string>('');
  const [appliedFilter, setAppliedFilter] = React.useState<number | null>(null);

  const chat = useChat();
  const chatName = token?.chatId ? ChatApi.CHAT_OPTIONS.find(e => e.id === token.chatId)?.label : undefined;

  const handleSend = async () => {
    await chat.client.sendMessage(token?.chatId as any, '0', inputText);
    setInputText('');
  }

  const handleApplyFilter = () => {
    const distance = parseFloat(distanceFilter);
    setAppliedFilter(isNaN(distance) ? null : distance);
    setFilterOpen(false);
  }

  const handleClearFilter = () => {
    setDistanceFilter('');
    setAppliedFilter(null);
    setFilterOpen(false);
  }

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
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
      {/* Filter Sheet */}
      <Sheet
        modal
        open={filterOpen}
        onOpenChange={setFilterOpen}
        snapPoints={[40]}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay />
        <Sheet.Frame padding="$4">
          <Sheet.Handle />
          <YStack gap="$4" paddingTop="$4">
            <Text fontSize="$5" fontWeight="bold">Filter by Distance</Text>
            <Input
              placeholder="Enter distance in km (e.g., 100)"
              value={distanceFilter}
              onChangeText={setDistanceFilter}
              keyboardType="numeric"
              size="$4"
            />
            <XStack gap="$3">
              <Button flex={1} onPress={handleApplyFilter} disabled={!distanceFilter}>
                Apply
              </Button>
              <Button flex={1} onPress={handleClearFilter} variant="outlined">
                Clear
              </Button>
            </XStack>
          </YStack>
        </Sheet.Frame>
      </Sheet>
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

           <Button 
            size="$3" 
            icon={Filter} 
            onPress={() => setFilterOpen(true)}
            variant={appliedFilter ? "outlined" : undefined}
          >
            {appliedFilter ? `${appliedFilter} km` : 'Filter'}
          </Button>

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
