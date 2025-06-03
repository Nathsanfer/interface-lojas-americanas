import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{
        headerShown: false, 
        drawerInactiveTintColor: "#666",
        drawerStyle: {
          backgroundColor: "#fff",
        },
      }}>
        <Drawer.Screen 
          name="index"
          options={{
            headerShown: false,
            headerLeft: false,
            drawerLabel: 'Home',
            title: 'Home',
          }}
        />
        <Drawer.Screen
          name="categories"
          options={{
            headerShown: false,
            headerLeft: false,
            drawerLabel: 'Categorias',
            title: 'Categorias',
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