import { StyleSheet, Text, View } from "react-native";

export const Header = () => {
    return (
    <View style={styles.container}>
    <Text style={styles.title}>Temp Today!</Text>
  </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#007aff",
        padding: 15,
        alignItems: "center",
        width: "100%",
    },
    title: {
        color: "#fff",
        fontSize: 25,
        fontWeight: "bold",
      },
  });
  export default Header; 