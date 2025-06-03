import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="home"
          options={{
            drawerLabel: 'Início',
            title: 'Página Inicial',
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            drawerLabel: 'Configurações',
            title: 'Configurações',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}