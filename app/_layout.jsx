import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerShown: false,
          drawerActiveTintColor: "#e30613",
          drawerStyle: {
            backgroundColor: "#fff",
          },
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="index" options={{ title: 'Início' }} />
        <Drawer.Screen name="categories" options={{ title: 'Ofertas' }} />
        <Drawer.Screen name="settings" options={{ title: 'Configurações' }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      {/* Header vermelho */}
      <View style={styles.header}>
        <Ionicons name="person-circle-outline" size={50} color="#fff" style={styles.icon} />
        <View style={styles.profileInfo}>
          <Text style={styles.headerText}>Bem-vindo</Text>
          <Text style={styles.headerSubText}>
            Entre na sua conta para ver suas compras, favoritos etc.
          </Text>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.secondaryButton]}>
              <Text style={styles.secondaryButtonText}>Criar conta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Itens do Drawer */}
      <View style={{ flex: 1, paddingTop: 10 }}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: "#e30613",
    padding: 15,
    paddingTop: 40,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  profileInfo: {
    flex: 1,
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  headerSubText: {
    color: "#fff",
    fontSize: 13,
    marginTop: 4,
  },
  buttons: {
    flexDirection: "row",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 5,
    marginRight: 8,
  },
  buttonText: {
    color: "#e30613",
    fontWeight: "bold",
    fontSize: 13,
  },
  secondaryButton: {
    backgroundColor: "#e30613",
    borderWidth: 1,
    borderColor: "#fff",
  },
  secondaryButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 13,
  },
});
