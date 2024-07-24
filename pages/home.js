import {
  Button,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";

function Home({ navigation }) {
  const goToTerminologie = () => {
    navigation.navigate("Terminologie");
  };
  const goToSimulateur = () => {
    navigation.navigate("Simulator");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titleh1}>
        Simulez vos {"\n"}
        revenus locatifs
      </Text>
      <Text style={styles.textintro}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit minus,
        error eos laboriosam odit aut. Fugit magnam explicabo nisi.
        Reprehenderit sunt at, totam, ea tempore ducimus veritatis magni modi
        quia atque delectus aliquid maiores laboriosam enim ex incidunt, iusto
        ratione expedita labore est porro iure perferendis eligendi libero? Eos,
        quo!
      </Text>
      <Button title="Vers Terminologie" onPress={goToTerminologie} />
      <Button title="Vers Simulateur" onPress={goToSimulateur} />
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
});

export { Home };
