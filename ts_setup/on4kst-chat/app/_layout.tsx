
import React from 'react';
import { TamaguiProvider } from 'tamagui';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'

import { Stack } from 'expo-router';

import { AuthProvider } from '@/api-auth';
import { ClientProvider } from '@/api-chat';

import tamaguiConfig from '../tamagui.config'

const defaultTheme = 'dark';

export default function RootLayout() {
  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme={defaultTheme}>
      <ThemeProvider value={defaultTheme === 'dark' ? DarkTheme : DefaultTheme}>
        <ClientProvider>
          <AuthProvider>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="(auth)/login" />
              <Stack.Screen name="(secured)/index" />
            </Stack>
          </AuthProvider>
        </ClientProvider>
      </ThemeProvider>
    </TamaguiProvider>
  );
}