import { StyleSheet } from 'react-native';

const commonRowStyles = {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 3,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#795548',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
};

const styles = StyleSheet.create({
    row: {
        ...commonRowStyles,
        backgroundColor: '#f5f0e1',
    },
    activeRow: {
        ...commonRowStyles,
        backgroundColor: '#C8E6C9',
    },
    inactiveRow: {
        ...commonRowStyles,
        backgroundColor: '#f5f0e1',
    },
    cell: {
        fontSize: 16,
        color: '#5d4037',
        textAlign: 'center',
        marginVertical: 5,
        fontStyle: 'italic',
    },
});

export default styles;
