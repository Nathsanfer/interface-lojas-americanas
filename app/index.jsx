import { View, Text, StyleSheet } from 'react-native';

import Header from '../components/header.module';
import PromoBanners from '../components/promoBanner.module';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header/>

      <PromoBanners/>



      <Text style={styles.title}>Bem-vindo à Página Inicial!</Text>
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