import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useContext, useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { AuthContext } from '../AuthContext';
import { findMe } from '../api/UserService';
import QRWithText from '../components/QrCode';
import { UserRole, UserView } from '../interfaces/User';
import Settings from '../screens/Settings';
import ManageScreen from './Manage';
import RestaurantListScreen from './RestaurantList';
import StampList from './StampList';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function ManageStackNavigator() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false,
        headerBackTitleVisible: false,
        headerTintColor: '#5d4037',
      }}>
      <HomeStack.Screen name="Manage" component={ManageScreen} options={{
        headerLeft: () => null,
        gestureEnabled: false,
      }} />
      <HomeStack.Screen name="RestaurantList" component={RestaurantListScreen} options={{
        headerLeft: () => null,
        gestureEnabled: true,
      }} />
    </HomeStack.Navigator>
  );
}

const HomeTabs = () => {
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
        tabBarInactiveTintColor: '#8d8c8f',
        tabBarActiveTintColor: '#e38262',
        headerTitleStyle: { color: "#e38262", fontSize: 26, paddingBottom: 50 }
      }}>
      <Tab.Screen
        name="QR Code"
        options={{
          title: `Hello, ${user?.firstName} 👋`,  // Making sure user is defined using optional chaining
          tabBarLabel: 'QR Code',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="qrcode" color={color} size={size} />
          ),
        }}
      >
        {() => user ? <QRWithText userId={user.id} /> : null}
      </Tab.Screen>

      <Tab.Screen
        name="Stamps"
        component={StampList}
        options={{
          headerShown: false,
          tabBarLabel: 'Stamps',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="stamper" color={color} size={size} />
          ),
        }}
      />

      {user?.role === UserRole.Pro && <Tab.Screen
        name="ManageTabs"
        component={ManageStackNavigator}
        options={{
          headerShown: false,
          tabBarLabel: 'Manage',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="admin-panel-settings" color={color} size={size} />
          ),
        }}
      />}

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabs;
