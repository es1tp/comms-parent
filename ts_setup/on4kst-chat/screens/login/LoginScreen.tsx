import React from 'react';
import { View, Text, TextInput, Button, ActivityIndicator } from 'react-native';
import { useAuth, useAuthStorage } from '@/api-auth';

export const LoginScreen: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const { login, connectionState, } = useAuth();
  const auth = useAuthStorage();

  const [callsign, setCallsign] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [error, setError] = React.useState('');

  React.useEffect(() => {

    Promise.all([auth.getCallsign(), auth.getPassword()])
    .then(([callsign, password]) => {
      if(callsign && password) {
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
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Login</Text>

      <TextInput
        placeholder="Callsign"
        value={callsign}
        onChangeText={setCallsign}
        autoCapitalize="none"
        editable={!isConnecting}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        editable={!isConnecting}
        style={{ borderWidth: 1, padding: 10, marginBottom: 20 }}
      />

      {error ? <Text style={{ color: 'red', marginBottom: 10 }}>{error}</Text> : null}

      {isConnecting ? (
        <ActivityIndicator size="large" />
      ) : (
        <Button title="Login" onPress={handleLogin} disabled={!callsign || !password} />
      )}
    </View>
  );
}