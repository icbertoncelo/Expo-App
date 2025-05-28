import { OSNotification } from "react-native-onesignal";

interface AdditionalDataProps {
  additionalData?: {
    photoId?: string;
  };
}

export type NotificationData = OSNotification & AdditionalDataProps;

export type ActionId = "see-all" | "see-by-id" | undefined;
