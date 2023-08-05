import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

type InputFieldProps = {
    value: string;
    placeholder: string;
    secureTextEntry?: boolean;
    onChangeText: (text: string) => void;
};

const InputField = ({ value, placeholder, secureTextEntry = false, onChangeText }: InputFieldProps) => (
    <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#8b4513" // Dark brown placeholder text color
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
    />
);

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        marginBottom: 15,
        alignItems: 'center', // Center the input horizontally
    },
    input: {
        width: 280, // Fixed width
        height: 50, // Fixed height
        backgroundColor: '#e4d5b7', // Light cream background color
        color: '#8b4513', // Dark brown text color
        fontSize: 18,
        fontFamily: 'Cochin', // Classic font (can be replaced with a custom font)
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5, // Rounded corners
        borderWidth: 2,
        borderColor: '#b08552', // Warm gold border
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
});

export default InputField;
