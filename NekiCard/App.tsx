import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/Home';
import { NativeBaseProvider} from "native-base";
import { SafeAreaFrameContext } from 'react-native-safe-area-context';
import { Login } from './src/screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="dark" />
    </NativeBaseProvider >
  );
}
