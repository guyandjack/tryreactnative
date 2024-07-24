import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  Button,
} from "react-native";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from "accordion-collapse-react-native";

function Terminologie({ navigation }) {
  const goToHome = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <Collapse>
        <CollapseHeader>
          <View>
            <Text>Taux annuel effectif global</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <Text>
            Le TAEG est un élément important du plan de financement, il intègre
            l'ensemble des coûts liés au crédit. De ce fait, il est le premier
            indice de comparaison des offres bancaires. Il intègre les coûts
            liés aux assurances, aux frais de dossier, aux frais annexes et
            naturellement aux interêts bancaires. Pour calculer vos mensualités
            il faut utiliser le TAEG.
          </Text>
        </CollapseBody>
      </Collapse>
      <Collapse>
        <CollapseHeader>
          <View>
            <Text>Mensualités</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <Text>
            Les mensualités d'un prêt amortissable à taux fixe ont un montant
            constant tout au long de la période d'emprunt. Elles incluent à la
            fois le capital et les intérêts. Les prêts amortissables à taux fixe
            sont les plus courant.Ils permettent d'avoir une vision claire et
            simplifiée des mensualités. En effet il est plus facile de prévoir
            un endettement lorsque les charges sont fixes tout au long de
            l'année. Calculer le montant de la mensualité de crédit permet ainsi
            de définir la faisabilité de votre projet.
          </Text>
        </CollapseBody>
      </Collapse>
      <Collapse>
        <CollapseHeader>
          <View>
            <Text>Cout du credit immobilier</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <Text>
            Le coût du crédit immobilier est imputable aux interêts bancaires,
            aux frais liés aux assurances, aux frais de dossier, aux frais
            annexes. Le coût global de votre emprunt est égal à la différence
            entre le total des mensualités et le montant de l'emprunt. Ce
            chiffre doit également vous être communiqué par votre banquier. Le
            coût du crédit = (montant des mensualités * nombre d'échéances) -
            capital emprunté.
          </Text>
        </CollapseBody>
      </Collapse>
      <Button title="Vers Home" onPress={goToHome} />
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

export { Terminologie };
