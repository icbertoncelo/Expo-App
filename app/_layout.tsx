import { Notification } from "@/components/Notification";
import { usePushNotification } from "@/hooks/usePushNotification";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  const { notification, setNotification } = usePushNotification();

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
