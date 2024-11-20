import { StyleSheet, Text, View } from "react-native";

export const Header = () => {
  return (
    <View className="bg-blue-600 p-4 items-center w-10/12">
      <Text style={styles.title}>Temp Today!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#007aff",
    padding: 15,
    alignItems: "center",
    width: "90%",
  },
  title: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
});
export default Header;
