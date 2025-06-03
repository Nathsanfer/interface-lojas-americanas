import { ScrollView, Text, StyleSheet } from 'react-native';

import Header from '../components/header.module';
import PromoBanners from '../components/promoBanner.module';
import LoginCard from '../components/loginCard';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Header/>

      <PromoBanners/>

      <LoginCard/>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {      
    backgroundColor: '#fff',  
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,                
    alignSelf: 'center',  
  },
});