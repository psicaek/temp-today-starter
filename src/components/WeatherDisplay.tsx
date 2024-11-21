import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

type WeatherDisplayProps = {
  temperature: number;
  condition: string;
};

export const WeatherDisplay: React.FC<WeatherDisplayProps> = ({
  temperature,
  condition,
}) => {
  return (
    <Container>
      <Temperature>{temperature}°C</Temperature>
      <Condition> {condition} </Condition>
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
  margin-top: 40;
`;

const Temperature = styled.Text`
  font-size: 48;
  color: #333;
  font-weight: bold;
`;

const Condition = styled.Text`
  font-size: 24;
  color: #666;
  margin-top: 10;
`;

//const styles = StyleSheet.create({
//  container: {
//    alignItems:"center",
//  marginTop: 50,
//},
//temperature: {
//   fontSize: 48,
//  color: "#333",
//  fontWeight: "bold"
// },
//condition: {
//   color: "#666",
//  fontSize: 24,
// marginTop: 10,

// },
//});
export default WeatherDisplay;
