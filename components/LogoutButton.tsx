import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface LogoutButtonProps {
  onPress: () => void;
  title: string;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ onPress, title }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: '#A1887F', // Light coffee color
    padding: 15,
    marginBottom: 50,  // Adjust this value as needed
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    alignItems: 'center',
  },
  buttonText: {
    color: '#f5f0e1', // Dark brown text color
    fontSize: 16,
  },
});

export default LogoutButton;
