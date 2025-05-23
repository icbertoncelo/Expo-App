import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { LogLevel, OneSignal } from "react-native-onesignal";

export default function RootLayout() {
  useEffect(() => {
    OneSignal.Debug.setLogLevel(LogLevel.Verbose);
    OneSignal.initialize(process.env.EXPO_PUBLIC_ONE_SIGNAL_APP_ID ?? "");
    OneSignal.Notifications.requestPermission(true);
  }, []);

  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}
