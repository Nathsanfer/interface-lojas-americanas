import { View, Text, StyleSheet } from 'react-native';

import Header from '../components/header.jsx';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Header/>

      <Text style={styles.title}>Configurações</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'stretch',        
    backgroundColor: '#fff',  
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,                
    alignSelf: 'center',  
  },
});