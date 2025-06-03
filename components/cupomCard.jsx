import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CupomCard = () => (
  <View style={styles.card}>
    <View style={styles.left}>
      <Text style={styles.label}>ganhe</Text>
      <Text style={styles.valor}>R$20</Text>
      <Text style={styles.desc}>de desconto</Text>
    </View>
    <View style={styles.separator} />
    <View style={styles.right}>
      <Text style={styles.label}>com cupom</Text>
      <Text style={styles.cupom}>GANHE20</Text>
      <Text style={styles.regras}>
        nas compras acima de R$100 só no app. Exclusivo para clientes selecionados. Confira as regras.
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    alignItems: "center",
    margin: 16,
    elevation: 1,
  },
  left: {
    flex: 1.0,
    alignItems: "flex-start",
  },
  separator: {
    width: 1.8,
    height: "100%",
    backgroundColor: "#eee",
    marginHorizontal: 14,
  },
  right: {
    flex: 2,
    alignItems: "flex-start",
  },
  label: {
    color: "#888",
    fontSize: 13,
  },
  valor: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#222",
  },
  desc: {
    color: "#222",
    fontSize: 13,
    fontWeight: "bold",
  },
  cupom: {
    fontWeight: "bold",
    fontSize: 28,
    color: "#222",
  },
regras: {
    fontSize: 9,
    color: "#888",
    marginTop: 2,
},
});

export default CupomCard;