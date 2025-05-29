import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import usePhotos from "@/hooks/usePhotos";

export default function TabLayout() {
  const { photosCount } = usePhotos();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffd33d",
        headerStyle: {
          backgroundColor: "#25292e",
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#25292e",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="photos"
        options={{
          title: "Photos",
          tabBarBadge: photosCount > 0 ? photosCount : undefined,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "images" : "image-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
