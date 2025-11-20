import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/Login';
import Home from './Screens/Home';
import PerfilUser from './Screens/PerfilUser';
import Progress from './Screens/Progress';
import { SafeAreaView, SafeAreaProvider, SafeAreaInsetsContext, useSafeAreaInsets, } from 'react-native-safe-area-context';

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Login'>
        <stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <stack.Screen name="Progress" component={Progress} options={{ headerShown: false }} />
        <stack.Screen name="Home" component={Home} options={{ title: 'Inicio' }} />
        <stack.Screen name="PerfilUser" component={PerfilUser} options={{ headerShown: false }} />
      </stack.Navigator>
    </NavigationContainer>
  );
}