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
        backgroundColor: '#D4AF37', // Gold color
        padding: 15,
        margin: 10,
        borderRadius: 50, // Fully rounded shape
        borderWidth: 2,
        borderColor: '#795548', // Coffee color border
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        alignItems: 'center',
    },
    proButtonText: {
        color: '#5d4037', // Dark brown text color
        fontSize: 16,
        fontFamily: 'Arial' // Standard font (can be replaced with a custom font)
    },
});

export default ProButton;
