/**
 * Libraries...
 */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';

/**
 * page components...
 */
import Main from './pages/Main';
import Search from './pages/Search';
import Setting from './pages/Setting';

/**
 * constants...
 */

const Stack = createNativeStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'main'} screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
        <Stack.Screen name={'main'} component={Main} />
        <Stack.Screen name={'search'} component={Search} />
        <Stack.Screen name={'setting'} component={Setting} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default function App() {
  return (
    <AppContainer />
  );
}