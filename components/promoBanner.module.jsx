import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const banners = [
  { title: 'entrega\nhoje', subtitle: '*consulte seu cep' },
  { title: 'páscoa' },
  { title: 'leve +\npague -' },
  { title: 'oba,\ncupom' },
  { title: 'ofertas\ndo dia' },
];

export default function PromoBanners() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
      {banners.map((banner, idx) => (
        <View key={idx} style={styles.banner}>
          <Text style={styles.bannerTitle}>{banner.title}</Text>
          {banner.subtitle && <Text style={styles.bannerSubtitle}>{banner.subtitle}</Text>}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    marginVertical: 16,
    paddingLeft: 8,
  },
  banner: {
    backgroundColor: '#e30613',
    borderRadius: 16,
    width: 90,
    height: 90,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 20,
  },
  bannerSubtitle: {
    color: '#fff',
    fontSize: 10,
    marginTop: 4,
    textAlign: 'center',
    opacity: 0.8,
  },
});