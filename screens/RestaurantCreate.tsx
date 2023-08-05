import { StackNavigationProp } from '@react-navigation/stack';
import React, { useContext, useState } from 'react';
import { Alert, Button, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { RootStackParamList } from '../App';
import { AuthContext } from '../AuthContext';
import { createRestaurant } from '../api/RestaurantService';
import InputField from '../components/InputField';
import styles from '../styles/HomeScreenStyles';

type RestaurantCreateNavigationProp = StackNavigationProp<RootStackParamList, 'RestaurantCreate'>;

type Props = {
  navigation: RestaurantCreateNavigationProp;
};

const RestaurantCreateScreen = ({ navigation }: Props) => {
  const [email, setemail] = useState('');
  const [name, setname] = useState('');

  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('AuthContext is undefined. Make sure you are using AuthProvider at a higher level in your app.');
  }

  const { token, setToken } = authContext;

  const handleCreateRestaurant = async () => {
    try {
      const { response, data } = await createRestaurant(token, email, name);

      if (response.ok) {
        Alert.alert('Restaurant Created', 'The restaurant was created successfully!');
      } else {
        Alert.alert('Creation Failed', data.message || 'Restaurant creation failed. Please try again.');
      }
    } catch (error: any) {
      Alert.alert('Error', error.message || 'An error occurred. Please try again later.');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Image source={require('../assets/restaurant.png')} style={styles.logo} />
      <InputField
        value={email}
        placeholder="Restaurant email"
        onChangeText={(text) => setemail(text)}
      />
      <InputField
        value={name}
        placeholder="Restaurant name"
        onChangeText={(text) => setname(text)}
      />
      <Button title="Create" onPress={handleCreateRestaurant} />
    </KeyboardAvoidingView>
  );
};

export default RestaurantCreateScreen;
