import { StyleSheet } from 'react-native';

const commonRowStyles = {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 25,
    paddingBottom: 10,
    paddingTop: 10,
    borderWidth: 0.5,
    borderRadius: 30,
    borderColor: '#eebc7b',
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginVertical: 5,
    marginLeft: 15,
    marginRight: 15
};

const styles = StyleSheet.create({
    row: {
        ...commonRowStyles,
    },
    activeRow: {
        ...commonRowStyles,
    },
    cell: {
        fontSize: 16,
        color: '#8d8c8f',
        textAlign: 'center',
        marginVertical: 1,
        fontStyle: 'italic',
    },
    cellAdditional: {
        fontSize: 12, color: 'gray', marginHorizontal: 10, marginTop: 5, textAlign: 'center'
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
        textAlign: 'center',
        marginVertical: 7,
        paddingVertical: 10,
        paddingHorizontal: 70,
        backgroundColor: '#e38262',
        opacity: 0.9,
        borderRadius: 20,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'white',
    },
    line: {
        width: '90%',
        opacity: 0.2,
        backgroundColor: 'black',
        height: 1,
        marginTop: 5,
        marginBottom: 3,
    },
    collectButton: {
        marginTop: 7,
        elevation: 3,
    }
});

export default styles;
