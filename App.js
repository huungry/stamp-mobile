import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = ({ navigation, token, setToken }) => {
  const [email, setemail] = useState('');
  const [name, setname] = useState('');

  const handleCreateRestaurant = async () => {
    try {
      const response = await fetch('http://192.168.0.185:9000/restaurants', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`, // Add the Authorization header with the token
          'Content-Type': 'application/json',
          'accept': 'application/json',
        },
        body: JSON.stringify({
          email,
          name
        }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Restaurant Created', 'The restaurant was created successfully!');
      } else {
        Alert.alert('Creation Failed', data.message || 'Restaurant creation failed. Please try again.');
      }
    } catch (error) {
      Alert.alert('Error', error.message || 'An error occurred. Please try again later.');
    }
  };

  const handleLogout = () => {
    setToken('');
    navigation.navigate('Login');
  };
  
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Restaurant email"
        value={email}
        onChangeText={(text) => setemail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Restaurant name"
        value={name}
        onChangeText={(text) => setname(text)}
      />
      <Button title="Create Restaurant" onPress={handleCreateRestaurant} />
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const LoginScreen = ({ navigation, setToken }) => {
  const [email, setEmail] = useState('kam.gd@gmail.com');
  const [password, setPassword] = useState('kamglod');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://192.168.0.185:9000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setToken(data.token);
        Alert.alert('Login Successful', 'You have successfully logged in!');
      } else {
        console.log("not ok");
        Alert.alert('Login Failed', data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const Stack = createStackNavigator();

const App = () => {
  const [token, setToken] = useState('');

    return (
      <NavigationContainer>
        <Stack.Navigator>
          {token ? (
            <Stack.Screen name="Home">
              {(props) => <HomeScreen {...props} token={token} setToken={setToken}/>}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default App;