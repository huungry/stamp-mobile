import React, { useContext, useEffect, useState } from 'react';
import { Alert, FlatList, Text, View } from 'react-native';
import { AuthContext } from '../AuthContext';
import { getRestaurants } from '../api/RestaurantService';
import styles from '../styles/RestaurantListStyles';

const RestaurantListScreen = () => {
    const [restaurants, setRestaurants] = useState([]);
    const authContext = useContext(AuthContext);

    if (!authContext) {
        throw new Error('AuthContext is undefined. Make sure you are using AuthProvider at a higher level in your app.');
    }

    const { token } = authContext;

    useEffect(() => {
        if (token && token !== '') {
            const fetchData = async () => {
                try {
                    const { response, data } = await getRestaurants(token);

                    if (response.ok) {
                        setRestaurants(data);
                    } else {
                        Alert.alert('Failed to Fetch Restaurants', data.message || 'Failed to fetch restaurants. Please try again.');
                    }
                } catch (error: any) {
                    Alert.alert('Error', error.message || 'An error occurred. Please try again later.');
                }
            };

            fetchData();
        }
    }, [token]);

    const renderItem = ({ item }: { item: any }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.name}</Text>
            <Text>{item.email}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={restaurants}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

export default RestaurantListScreen;
