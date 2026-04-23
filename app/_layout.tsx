import { colors } from '@/constants/theme';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {

  return (
    <>
      <StatusBar style='auto' />
      <Stack screenOptions={{
        contentStyle: {
          backgroundColor: colors.natural
        }
      }}>
        <Stack.Screen name="index" options={{ title: 'Todos', }} />
      </Stack>
    </>
  );
}
