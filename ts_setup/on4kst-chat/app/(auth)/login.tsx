import { LoginScreen } from '@/screens';
import { useRouter } from 'expo-router';


export default function LoginRoute() {
  const router = useRouter();
  return (<LoginScreen onLogin={() => router.replace('/(secured)/chat')}/>)
}