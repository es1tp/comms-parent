
import React from 'react';
import { TamaguiProvider } from 'tamagui';
import { Stack } from 'expo-router';

import { AuthProvider } from '@/api-auth';

import tamaguiConfig from '../tamagui.config'


export default function RootLayout() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <AuthProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(auth)/login" />
          <Stack.Screen name="(secured)/index" />
        </Stack>
      </AuthProvider>
    </TamaguiProvider>
  );
}