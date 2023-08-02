import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AuthProvider } from './AuthContext';
import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';
import RestaurantListScreen from './screens/RestaurantList';

type RootStackParamList = {
  Home: undefined,
  Login: undefined,
  RestaurantList: undefined,
  Profile: { name: string };
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="RestaurantList" component={RestaurantListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export type { RootStackParamList };
export default App;