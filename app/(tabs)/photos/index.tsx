import { View, Text, StyleSheet } from "react-native";

export default function PhotosScreen() {
  return (
    <View style={styles.container}>
      <Text>Photos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});
