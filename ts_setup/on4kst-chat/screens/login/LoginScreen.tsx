import React from 'react';
import { YStack, Text, Input, Button, Spinner, Heading } from 'tamagui';
import { useAuth,  } from '@/api-auth';
import { useSecureStorage } from '@/api-secure-storage';


export const LoginScreen: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const { login, connectionState } = useAuth();
  const { getToken } = useSecureStorage()
  const [callsign, setCallsign] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [locator, setLocator] = React.useState<string>('');
  const [offset, setOffset] = React.useState<number>(0);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    getToken().then(({ callsign, password, me }) => {
      if (callsign && password) {
        setCallsign(callsign);
        setPassword(password);
        setLocator(me.locator ?? '')
        setOffset(me.calibrationOffset ?? 0)
      }
    });
  }, []);

  const handleLogin = async () => {
    try {
      setError('');
      await login(callsign, password, locator?.toUpperCase(), offset);
      onLogin();
    } catch (err) {
      console.log(err);
      setError(err instanceof Error ? err.message : 'Login failed');
    }
  }

  const handleOffsetChange = (text: string) => {
    const num = parseFloat(text);
    setOffset(isNaN(num) ? 0 : num);
  }

  const isConnecting = connectionState.status === 'connecting';

  return (
    <YStack flex={1} justifyContent="center" padding="$4">
      <Heading>Login</Heading>
      <Input
        placeholder="Callsign"
        value={callsign}
        onChangeText={setCallsign}
        autoCapitalize="none"
        disabled={isConnecting}
        marginBottom="$3"
        marginTop="$3"
        size="$4"
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        disabled={isConnecting}
        marginBottom="$10"
        size="$4"
      />
      <Input
        placeholder="Current locator"
        value={locator}
        onChangeText={setLocator}
        autoCapitalize="none"
        disabled={isConnecting}
        marginBottom="$3"
        size="$4"
      />
      <Input
        placeholder="Rotator offset in degrees"
        value={offset.toString()}
        onChangeText={handleOffsetChange}
        disabled={isConnecting}
        keyboardType="numeric"
        marginBottom="$10"
        size="$4"
      />

      {error ? (<Text color="$red10" marginBottom="$3">{error}</Text>) : null}

      {isConnecting ? (
        <Spinner size="large" color="$color" />
      ) : (
        <Button
          onPress={handleLogin}
          disabled={!callsign || !password}
          borderColor='$borderColor'
          size="$4">
          Login
        </Button>
      )}
    </YStack>
  );
};