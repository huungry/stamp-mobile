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
    backgroundColor: '#f2e6d9', // Cream color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#d4a373', // Warm brown border
    alignItems: 'center',
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonText: {
    color: '#8b4513', // Dark brown text
    fontSize: 18,
    fontFamily: 'Cochin', // Classic font (can be replaced with a custom font)
  },
});

export default StandardButton;
