import { StackNavigationProp } from '@react-navigation/stack';
import React, { useContext, useState } from 'react';
import { Alert, Button, Image, KeyboardAvoidingView, Platform, StyleSheet, TextInput } from 'react-native';
import { RootStackParamList } from './App';
import { AuthContext } from './AuthContext';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({ navigation }: Props) => {
  const [email, setemail] = useState('');
  const [name, setname] = useState('');

  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('AuthContext is undefined. Make sure you are using AuthProvider at a higher level in your app.');
  }

  const { token, setToken } = authContext;

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
    } catch (error: any) {
      Alert.alert('Error', error.message || 'An error occurred. Please try again later.');
    }
  };

  const handleLogout = () => {
    setToken('');
    navigation.navigate('Login')
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Image source={require('./assets/restaurant.png')} style={styles.logo} />
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
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#D1C5A5',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
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

export default HomeScreen;