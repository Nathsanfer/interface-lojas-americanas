import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{
        headerShown: false, 
        drawerInactiveTintColor: "#666", // Cor dos ícones inativos
        drawerStyle: {
          backgroundColor: "#fff", // Cor de fundo do Drawer
        },
      }}>
        <Drawer.Screen name="home"
          options={{
            drawerLabel: 'Home',
            headerShown: false,
            headerLeft: false,
            title: 'Home',
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            headerShown: false,
            headerLeft: false,
            drawerLabel: 'Configurações',
            title: 'Configurações',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}