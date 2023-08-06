// SettingsScreen.tsx
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { View } from 'react-native';
import { RootStackParamList } from '../App';
import { AuthContext } from '../AuthContext';
import LogoutButton from '../components/LogoutButton';

type SettingsNavigationProp = StackNavigationProp<RootStackParamList, 'Settings'>;

type Props = {
    navigation: SettingsNavigationProp;
};

const SettingsScreen = ({ navigation }: Props) => {
    const authContext = useContext(AuthContext);

    if (!authContext) {
        throw new Error('AuthContext is undefined. Make sure you are using AuthProvider at a higher level in your app.');
    }

    const handleLogout = () => {
        authContext.setToken('');
        navigation.navigate('Login');
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <LogoutButton title="Logout" onPress={handleLogout} />
        </View>
    );
};

export default SettingsScreen;
