import { PHOTOS_COUNT_TAG } from "@/constants/userTags";
import { OneSignal } from "react-native-onesignal";

/**
 * Function to add a new User Tag on One Signal
 * 
 * A Segment can be created on One Signal to monitor this tag
 * @param count - The number of photo items to associate with the "photos_items_count" tag.
 */
export function tagPhotoUpdate(count: number) {
  OneSignal.User.addTag(PHOTOS_COUNT_TAG, String(count));
}
