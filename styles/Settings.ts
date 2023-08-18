import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eeece9', // Coffee cream color
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    item: {
        backgroundColor: '#f5f0e1', // Light coffee color
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 0,
        borderRadius: 10, // More rounded corners
        borderWidth: 2,
        borderColor: '#795548', // Coffee color border
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        width: '90%', // Slightly less than the full container width for a margin effect
    },
    title: {
        fontSize: 18, // Slightly smaller font size
        color: '#5d4037', // Dark brown text color
    },
});

export default styles;
