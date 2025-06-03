import { ScrollView, Text, StyleSheet } from 'react-native';

import Header from '../components/header.module';
import PromoBanners from '../components/promoBanner.module';
import LoginCard from '../components/loginCard';
import CupomCard from '../components/cupomCard'; // Assuming you want to include this as well

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Header/>

      <PromoBanners/>

      <LoginCard/>

      <CupomCard/>

    </ScrollView>
      

    
  );
}

const styles = StyleSheet.create({
  container: {      
    backgroundColor: '#f8f8f8',  
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,                
    alignSelf: 'center',  
  },
});