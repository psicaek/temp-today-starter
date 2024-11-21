import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import MainScreen from "./screen/MainScreen";
import Header from "./components/Header";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header></Header>
      <MainScreen></MainScreen>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
});

export default App;
