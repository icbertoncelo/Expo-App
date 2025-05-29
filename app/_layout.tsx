import { Notification } from "@/components/Notification";
import PhotosListProvider from "@/contexts/PhotosListContext";
import { usePushNotification } from "@/hooks/usePushNotification";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

// DEEP LINKING StickerSmash://photos/{photoId}

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
      <PhotosListProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </PhotosListProvider>
      <StatusBar style="light" />
    </>
  );
}
