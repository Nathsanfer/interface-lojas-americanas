import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const categorias = [
    {
        nome: 'Climatização',
        icone: 'https://www.americanas.com.br/_next/image?url=https%3A%2F%2Famericanas.vtexassets.com%2Fassets%2Fvtex.file-manager-graphql%2Fimages%2F31fb7086-a7cc-4172-b82f-a9500e808b4e___71bfaced2b7be2432db27d7a1e6e9146.png&w=154&q=75',
    },
    {
        nome: 'Telefonia',
        icone: 'https://www.americanas.com.br/_next/image?url=https%3A%2F%2Famericanas.vtexassets.com%2Fassets%2Fvtex.file-manager-graphql%2Fimages%2F5d40f415-b7b4-4c99-8ed6-8390c7875321___2cbb36cc8c96eb67b5248559c5773a19.png&w=154&q=75',
    },
    {
        nome: 'Games',
        icone: 'https://www.americanas.com.br/_next/image?url=https%3A%2F%2Famericanas.vtexassets.com%2Fassets%2Fvtex.file-manager-graphql%2Fimages%2Fec0c99e8-4d49-4c47-9e9d-a29533041b3d___5935d08a8be1ed57dda48f40d770a541.png&w=154&q=75',
    },
    {
        nome: 'Air Fryers',
        icone: 'https://www.americanas.com.br/_next/image?url=https%3A%2F%2Famericanas.vtexassets.com%2Fassets%2Fvtex.file-manager-graphql%2Fimages%2F8eb3140d-1c4e-46a1-93a9-e299d462bafd___35ba76e0cae65433520cbf7022948ab9.png&w=154&q=75',
    },
    {
        nome: 'Smart Tv',
        icone: 'https://www.americanas.com.br/_next/image?url=https%3A%2F%2Famericanas.vtexassets.com%2Fassets%2Fvtex.file-manager-graphql%2Fimages%2Fd013ef2e-09c0-4c33-83bc-534a03756616___9d302addd80ba3a461f3a163df715094.png&w=154&q=75',
    },
    {
        nome: 'Esportes',
        icone: 'https://www.americanas.com.br/_next/image?url=https%3A%2F%2Famericanas.vtexassets.com%2Fassets%2Fvtex.file-manager-graphql%2Fimages%2Fddf1894c-71ef-4a11-bc1d-2e664acdbdf2___e727b78714a50d73774441f40f2401b4.png&w=154&q=75',
    },
    {
        nome: 'Brinquedos',
        icone: 'https://www.americanas.com.br/_next/image?url=https%3A%2F%2Famericanas.vtexassets.com%2Fassets%2Fvtex.file-manager-graphql%2Fimages%2F91b6c4fe-4c97-4a52-a753-3675214f0d54___232944916c517c32702cdd519f2d76ff.png&w=154&q=75',
    },
    {
        nome: 'Utensilios',
        icone: 'https://www.americanas.com.br/_next/image?url=https%3A%2F%2Famericanas.vtexassets.com%2Fassets%2Fvtex.file-manager-graphql%2Fimages%2F10db7df7-a883-412e-89e6-3e04ee250c4e___88dea4382818262b4ea1e04918c766d0.png&w=154&q=75',
    },
];

const Categorias = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                <Text style={{ fontWeight: 'bold' }}>tuuudo com entrega rápida</Text>
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
                {categorias.map((cat, idx) => (
                    <TouchableOpacity
                        key={idx}
                        style={styles.categoria}
                        onPress={() => navigation.navigate('categories')}
                    >
                        <View style={styles.iconeContainer}>
                            <Image source={{ uri: cat.icone }} style={styles.icone} />
                        </View>
                        <Text style={styles.nome}>{cat.nome}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fafafa',
        paddingVertical: 12,
        paddingLeft: 8,
        marginBottom: 8,
    },
    titulo: {
        fontSize: 18,
        marginBottom: 8,
        marginLeft: 8,
        color: '#222',
    },
    scroll: {
        paddingLeft: 0,
    },
    categoria: {
        alignItems: 'center',
        marginRight: 18,
    },
    iconeContainer: {
        backgroundColor: '#fff',
        borderRadius: 50,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        marginBottom: 6,
    },
    icone: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
    },
    nome: {
        fontSize: 12,
        color: '#444',
        textAlign: 'center',
    },
});

export default Categorias;