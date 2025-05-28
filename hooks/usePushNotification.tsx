import { ActionId, NotificationData } from "@/dtos/notification";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  LogLevel,
  NotificationClickEvent,
  NotificationWillDisplayEvent,
  OneSignal,
} from "react-native-onesignal";

export function usePushNotification() {
  const router = useRouter();

  const [notification, setNotification] = useState<NotificationData | null>(
    null
  );

  useEffect(() => {
    OneSignal.Debug.setLogLevel(LogLevel.Verbose);
    OneSignal.initialize(process.env.EXPO_PUBLIC_ONE_SIGNAL_APP_ID ?? "");
    OneSignal.Notifications.requestPermission(true);
    console.log("..... INITIALIZING ONESIGNAL .....");

    const handleNotification = (event: NotificationWillDisplayEvent) => {
      event.preventDefault();
      const notificationResponse = event.getNotification() as NotificationData;
      setNotification(notificationResponse);
    };

    const handleNotificationClick = (event: NotificationClickEvent) => {
      const actionId = event.result.actionId as ActionId;
      const { additionalData } = event.notification as NotificationData;

      const routeMap: Record<string, () => void> = {
        "see-by-id": () => {
          if (additionalData?.photoId) {
            router.navigate({
              pathname: "/photos/[id]",
              params: { id: additionalData.photoId },
            });
          }
        },
        "see-all": () => router.navigate({ pathname: "/photos" })
      };

      actionId && routeMap[actionId]();
    };

    OneSignal.Notifications.addEventListener(
      "foregroundWillDisplay",
      handleNotification
    );

    OneSignal.Notifications.addEventListener("click", handleNotificationClick);

    return () => {
      OneSignal.Notifications.removeEventListener(
        "foregroundWillDisplay",
        handleNotification
      );
      OneSignal.Notifications.removeEventListener(
        "click",
        handleNotificationClick
      );
    };
  }, []);

  return { notification, setNotification };
}
