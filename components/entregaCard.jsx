import { View, Text, StyleSheet, Image } from 'react-native';

const EntregaCard = () => {
    return (
        <View style={styles.card}>
            <Image
                source={{ uri: "https://icones.pro/wp-content/uploads/2021/11/icone-rouge-de-camion-d-expedition-et-de-livraison.png" }}
                style={styles.logo}
                resizeMode="contain"
            />
            <Text style={styles.text}>
                <Text style={styles.bold}>todos os dias</Text>
                <Text> as melhores ofertas com </Text>
                <Text style={styles.bold}>entrega rápida</Text>
                <Text> · </Text>
                <Text style={styles.link}>clique e confira {'>'}</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingVertical: 8,
        paddingHorizontal: 16,
        margin: 12,
        elevation: 2,
    },
    logo: {
        width: 50,
        height: 60,
        marginRight: 12,
    },
    text: {
        flex: 1,
        flexWrap: 'wrap',
        fontSize: 14,
        color: '#222',
    },
    bold: {
        fontWeight: 'bold',
        color: '#222',
    },
    link: {
        color: '#e30613',
        fontWeight: 'bold',
    },
});

export default EntregaCard;