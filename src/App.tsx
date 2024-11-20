import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";


export default function App() {
  return (
    <SafeAreaView style={styles.container} > 
    <StatusBar style="auto" />
    <Header></Header>
      <Text>Welcome to Temp Today!</Text> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});
