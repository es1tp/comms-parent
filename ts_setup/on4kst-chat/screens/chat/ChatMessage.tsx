import React from 'react';
import { Text, Card } from 'tamagui';
import { UserMessage } from '@/chat-provider';


export const ChatMessage = ({ item }: { item: UserMessage }) => {
  return (
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
      <Text color="$color">{item.message}</Text>
    </Card>)
}