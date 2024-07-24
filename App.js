//import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//import des screen
import { Home } from "./pages/home";
import { Terminologie } from "./pages/terminologie";
import { Simulator } from "./pages/simulator";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Terminologie" component={Terminologie} />
        <Stack.Screen name="Simulator" component={Simulator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
/*export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
