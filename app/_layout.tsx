import { Notification } from "@/components/Notification";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  LogLevel,
  NotificationWillDisplayEvent,
  OneSignal,
  OSNotification,
} from "react-native-onesignal";

export default function RootLayout() {
  const [notification, setNotification] = useState<OSNotification | null>(null);

  useEffect(() => {
    OneSignal.Debug.setLogLevel(LogLevel.Verbose);
    OneSignal.initialize(process.env.EXPO_PUBLIC_ONE_SIGNAL_APP_ID ?? "");
    OneSignal.Notifications.requestPermission(true);
    console.log("..... INITIALIZING ONESIGNAL .....");

    const handleNotification = (event: NotificationWillDisplayEvent) => {
      event.preventDefault();
      const notificationResponse = event.getNotification();
      setNotification(notificationResponse);
    };

    OneSignal.Notifications.addEventListener(
      "foregroundWillDisplay",
      handleNotification
    );

    return () =>
      OneSignal.Notifications.removeEventListener(
        "foregroundWillDisplay",
        handleNotification
      );
  }, []);

  return (
    <>
      {notification && (
        <Notification
          data={notification}
          onClose={() => setNotification(null)}
        />
      )}
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}
