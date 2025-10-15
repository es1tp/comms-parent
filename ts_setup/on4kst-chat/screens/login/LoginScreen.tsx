import React from 'react';
import { YStack, Text, Input, Button, Spinner, Heading, Select, Adapt, Sheet, } from 'tamagui';
import { LinearGradient } from 'tamagui/linear-gradient';
import { ChevronDown, Check, ChevronUp } from '@tamagui/lucide-icons';
import { useAuth } from '@/api-auth';
import { ChatApi } from '@/api-chat';
import { useSecureStorage } from '@/api-secure-storage';


export const LoginScreen: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const { login, connectionState } = useAuth();
  const { getToken } = useSecureStorage()
  const [callsign, setCallsign] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [locator, setLocator] = React.useState<string>('');
  const [offset, setOffset] = React.useState<number>(0);
  const [error, setError] = React.useState('');
  const [selectedChat, setSelectedChat] = React.useState<ChatApi.ChatId>('2');


  React.useEffect(() => {
    getToken().then(({ callsign, password, me, raw, chatId }) => {
      if (callsign && password) {
        setCallsign(callsign);
        setPassword(password);
        setLocator(me.locator ?? '')
        setOffset(me.calibrationOffset ?? 0)
        setSelectedChat(chatId ? chatId as any : '2');
      }
    });
  }, []);

  const handleLogin = async () => {
    try {
      setError('');
      await login(callsign, password, selectedChat, locator?.toUpperCase(), offset);
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

      <Select
        native
        value={selectedChat}
        onValueChange={(val) => setSelectedChat(val as ChatApi.ChatId)}
      >
        <Select.Trigger width="100%" iconAfter={ChevronDown}>
          <Select.Value placeholder="Select chat" />
        </Select.Trigger>

        <Adapt when="maxMd" platform="touch">
          <Sheet native modal dismissOnSnapToBottom>
            <Sheet.Frame>
              <Sheet.ScrollView>
                <Adapt.Contents />
              </Sheet.ScrollView>
            </Sheet.Frame>
            <Sheet.Overlay
              backgroundColor="$shadowColor"

              enterStyle={{ opacity: 0 }}
              exitStyle={{ opacity: 0 }}
            />
          </Sheet>
        </Adapt>

        <Select.Content zIndex={200000}>
          <Select.ScrollUpButton
            alignItems="center"
            justifyContent="center"
            position="relative"
            width="100%"
            height="$3"
          >
            <YStack zIndex={10}>
              <ChevronUp size={20} />
            </YStack>
            <LinearGradient
              start={[0, 0]}
              end={[0, 1]}
              fullscreen
              colors={['$background', 'transparent']}
              borderRadius="$4"
            />
          </Select.ScrollUpButton>

          <Select.Viewport minWidth={200}>
            <Select.Group>
              {ChatApi.CHAT_OPTIONS.map((option, i) => (
                <Select.Item key={option.id} index={i} value={option.id}>
                  <Select.ItemText>{option.label}</Select.ItemText>
                  <Select.ItemIndicator marginLeft="auto">
                    <Check size={16} />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Viewport>

          <Select.ScrollDownButton
            alignItems="center"
            justifyContent="center"
            position="relative"
            width="100%"
            height="$3"
          >
            <YStack zIndex={10}>
              <ChevronDown size={20} />
            </YStack>
            <LinearGradient
              start={[0, 0]}
              end={[0, 1]}
              fullscreen
              colors={['transparent', '$background']}
              borderRadius="$4"
            />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select>

      <Input
        placeholder="Current locator"
        value={locator}
        onChangeText={setLocator}
        autoCapitalize="none"
        disabled={isConnecting}
        marginBottom="$3"
        marginTop="$3"
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