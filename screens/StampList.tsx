import React, { useContext, useEffect, useState } from 'react';
import { Alert, FlatList, Text, TouchableOpacity, View } from 'react-native';
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
        stampsToReward?: number;
        onRewardPress?: () => void; // Callback for when an active row is pressed
    }

    const StampRow = ({ restaurantName, count, stampsToReward, onRewardPress }: StampRowProps) => {
        const RowComponent = stampsToReward ? TouchableOpacity : View;

        return (
            <RowComponent style={(stampsToReward && stampsToReward <= count) ? styles.activeRow : styles.inactiveRow} onPress={onRewardPress}>
                <Text style={styles.cell}>{restaurantName.toUpperCase()}</Text>
                <Text style={styles.cell}>{count}</Text>
                {stampsToReward && stampsToReward <= count ? <Text style={styles.cell}>&#x1F389; Collect reward now &#x1F389; </Text> : null}
            </RowComponent>
        );
    };

    return (
        <FlatList
            data={stamps}
            renderItem={({ item }) => (
                <StampRow
                    restaurantName={item.restaurantName}
                    count={item.count}
                    stampsToReward={item.stampsToReward}
                    onRewardPress={() => {
                        if (item.stampsToReward && item.stampsToReward <= item.count) {
                            // Handle the reward collection for the active restaurant
                            console.log(`Collecting reward for: ${item.restaurantName}`);
                        }
                    }}
                />
            )
            }
            keyExtractor={(item) => item.restaurantId.toString()}
            ListHeaderComponent={< View style={{ height: 30 }} />}
        />
    );
}


export default StampList;
