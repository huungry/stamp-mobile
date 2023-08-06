// ManageScreen.tsx
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { View } from 'react-native';
import { RootStackParamList } from '../App';
import { AuthContext } from '../AuthContext';
import ProButton from '../components/ProButton';

type ManageNavigationProp = StackNavigationProp<RootStackParamList, 'Manage'>;

type Props = {
    navigation: ManageNavigationProp;
};

const ManageScreen = ({ navigation }: Props) => {
    const authContext = useContext(AuthContext);

    if (!authContext) {
        throw new Error('AuthContext is undefined. Make sure you are using AuthProvider at a higher level in your app.');
    }

    const handleRestaurantList = () => {
        navigation.navigate('RestaurantList');
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ProButton title="My restaurants" onPress={handleRestaurantList} />
        </View>
    );
};

export default ManageScreen;
