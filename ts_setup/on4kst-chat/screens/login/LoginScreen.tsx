import React from 'react';
import { YStack, Text, Input, Button, Spinner } from 'tamagui';
import { useAuth, useAuthStorage } from '@/api-auth';

export const LoginScreen: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const { login, connectionState } = useAuth();
  const auth = useAuthStorage();
  const [callsign, setCallsign] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    Promise.all([auth.getCallsign(), auth.getPassword()])
      .then(([callsign, password]) => {
        if (callsign && password) {
          setCallsign(callsign);
          setPassword(password);
        }
      });
  }, []);

  const handleLogin = async () => {
    try {
      setError('');
      await login(callsign, password);
      onLogin();
    } catch (err) {
      console.log(err);
      setError(err instanceof Error ? err.message : 'Login failed');
    }
  };

  const isConnecting = connectionState.status === 'connecting';

  return (
    <YStack flex={1} justifyContent="center" padding="$4">
      <Text fontSize="$8" marginBottom="$4">
        Login
      </Text>

      <Input
        placeholder="Callsign"
        value={callsign}
        onChangeText={setCallsign}
        autoCapitalize="none"
        disabled={isConnecting}
        marginBottom="$3"
        size="$4"
      />

      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        disabled={isConnecting}
        marginBottom="$4"
        size="$4"
      />

      {error ? (
        <Text color="$red10" marginBottom="$3">
          {error}
        </Text>
      ) : null}

      {isConnecting ? (
        <Spinner size="large" color="$color" />
      ) : (
        <Button
          onPress={handleLogin}
          disabled={!callsign || !password}
          size="$4"
        >
          Login
        </Button>
      )}
    </YStack>
  );
};