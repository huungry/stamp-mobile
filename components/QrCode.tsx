import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

interface QRCodeProps {
    value: string;
}

const QRCodeComponent: React.FC<QRCodeProps> = ({ value }) => (
    <View style={styles.qrCodeContainer}>
        <QRCode value={value} size={200} color="#5d4037" backgroundColor="#f5f0e1" />
        <Text style={{ marginTop: 15, color: "#5d4037" }}>{value}</Text>
    </View>
);

const styles = StyleSheet.create({
    qrCodeContainer: {
        padding: 15,
        borderWidth: 2,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderColor: '#795548', // Coffee color border
        backgroundColor: '#f5f0e1', // Light coffee color
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        marginTop: 30,
    },
});

export default QRCodeComponent;
