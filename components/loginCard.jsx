import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const LoginCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>olá! entre na sua conta :)</Text>
      <Text style={styles.subtitle}>
        Aqui tem ofertas personalizadas pra você e tudo em um só lugar. Veeem!
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>entrar ou cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
    margin: 16,
    marginTop: 4,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 8,
    color: "#222",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 13,
    color: "#555",
    marginBottom: 16,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#ff0033",
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 32,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 15,
  },
});

export default LoginCard;
