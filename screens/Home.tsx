import { StackNavigationProp } from '@react-navigation/stack';
import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import { RootStackParamList } from '../App';
import { AuthContext } from '../AuthContext';
import { findMe } from '../api/UserService';
import LogoutButton from '../components/LogoutButton';
import ProButton from '../components/ProButton';
import StandardButton from '../components/StandardButton';
import { UserRole, UserView } from '../interfaces/User';
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

  const { token } = authContext;

  const [user, setUser] = useState<UserView | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await findMe(token);
      setUser(data);
      setLoading(false);
    };

    fetchUser();
  }, [token]);

  const handleShowRestaurants = () => {
    navigation.navigate('RestaurantList')
  };

  const handleCreateRestaurant = () => {
    navigation.navigate('RestaurantCreate')
  };

  const handleLogout = () => {
    navigation.navigate('Login')
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Text style={styles.greeting}>Hello, {user?.firstName}!</Text>
      <StandardButton title="Restaurants" onPress={handleShowRestaurants} />
      {user?.role === UserRole.Pro && <ProButton title="Manage" onPress={handleCreateRestaurant} />}
      <View style={{ flex: 1 }} />
      <LogoutButton title="Logout" onPress={handleLogout} />
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;
