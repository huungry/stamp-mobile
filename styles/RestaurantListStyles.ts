import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f2e6', // Light cream color to match the retro theme
        padding: 10, // Reduced overall padding
        alignItems: 'center',
        justifyContent: 'flex-start', // Align items to the top
    },
    item: {
        backgroundColor: '#e4d5b7', // Light cream color to match the buttons
        padding: 15, // Balanced padding
        marginVertical: 8,
        marginHorizontal: 0, // No horizontal margin
        borderRadius: 5, // Rounded corners
        borderWidth: 2,
        borderColor: '#b08552', // Warm gold border
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        width: '100%', // Set the width to take up the full container width
    },
    title: {
        fontSize: 24, // Slightly smaller font size
        fontFamily: 'Cochin', // Classic font (can be replaced with a custom font)
        color: '#8b4513', // Dark brown text color
    },
});

export default styles;
