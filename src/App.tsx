import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import { WeatherDisplay } from "./components/WeatherDisplay";

const App = () => {
  return (
    <SafeAreaView style={styles.container} > 
    <StatusBar style="auto" />
    <Header></Header>
      <Text>Welcome to Temp Today!</Text> 
      <WeatherDisplay temperature={25} condition="Sunny"></WeatherDisplay>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
});

export default App;
