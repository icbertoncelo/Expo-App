import { OSNotification } from "react-native-onesignal";

interface AdditionalDataProps {
  additionalData?: {
    route?: string;
    productId?: string;
  };
}

export type NotificationData = OSNotification & AdditionalDataProps;

export type ActionId = "see-all" | "see-by-id" | undefined;
