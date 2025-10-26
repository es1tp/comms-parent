import React from 'react';
import { YStack, Text, Input, Button, Spinner, Heading, Select, Adapt, Sheet } from 'tamagui';
import { LinearGradient } from 'tamagui/linear-gradient';
import { ChevronDown, Check, ChevronUp } from '@tamagui/lucide-icons';
import { useAuth } from '@/api-auth';
import { ChatApi } from '@/api-chat';
import { useProfile } from '@/api-profile';



export const LoginScreen: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const { login, connectionState } = useAuth();
  const { profile, save } = useProfile()
  const [error, setError] = React.useState('');

  const handleLogin = async () => {
    try {
      console.log('triggering login')
      setError('');
      console.log('starting login', profile);
      await login(profile);
      onLogin();
    } catch (err) {
      console.log(err);
      setError(err instanceof Error ? err.message : 'Login failed');
    }
  }

  const handleOffsetChange = (text: string) => {
    const num = parseFloat(text);
    const calibrationOffset = isNaN(num) ? 0 : num;
    save({ rotator: { calibrationOffset } })
  }

  const isConnecting = connectionState.status === 'connecting';

  const isLoginDisabled = !profile.callsign || !profile.password || !profile.locator;
  console.log({ isLoginDisabled });

  return (
    <Sheet modal open={true} snapPoints={[85]}>
      <Sheet.ScrollView
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled">

        <YStack flex={1} justifyContent="center" padding="$4">
          <Heading>Login</Heading>
          <Input
            placeholder="Callsign"
            value={profile.callsign}
            onChangeText={(callsign) => save({ callsign })}
            autoCapitalize="none"
            disabled={isConnecting}
            marginBottom="$3"
            marginTop="$3"
            size="$4"
          />
          <Input
            placeholder="Password"
            value={profile.password}
            onChangeText={(password) => save({ password })}
            secureTextEntry
            disabled={isConnecting}
            marginBottom="$10"
            size="$4"
          />

          <Select
            native
            value={profile.chatId}
            onValueChange={(chatId) => save({ chatId })}
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
            value={profile.locator}
            onChangeText={(locator) => save({ locator })}
            autoCapitalize="none"
            disabled={isConnecting}
            marginBottom="$3"
            marginTop="$3"
            size="$4"
          />
          <Input
            placeholder="Rotator offset in degrees"
            value={profile.rotator.calibrationOffset.toString()}
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
              disabled={isLoginDisabled}
              borderColor='$borderColor'
              size="$4">
              Login
            </Button>
          )}
        </YStack>
      </Sheet.ScrollView>
    </Sheet>
  );
};