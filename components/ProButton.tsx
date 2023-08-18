import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface ProButtonProps {
    onPress: () => void;
    title: string;
}

const ProButton: React.FC<ProButtonProps> = ({ onPress, title }) => (
    <TouchableOpacity style={styles.proButton} onPress={onPress} >
        <Text style={styles.proButtonText}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    proButton: {
        width: '100%',
        backgroundColor: '#f5f0e1', // Light coffee color
        padding: 15,
        marginBottom: 2,  // Adjust this value as needed
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        alignItems: 'center',
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderColor: '#795548', // Coffee color border
    },
    proButtonText: {
        color: '#01000c', // Dark brown text color
        fontSize: 16,
    },
});

export default ProButton;
