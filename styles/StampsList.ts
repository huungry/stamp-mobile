import { StyleSheet } from 'react-native';

const commonRowStyles = {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 0,
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
        backgroundColor: '#f5f0e1',
    },
    inactiveRow: {
        ...commonRowStyles,
        backgroundColor: '#f5f0e1',
    },
    cell: {
        fontSize: 16,
        color: '#5d4037',
        textAlign: 'center',
        marginVertical: 1,
        fontStyle: 'italic',
    },
    cellEmoji: {
        fontSize: 42,
        color: '#5d4037',
        textAlign: 'center',
        marginVertical: 3,
        fontStyle: 'italic',
    },
    cellCollect: {
        fontSize: 16,
        color: 'white',
        opacity: 0.7,
        textAlign: 'center',
        marginVertical: 7,
        fontStyle: 'italic',
        paddingVertical: 10,
        paddingHorizontal: 70,
        backgroundColor: '#C65D7B',  // Adjust this to your preferred button color
        borderRadius: 20,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,  // for Android shadow
    },
    line: {
        width: '90%',
        opacity: 0.2,
        backgroundColor: 'black',
        height: 1,  // or 2 if you want a thicker line
        marginTop: 5,  // optional: space between the Text and the line
        marginBottom: 3,  // optional: space below the line
    }
});

export default styles;
