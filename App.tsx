import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StatusBar } from 'react-native';
import { AuthProvider } from './AuthContext';
import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';
import RestaurantCreateScreen from './screens/RestaurantCreate';
import RestaurantListScreen from './screens/RestaurantList';
import SettingsScreen from './screens/Settings';

type RootStackParamList = {
  Home: undefined,
  Login: undefined,
  RestaurantList: undefined,
  RestaurantCreate: undefined,
  Settings: undefined,
  Profile: { name: string };
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <AuthProvider>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer
        theme={{
          colors: {
            background: '#ede0d4', // Light cream color to match the retro theme
          },
        }}
      >
        <Stack.Navigator
          screenOptions={{
            headerTitle: '',
            headerBackTitleVisible: false,
            headerTintColor: '#5d4037', // Dark brown color
          }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerLeft: () => null,
              gestureEnabled: false,
            }}
          />
          <Stack.Screen name="RestaurantList" component={RestaurantListScreen} />
          <Stack.Screen name="RestaurantCreate" component={RestaurantCreateScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export type { RootStackParamList };
export default App;