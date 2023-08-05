import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface StandardButtonProps {
  onPress: () => void;
  title: string;
}

const StandardButton: React.FC<StandardButtonProps> = ({ onPress, title }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f5f0e1', // Light coffee color
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
  buttonText: {
    color: '#5d4037', // Dark brown text color
    fontSize: 16,
    fontFamily: 'Arial', // Script font (can be replaced with a custom font)
  },
});

export default StandardButton;
