import Button from "@/components/Button";
import usePhotos from "@/hooks/usePhotos";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";

export default function PhotosScreen() {
  const { photos, onAddPhoto, onRemovePhoto } = usePhotos();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Photos List</Text>
      <Button theme="primary" label="Add a random photo" onPress={onAddPhoto} />

      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.list}
        data={photos}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item}</Text>
            <Pressable onPress={() => onRemovePhoto(item)}>
              <FontAwesome name="trash" size={18} color="#F03D30" />
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 24,
  },
  list: {
    flex: 1,
    padding: 24,
    marginTop: 24,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  itemText: {
    color: "#fff",
    fontSize: 18,
    marginRight: 24,
    marginBottom: 12,
  },
});
