import React from 'react';
import { YStack, Text, Input, Button, Heading, Select, Adapt, Sheet, XStack } from 'tamagui';

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
      setError('');
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

  const handlePortChange = (text: string) => {
    const num = parseFloat(text);
    const port = isNaN(num) ? 0 : num;
    save({ rotator: { config: { port } } })
  }

  const isConnecting = connectionState.status === 'connecting';

  const isLoginDisabled = !profile.callsign || !profile.password || !profile.locator;
  console.log(profile)

  return (
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
        marginBottom="$5"
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
        marginTop="$3"
        size="$4"
      />

      <XStack gap="$2" marginBottom="$10" marginTop="$3">
        <Input
          flex={3}
          placeholder="192.168.1.1"
          keyboardType="numeric"
          onChangeText={(ip) => save({ rotator: { config: { ip } } })}
          value={profile.rotator.config?.ip ? profile.rotator.config.ip.toString() : undefined}
        />
        <Input
          flex={1}
          placeholder="8080"
          keyboardType="number-pad"
          onChangeText={handlePortChange}
          value={profile.rotator.config?.port ? profile.rotator.config.port.toString() : undefined}
        />
      </XStack>

      {error ? (<Text color="$red10" marginBottom="$3">{error}</Text>) : null}

      <Button
        onPress={handleLogin}
        disabled={isLoginDisabled}
        borderColor='$borderColor'
        size="$4">
        Log in
      </Button>
    </YStack>
  );
}