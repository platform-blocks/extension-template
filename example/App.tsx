import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  Button,
  Card,
  Column,
  PlatformBlocksProvider,
  Text,
  Title,
} from '@platform-blocks/ui';
import { Marquee } from 'platform-blocks-extension-template';

export default function App() {
  const [paused, setPaused] = React.useState(false);

  return (
    <SafeAreaProvider>
      <PlatformBlocksProvider>
        <StatusBar style="auto" />
        <Column style={{ flex: 1 }} justify="center" align="center" p="lg" gap="lg">
          <Card variant="elevated" p="lg" style={{ maxWidth: 520, width: '100%' }}>
            <Column gap="md">
              <Title order={2}>Extension example</Title>
              <Text colorVariant="secondary">
                The Marquee below comes from the package/ workspace — edit
                package/src and the change hot-reloads here.
              </Text>
              <Marquee speed={60} paused={paused}>
                <Text weight="medium">
                  Build your Platform Blocks extension from this template 🧱 It themes, tests,
                  builds, and publishes out of the box.
                </Text>
              </Marquee>
              <Button
                title={paused ? 'Resume' : 'Pause'}
                variant="light"
                onPress={() => setPaused(current => !current)}
              />
            </Column>
          </Card>
        </Column>
      </PlatformBlocksProvider>
    </SafeAreaProvider>
  );
}
