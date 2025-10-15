import { useAuth } from '@/api-auth';
import { ChatScreen } from '@/screens';
import { router } from 'expo-router';

export default function chat() {
  const { connectionState, logout } = useAuth();

  function handleLocatorMap(locator: string, callsign: string) {
    router.push({
      pathname: '/(secured)/locator-map',
      params: { locator, callsign }
    });
  }

  async function handleLogout() {
    await logout();
    router.replace('/(auth)/login')
  }

  return (
    <ChatScreen onLocatorMap={handleLocatorMap} onLogout={handleLogout}/>
  );
}