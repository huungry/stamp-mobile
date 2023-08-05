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
        placeholderTextColor="#5d4037" // Dark brown placeholder text color
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
    />
);

const styles = StyleSheet.create({
    input: {
        width: 280, // Fixed width
        height: 50, // Fixed height
        backgroundColor: '#f5f0e1', // Light coffee color
        color: '#5d4037', // Dark brown text color
        fontSize: 18,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10, // More rounded corners
        borderWidth: 2,
        borderColor: '#795548', // Coffee color border
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        marginBottom: 10, // Added margin at the bottom
    },
});

export default InputField;
