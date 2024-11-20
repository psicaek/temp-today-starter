import { StyleSheet, Text, View } from "react-native";

type WeatherDisplayProps = {
    temperature: number;
    condition: string;
}

export const WeatherDisplay: React.FC<WeatherDisplayProps> = ({temperature, condition})  =>{
return (
    <View style={styles.container}>
    <Text style={styles.temperature}>{temperature}°C</Text>
    <Text style={styles.condition}> {condition} </Text>
    </View>
)
}

const styles = StyleSheet.create({
    container: {
        alignItems:"center",
        marginTop: 50,
    },
    temperature: {  
        fontSize: 48,
        color: "#333",
        fontWeight: "bold"
    },
    condition: {
        color: "#666",
        fontSize: 24,
        marginTop: 10,
        
      },
  });
  export default WeatherDisplay; 