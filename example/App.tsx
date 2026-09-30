import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  Button,
  Card,
  Column,
  PlocksProvider,
  Text,
  Title,
} from '@plocks/ui';
import { Marquee } from 'plocks-extension-template';

export default function App() {
  const [paused, setPaused] = React.useState(false);

  return (
    <SafeAreaProvider>
      <PlocksProvider>
        <StatusBar style="auto" />
        <Column style={{ flex: 1 }} justify="center" ta="center" p="lg" gap="lg">
          <Card variant="elevated" p="lg" style={{ maxWidth: 520, width: '100%' }}>
            <Column gap="md">
              <Title order={2}>Extension example</Title>
              <Text c="secondary">
                The Marquee below comes from the package/ workspace — edit
                package/src and the change hot-reloads here.
              </Text>
              <Marquee speed={60} paused={paused}>
                <Text fw="medium">
                  Build your plocks extension from this template 🧱 It themes, tests,
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
      </PlocksProvider>
    </SafeAreaProvider>
  );
}
