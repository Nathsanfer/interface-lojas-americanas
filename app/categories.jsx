import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import Header from '../components/header.jsx';
import FiltroRelevancia from '../components/filtroRelevancia';
import ProdutosCard from '../components/produtoCard.jsx';

export default function CategoriesScreen() {
    return (
        <ScrollView style={styles.container}>
            <Header />
            <FiltroRelevancia />
            <ProdutosCard />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#e30613',
    },
});