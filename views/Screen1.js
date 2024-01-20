// Screen1.js
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import Card from '../components/Card';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Camera } from 'expo-camera';
const Screen1 = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [isScannerOpen, setScannerOpen] = useState(false);
    const navigation = useNavigation();

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleCardClick = (screenName) => {
        navigation.navigate(screenName);
    };

    const handleScanButtonClick = () => {
        setScannerOpen(true);
    };

    const handleScannerClose = () => {
        setScannerOpen(false);
    };

    const handleBarCodeScanned = ({ data }) => {
        Alert.alert(
            'Scanned QR Code',
            data,
            [
                { text: 'OK', onPress: () => handleScannerClose() },
            ],
            { cancelable: false }
        );
        handleScannerClose();
    }; return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Card iconName="line-scan" text="Scan Face" screenName="HomeScreen" fullWidth={true}/>
            </View>
            <View style={styles.row}>
                <Card iconName="account-details" text="Attendance" screenName="HomeScreen" />
                <Card iconName="account-check" text="Check-in/Out" screenName="SettingsScreen" />
            </View>
            <View style={styles.row}>
                <Card iconName="account-plus" text="Add Guest" screenName="ProfileScreen" />
                <Card iconName="account" text="Guest Visitor" screenName="NotificationsScreen" />
            </View>
            <TouchableOpacity onPress={handleScanButtonClick} style={styles.scanButton}>
                <Icon name="qrcode-scan" size={30} color="white" />
                <Text style={styles.scanButtonText}>Scan</Text>
            </TouchableOpacity>

            {isScannerOpen && hasPermission && (
                <View style={styles.scannerContainer}>
                    <Camera
                        onBarCodeScanned={handleBarCodeScanned}
                        style={styles.scanner}
                    />
                    <TouchableOpacity onPress={handleScannerClose} style={styles.closeScannerButton}>
                        <Text style={styles.closeScannerText}>Close Scanner</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 16,
        marginBottom: 16,
    },
    scanButton: {
        backgroundColor: '#007bff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        borderRadius: 8,
        marginTop: 16,
    },
    scanButtonText: {
        color: 'white',
        fontSize: 18,
        marginLeft: 8,
    },
    scannerContainer: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    scanner: {
        width: '80%',
        height: '50%',
        borderRadius: 8,
    },
    closeScannerButton: {
        position: 'absolute',
        bottom: 16,
        backgroundColor: '#007bff',
        padding: 8,
        borderRadius: 4,
    },
    closeScannerText: {
        color: 'white',
    },
});
export default Screen1;
