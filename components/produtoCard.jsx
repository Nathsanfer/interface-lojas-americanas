import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, FlatList } from 'react-native';

const produtos = [
    {
        id: '1',
        desconto: 31,
        nome: 'Smartphone Motorola Moto G15 256GB 12GB RAM',
        precoAntigo: 'R$ 1.299,00',
        precoNovo: 'R$ 899,10',
        imagem: 'https://m.media-amazon.com/images/I/71VbHaAqbML._AC_SX679_.jpg',
    },
    {
        id: '2',
        desconto: 31,
        nome: 'Smartphone Motorola Moto G15 256GB 12GB RAM',
        precoAntigo: 'R$ 1.299,00',
        precoNovo: 'R$ 899,10',
        imagem: 'https://m.media-amazon.com/images/I/71VbHaAqbML._AC_SX679_.jpg',
    },
    {
        id: '3',
        desconto: 28,
        nome: 'Smartphone Motorola Moto G35 5G 256GB',
        precoAntigo: 'R$ 1.499,00',
        precoNovo: 'R$ 1.079,10',
        imagem: 'https://m.media-amazon.com/images/I/71VbHaAqbML._AC_SX679_.jpg',
    },
    {
        id: '4',
        desconto: 24,
        nome: 'Smartphone Samsung Galaxy A16 128GB + 4GB RAM',
        precoAntigo: 'R$ 1.299,00',
        precoNovo: 'R$ 989,10',
        imagem: 'https://m.media-amazon.com/images/I/71VbHaAqbML._AC_SX679_.jpg',
    },
    {
        id: '5',
        desconto: 24,
        nome: 'Smartphone Samsung Galaxy A16 128GB + 4GB RAM',
        precoAntigo: 'R$ 1.299,00',
        precoNovo: 'R$ 989,10',
        imagem: 'https://m.media-amazon.com/images/I/71VbHaAqbML._AC_SX679_.jpg',
    },
    {
        id: '6',
        desconto: 24,
        nome: 'Smartphone Samsung Galaxy A16 128GB + 4GB RAM',
        precoAntigo: 'R$ 1.299,00',
        precoNovo: 'R$ 989,10',
        imagem: 'https://m.media-amazon.com/images/I/71VbHaAqbML._AC_SX679_.jpg',
    },
    {
        id: '7',
        desconto: 24,
        nome: 'Smartphone Samsung Galaxy A16 128GB + 4GB RAM',
        precoAntigo: 'R$ 1.299,00',
        precoNovo: 'R$ 989,10',
        imagem: 'https://m.media-amazon.com/images/I/71VbHaAqbML._AC_SX679_.jpg',
    },
    {
        id: '8',
        desconto: 24,
        nome: 'Smartphone Samsung Galaxy A16 128GB + 4GB RAM',
        precoAntigo: 'R$ 1.299,00',
        precoNovo: 'R$ 989,10',
        imagem: 'https://m.media-amazon.com/images/I/71VbHaAqbML._AC_SX679_.jpg',
    },
];

const ProdutoCard = ({ produto }) => (
    <View style={styles.card}>
        <View style={styles.descontoContainer}>
            <Text style={styles.descontoText}>-{produto.desconto}%</Text>
        </View>
        <Image source={{ uri: produto.imagem }} style={styles.imagem} />
        <Text style={styles.nome} numberOfLines={2}>{produto.nome}</Text>
        <Text style={styles.precoAntigo}>{produto.precoAntigo}</Text>
        <Text style={styles.precoNovo}>{produto.precoNovo} <Text style={styles.pix}>no pix</Text></Text>
    </View>
);

export default function ProdutosGrid() {
    return (
        <FlatList
            data={produtos}
            keyExtractor={item => item.id}
            numColumns={2}
            contentContainerStyle={styles.grid}
            renderItem={({ item }) => <ProdutoCard produto={item} />}
            showsVerticalScrollIndicator={false}
        />
    );
}

const styles = StyleSheet.create({
    grid: {
        paddingHorizontal: 8,
        paddingBottom: 16,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 8,
        flex: 1,
        minWidth: 160,
        maxWidth: '48%',
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        padding: 8,
        marginTop: 20,
        alignItems: 'center',
    },
    descontoContainer: {
        position: 'absolute',
        top: 8,
        left: 8,
        backgroundColor: '#2ecc40',
        borderRadius: 6,
        paddingHorizontal: 6,
        paddingVertical: 2,
        zIndex: 1,
    },
    descontoText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 13,
    },
    imagem: {
        width: 90,
        height: 90,
        resizeMode: 'contain',
        marginTop: 16,
        marginBottom: 8,
    },
    nome: {
        fontSize: 13,
        color: '#222',
        fontWeight: '500',
        marginBottom: 4,
        textAlign: 'center',
        minHeight: 36,
    },
    precoAntigo: {
        fontSize: 12,
        color: '#888',
        textDecorationLine: 'line-through',
        marginBottom: 2,
    },
    precoNovo: {
        fontSize: 15,
        color: '#222',
        fontWeight: 'bold',
    },
    pix: {
        color: '#2ecc40',
        fontSize: 13,
        fontWeight: 'bold',
    },
});