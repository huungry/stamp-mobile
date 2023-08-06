import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f5f0e1', // Light coffee color
        padding: 15,
        marginVertical: 5,
        marginHorizontal: 3,
        borderRadius: 10, // More rounded corners
        borderWidth: 2,
        borderColor: '#795548', // Coffee color border
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    cell: {
        fontSize: 18, // Slightly smaller font size
        color: '#5d4037', // Dark brown text color
    },
});

export default styles;
