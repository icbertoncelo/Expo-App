import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import * as Linking from "expo-linking";
import { NotificationData } from "@/dtos/notification";

interface NotificationProps {
  data: NotificationData;
  onClose: () => void;
}

export function Notification({ data, onClose }: NotificationProps) {
  async function handleOnPress() {
    if (data.launchURL) {
      Linking.openURL(data.launchURL).catch(err => console.error("Failed to open URL:", err));
      onClose();
    }
  }

  return (
    <Pressable style={styles.container} onPress={handleOnPress}>
      <View style={styles.row}>
        <Ionicons
          name="notifications-outline"
          size={20}
          color="black"
          style={styles.icon}
        />
        <Text style={styles.text}>{data.title}</Text>
        <TouchableOpacity onPress={onClose} hitSlop={10}>
          <Ionicons name="close" size={18} color="#4B5563" />
        </TouchableOpacity>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
    paddingTop: 48,
    backgroundColor: "#E5E7EB",
    position: "absolute",
    top: 0,
    zIndex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    marginRight: 8,
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: "black",
  },
});
