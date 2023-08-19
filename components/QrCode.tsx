import React, { useState } from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

interface QRCodeProps {
    value: string;
}

interface QRWithTextProps {
    userId: string;
    style?: StyleProp<ViewStyle>;
}

// const QRWithText: React.FC<QRWithTextProps> = ({ userId, style }) => {
//     return (
//         <View style={[{ alignItems: 'center', justifyContent: 'flex-start', flex: 1 }, style]}>
//             <QRCodeComponent value={userId} />
//             <Text style={{ marginTop: 5, fontSize: 12, color: '#8fabef', marginHorizontal: 50, textAlign: 'center' }}>
//                 Present this code to the staff to get your stamp 
//             </Text>
//         </View>
//     );
// }

const QRWithText: React.FC<QRWithTextProps> = ({ userId, style }) => {
    const [showHelpText, setShowHelpText] = useState(false);

    return (
        <View style={[{ alignItems: 'center', justifyContent: 'flex-start', flex: 1 }, style]}>
            <QRCodeComponent value={userId} />

            <TouchableOpacity onPress={() => setShowHelpText(!showHelpText)} style={{
                marginTop: 30,
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderRadius: 15,
                borderColor: '#e38262',
                borderWidth: 0.2,
                elevation: 5,  // Android elevation
            }}>
                <Text style={{ color: '#e38262' }}>{showHelpText ? 'Hide instructions' : 'How to use this QR code?'}</Text>
            </TouchableOpacity>

            {showHelpText && (
                <View style={{ marginTop: 10, alignItems: 'center' }}>
                    <Text style={{ marginTop: 5, fontSize: 12, color: 'gray' }}>
                        Present this code to the staff to add a stamp to your account.
                    </Text>
                </View>
            )}
        </View>
    );
}

const QRCodeComponent: React.FC<QRCodeProps> = ({ value }) => (
    <View style={styles.qrCodeContainer}>
        <QRCode value={value} size={200} color="#01000c" backgroundColor="#ffffff" />
        <Text style={{ marginTop: 25, color: "#a6a5a7" }}>{value}</Text>
    </View>
);

const styles = StyleSheet.create({
    qrCodeContainer: {
        padding: 25,
        paddingBottom: 20,
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

export default QRWithText;
