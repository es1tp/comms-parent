import { View, Text, Button } from 'react-native';
import { useAuth } from '@/api-auth';
import { router } from 'expo-router';

export default function SecuredScreen() {
  const {} = useAuth();
  const { connectionState, logout } = useAuth();

  async function handleLogout() {
    await logout();
    router.replace('/(auth)/login')
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Secured Page</Text>
      
      <Text style={{ marginBottom: 20 }}>
        Status: {connectionState.status}
      </Text>

      {connectionState.status === 'connected' && (
        <Text style={{ marginBottom: 20 }}>
          Session: {connectionState.sessionKey}
        </Text>
      )}

      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}