import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import WeatherDisplay from "../components/WeatherDisplay";
import AdditionalInfo from "../components/AdditionalInfo";
import StyledButton from "../components/StyledButton";

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <WeatherDisplay temperature={25} condition="Sunny" />
      <AdditionalInfo windSpeed={10} humidity={80} />
      <StyledButton onPress={() => console.log("Button Pressed")}>
        {" "}
        Refresh{" "}
      </StyledButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignSelf: "stretch",
    paddingHorizontal: 10,
  },
});

export default MainScreen;
