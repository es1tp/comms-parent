import { ChatScreen } from '@/screens';
import { router } from 'expo-router';

export default function chat() {

  function handleLocatorMap(locator: string, callsign: string) {
    router.push({
      pathname: '/(secured)/locator-map',
      params: { locator, callsign }
    });
  }

  return (
    <ChatScreen onLocatorMap={handleLocatorMap}/>
  );
}