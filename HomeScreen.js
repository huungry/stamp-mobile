import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

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

export default HomeScreen;