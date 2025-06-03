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
    
});