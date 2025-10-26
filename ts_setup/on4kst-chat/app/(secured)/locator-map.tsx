import { View } from 'react-native';
import { useProfile } from '@/api-profile';
import { useLocalSearchParams } from 'expo-router';
import { LocatorsMapScreen } from '@/screens';


export default function LocatorsMap() {
  const { profile } = useProfile();

  const params = useLocalSearchParams();
  const { locator: to } = params;

  const from = profile.locator; // Your locator from config

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <LocatorsMapScreen from={from} to={to as string}/>
    </View>
  );
}
