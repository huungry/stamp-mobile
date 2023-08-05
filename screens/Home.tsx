import { StackNavigationProp } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { RootStackParamList } from '../App';
import { AuthContext } from '../AuthContext';
import ProButton from '../components/ProButton';
import StandardButton from '../components/StandardButton';
import styles from '../styles/HomeScreenStyles';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({ navigation }: Props) => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('AuthContext is undefined. Make sure you are using AuthProvider at a higher level in your app.');
  }

  const { setToken } = authContext;

  const handleShowRestaurants = () => {
    navigation.navigate('RestaurantList')
  };

  const handleCreateRestaurant = () => {
    navigation.navigate('RestaurantCreate')
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
      <StandardButton title="Show restaurants" onPress={handleShowRestaurants} />
      <ProButton title="Create restaurant" onPress={handleCreateRestaurant} />
      <StandardButton title="Logout" onPress={handleLogout} />
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;
