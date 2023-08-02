import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AuthProvider } from './AuthContext';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';

type RootStackParamList = {
  Home: undefined,
  Login: undefined,
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
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export type { RootStackParamList };
export default App;