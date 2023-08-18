import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

interface QRCodeProps {
    value: string;
}

const QRCodeComponent: React.FC<QRCodeProps> = ({ value }) => (
    <View style={styles.qrCodeContainer}>
        <QRCode value={value} size={200} color="#01000c" backgroundColor="#ffffff" />
        <Text style={{ marginTop: 25, color: "#e27854" }}>{value}</Text>
    </View>
);

const styles = StyleSheet.create({
    qrCodeContainer: {
        padding: 25,
        borderWidth: 0.5,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderRadius: 40,
        borderColor: '#eebc7b', // Coffee color border
        backgroundColor: '#ffffff', // Light coffee color
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10
    },
});

export default QRCodeComponent;
