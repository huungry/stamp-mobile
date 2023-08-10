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

    const generateEmojisString = (emoji: string, count: number, rowLenght: number) => {
        let result = '';
        for (let i = 0; i < count; i++) {
            if (i > 0 && i % rowLenght === 0) {
                result += '\n';
            }
            result += emoji;
        }
        return result;
    };

    const StampRow = ({ restaurantName, count, stampsToReward, onRewardPress }: StampRowProps) => {
        const canCollect = stampsToReward && stampsToReward <= count;
        const RowComponent = canCollect ? TouchableOpacity : View;

        return (
            <View style={canCollect ? styles.activeRow : styles.inactiveRow}>
                <Text style={styles.cell}>{restaurantName.toUpperCase()}</Text>
                <View style={styles.line} />
                <Text style={styles.cellEmoji}>{generateEmojisString('\u2615', count, 4)}</Text>
                {
                    canCollect
                        ? (
                            <TouchableOpacity onPress={onRewardPress}>
                                <Text style={styles.cellCollect}>Collect</Text>
                            </TouchableOpacity>
                        )
                        : stampsToReward
                            ? <Text style={styles.cell}>Only {stampsToReward - count} more needed for reward &#x1F44F;</Text>
                            : null
                }
            </View>
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
