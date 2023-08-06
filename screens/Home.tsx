import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useContext, useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { AuthContext } from '../AuthContext';
import { findMe } from '../api/UserService';
import QRCodeComponent from '../components/QrCode';
import { UserRole, UserView } from '../interfaces/User';
import Settings from '../screens/Settings';
import ManageScreen from './Manage';
import StampList from './StampList';

// Define your Tab navigator
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('AuthContext is undefined. Make sure you are using AuthProvider at a higher level in your app.');
  }

  const { token } = authContext;

  const [user, setUser] = useState<UserView | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token && token !== '') {
      const fetchUser = async () => {
        const { data } = await findMe(token);
        setUser(data);
        setLoading(false);
      };

      fetchUser();
    }
  }, [token]);

  if (loading) {
    return <ActivityIndicator size="large" color="#795548" />;
  }

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: '#795548',
        tabBarActiveTintColor: '#b8860b',
        headerTitleStyle: { color: "#795548", fontSize: 26, paddingBottom: 50 },
      }}>
      {user && <Tab.Screen name="QR Code" options={{
        title: `Hello, ${user.firstName} 👋🏼`,
        tabBarLabel: 'QR Code',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="qrcode" color={color} size={size} />
        ),
      }}>
        {() => <QRCodeComponent value={user.id} />}
      </Tab.Screen>}
      <Tab.Screen name="Stamps" component={StampList} options={{
        title: 'My stamps',
        tabBarLabel: 'Stamps',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="stamper" color={color} size={size} />
        ),
      }} />
      {user?.role === UserRole.Pro && <Tab.Screen name="Manage" component={ManageScreen} options={{
        tabBarLabel: 'Manage',
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="admin-panel-settings" color={color} size={size} />
        ),
      }} />}
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
