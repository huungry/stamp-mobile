import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface ProButtonProps {
    onPress: () => void;
    title: string;
}

const ProButton: React.FC<ProButtonProps> = ({ onPress, title }) => (
    <TouchableOpacity style={styles.proButton} onPress={onPress}>
        <Text style={styles.proButtonText}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    proButton: {
        backgroundColor: '#e4d5b7', // Light cream color
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#b08552', // Warm gold border
        alignItems: 'center',
        marginVertical: 5,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    proButtonText: {
        color: '#8b4513', // Dark brown text
        fontSize: 18,
        fontFamily: 'Cochin', // Classic font (can be replaced with a custom font)
        fontWeight: 'bold',
    },
});

export default ProButton;
