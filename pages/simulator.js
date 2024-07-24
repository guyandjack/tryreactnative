import {
  Button,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TextInput,
} from "react-native";

function Simulator({ navigation }) {
  const goToTerminologie = () => {
    navigation.navigate("Terminologie");
  };
  const goToHome = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titleh1}>
        Simulateur de {"\n"}
        revenus locatifs
      </Text>
      <Text style={styles.textintro}>
        Veuillez remplir chaque champs avec une valeur valide. Si un champs ne
        vous concerne pas veuillez entrer la valeur "0"
      </Text>
      <View style={styles.inputContainer}>
        <Text></Text>
        <TextInput />
      </View>
      <Button title="Vers Home" onPress={goToHome} />
      <Button title="Vers Terminologie" onPress={goToTerminologie} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  titleh1: {
    alignSelf: "center",
    color: "#990056",
    marginVertical: 30,
    fontSize: 30,
    textAlign: "center",
  },
  buttonstd: {
    paddingVertical: 50,
  },
  textintro: {
    fontSize: 20,
    fontWeight: "600",
    color: "#aaaaaa",
    paddingHorizontal: 20,
  },
  inputContainer: {
    borderWidth: 2,
    borderColor: "#AAFFAA",
    padding: 10,
  },
});

export { Simulator };
