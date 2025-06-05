import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Header from '../components/header.jsx';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Header />

      <Text style={styles.title}>Configurações</Text>

      <ScrollView contentContainerStyle={styles.content}>
        <TouchableOpacity style={styles.option}>
          <Ionicons name="person-outline" size={24} color="#e30613" />
          <Text style={styles.optionText}>Dados pessoais</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Ionicons name="lock-closed-outline" size={24} color="#e30613" />
          <Text style={styles.optionText}>Alterar senha</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Ionicons name="notifications-outline" size={24} color="#e30613" />
          <Text style={styles.optionText}>Notificações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Ionicons name="moon-outline" size={24} color="#e30613" />
          <Text style={styles.optionText}>Modo escuro</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Ionicons name="document-text-outline" size={24} color="#e30613" />
          <Text style={styles.optionText}>Termos e políticas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.option, styles.logout]}>
          <Ionicons name="log-out-outline" size={24} color="#e30613" />
          <Text style={[styles.optionText, styles.logoutText]}>Sair da conta</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'center',
    color: '#e30613',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  optionText: {
    marginLeft: 15,
    fontSize: 16,
    color: '#333',
  },
  logout: {
    borderBottomWidth: 0,
    marginTop: 30,
  },
  logoutText: {
    color: '#e30613',
    fontWeight: 'bold',
  },
});
