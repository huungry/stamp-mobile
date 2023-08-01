import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen'; // Import the HomeScreen component
import LoginScreen from './LoginScreen'; // Import the LoginScreen component

const Stack = createStackNavigator();

const App = () => {
  const [token, setToken] = useState('');

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {token ? (
          <Stack.Screen name="Home">
            {(props) => <HomeScreen {...props} token={token} setToken={setToken} />}
          </Stack.Screen>
        ) : (
          <Stack.Screen name="Login">
            {(props) => <LoginScreen {...props} setToken={setToken} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;