import { StackNavigationProp } from '@react-navigation/stack';
import React, { useContext, useState } from 'react';
import { Alert, Button, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { RootStackParamList } from '../App';
import { AuthContext } from '../AuthContext';
import { login } from '../api/AuthService';
import InputField from '../components/InputField';
import styles from '../styles/LoginScreenStyles';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen = ({ navigation }: Props) => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('AuthContext is undefined. Make sure you are using AuthProvider at a higher level in your app.');
  }

  const { setToken } = authContext;
  const [email, setEmail] = useState('kam.gd@gmail.com');
  const [password, setPassword] = useState('kamglod');

  const handleLogin = async () => {
    try {
      const { response, data } = await login(email, password);

      if (response.ok) {
        setToken(data.token);
        Alert.alert('Login Successful', 'You have successfully logged in!');
        navigation.navigate('RestaurantList');
      } else {
        Alert.alert('Login Failed', data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred. Please try again later.');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <InputField
        value={email}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <InputField
        value={password}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Login" onPress={handleLogin} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
