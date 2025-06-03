import { TouchableOpacity, View, Text, StyleSheet, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Header() {
    const navigation = useNavigation();

    return (
        <View style={styles.headerContainer}>

            <View style={styles.headerTop}>
                <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menuButton}>
                    <Ionicons name="menu" size={28} color="#fff" />
                </TouchableOpacity>
                <Image
                    source={{ uri: "https://www.americanas.com.br/_next/static/media/storeLogoIcon.0f542fa4.svg" }}
                    style={styles.logo}
                    resizeMode="contain"
                />
                <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.cartButton}>
                    <Ionicons name="cart-outline" size={24} color="#fff" />
                </TouchableOpacity>
            </View>

            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="busque aqui seu produto"
                    placeholderTextColor="#aaa"
                />
                <Ionicons name="search" size={22} color="#f80132" style={styles.searchIcon} />
            </View>

            <TouchableOpacity style={styles.cepContainer}>
                <Ionicons name="location-outline" size={18} color="#fff" />
                <Text style={styles.cepText}> informe seu CEP</Text>
                <Ionicons name="chevron-down" size={18} color="#fff" />
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: "#f80132",
        paddingTop: 30, // para status bar
        paddingHorizontal: 12,
        paddingBottom: 12,
    },
    headerTop: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    logo: {
        width: 140,
        height: 32,
    },
    menuButton: {
        padding: 4,
    },
    cartButton: {
        padding: 4,
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 22,
        paddingHorizontal: 14,
        height: 40,
        marginBottom: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: "#333",
    },
    searchIcon: {
        marginLeft: 8,
    },
    cepContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
    },
    cepText: {
        color: "#fff",
        fontSize: 15,
    },
});