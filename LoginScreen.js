import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';


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

  export default LoginScreen;