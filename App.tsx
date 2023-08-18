import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StatusBar } from 'react-native';
import { AuthProvider } from './AuthContext';
import HomeTabs from './screens/HomeTabs'; // Renamed from HomeScreen
import LoginScreen from './screens/Login';
import RestaurantCreateScreen from './screens/RestaurantCreate';

type RootStackParamList = {
  HomeTabs: undefined, // Renamed from Home
  Login: undefined,
  RestaurantCreate: undefined,
  // Removed other screen declarations since they will be part of HomeTabs now
  Profile: { name: string };
};

const MainStack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <AuthProvider>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer
        theme={{
          colors: {
            background: '#eeece9',
          },
        }}
      >
        <MainStack.Navigator
          screenOptions={{
            headerTitle: '',
            headerBackTitleVisible: false,
            headerTintColor: '#5d4037',
          }}
        >
          <MainStack.Screen name="Login" component={LoginScreen} />
          <MainStack.Screen
            name="HomeTabs"
            component={HomeTabs}
            options={{
              headerLeft: () => null,
              gestureEnabled: false,
            }}
          />
          <MainStack.Screen name="RestaurantCreate" component={RestaurantCreateScreen} />
          {/* ... other screens */}
        </MainStack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
