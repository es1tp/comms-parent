import React from 'react';
import { useAuth } from '@/api-auth';
import { Redirect } from 'expo-router';


export default function Index() {
  const { connectionState } = useAuth();

  if (connectionState.status === 'disconnected') {
    return <Redirect href="/(auth)/login" />;
  }
  return <Redirect href="/(secured)" />;
}