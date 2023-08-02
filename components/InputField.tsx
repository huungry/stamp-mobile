import React from 'react';
import { TextInput } from 'react-native';
import styles from '../styles/LoginScreenStyles';

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
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
    />
);

export default InputField;
