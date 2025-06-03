import { ScrollView, Text, StyleSheet } from 'react-native';

import Header from '../components/header.jsx';
import PromoBanners from '../components/promoBanner.jsx';
import LoginCard from '../components/loginCard.jsx';
import CupomCard from '../components/cupomCard.jsx';
import EntregaCard from '../components/entregaCard.jsx';
import Categorias from '../components/categorias.jsx';
import BannerCard from '../components/bannerCard.jsx';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Header />

      <PromoBanners />

      <LoginCard />

      <CupomCard />

      <EntregaCard />

      <Categorias /> 
      
      <BannerCard />
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