import React, { useContext, useEffect, useState } from 'react';
import { Alert, FlatList, Text, View } from 'react-native';
import { AuthContext } from '../AuthContext';
import { listStamps } from '../api/StampService';
import { StampsView } from '../interfaces/Stamp';
import styles from '../styles/StampsList';

const StampList = () => {
    const [stamps, setStamps] = useState<StampsView[]>([]);
    const authContext = useContext(AuthContext);

    if (!authContext) {
        throw new Error('AuthContext is undefined. Make sure you are using AuthProvider at a higher level in your app.');
    }

    const { token } = authContext;

    useEffect(() => {
        if (token && token !== '') {
            const fetchData = async () => {
                try {
                    const { data } = await listStamps(token);
                    if (Array.isArray(data)) {
                        setStamps(data);
                    } else {
                        Alert.alert('Failed to fetch stamps', data.message || 'Failed to fetch stamps. Please try again.');
                    }
                } catch (error: any) {
                    Alert.alert('Error', error.message || 'An error occurred. Please try again later.');
                }
            };

            fetchData();
        }
    }, [token]);

    interface StampRowProps {
        restaurantName: string;
        count: number;
    }

    const StampRow = ({ restaurantName, count }: StampRowProps) => (
        <View style={styles.row}>
            <Text style={styles.cell}>{restaurantName}</Text>
            <Text style={styles.cell}>{count}</Text>
        </View>
    );

    return (
        <FlatList
            data={stamps}
            renderItem={({ item }) => <StampRow restaurantName={item.restaurantName} count={item.count} />}
            keyExtractor={(item) => item.restaurantId.toString()}
            ListHeaderComponent={<View style={{ height: 30 }} />}
        />
    );
};

export default StampList;
