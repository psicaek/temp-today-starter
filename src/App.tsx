import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import { WeatherDisplay } from "./components/WeatherDisplay";
import AdditionalInfo from "./components/AdditionalInfo";
import Button from "./components/StyledButton";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Header></Header>
      <Text>Welcome to Temp Today!</Text>
      <WeatherDisplay temperature={25} condition="Sunny" />
      <AdditionalInfo windSpeed={10} humidity={80} />
      <Button onPress={() => console.log("Button Pressed")}> Refresh </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
});

export default App;
