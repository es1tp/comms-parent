import React from 'react';

import { XStack, Input, ScrollView } from 'tamagui';


import { useChat } from '@/chat-provider';
import { useProfile } from '@/api-profile';



export const ChatInput: React.FC<{}> = ({ }) => {

  const { profile } = useProfile();
  const scrollRef = React.useRef(null);
  const [inputText, setInputText] = React.useState('');
  const chat = useChat();

  const handleSend = async () => {
    await chat.client.sendMessage(profile.chatId as any, '0', inputText);
    setInputText('');
  }

  return (
    
    <XStack      
      borderTopWidth={1}
      padding='$3'
      gap='$2'
      backgroundColor='$background'
      borderTopColor='$borderColor'>
 
      <Input
        flex={1}
        borderWidth={1}
        placeholder='Type message...'
        value={inputText}
        onChangeText={setInputText}
        onSubmitEditing={handleSend}
      />
      
    </XStack>

  );
}
