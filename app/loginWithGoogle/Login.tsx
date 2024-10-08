import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Login = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Đăng Nhập với Google</Text>
            <TouchableOpacity style={styles.loginButton} onPress={() => { /* Add your login logic here */ }}>
                <Image source={require('../../assets/images/google-icon.png')} style={styles.icon} />
                <Text style={styles.loginButtonText}>Đăng Nhập</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 24,
    },
    loginButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'black',
        borderRadius: 5,
    },
    loginButtonText: {
        color: 'white',
        fontSize: 18,
        marginLeft: 10,
    },
    icon: {
        width: 24,
        height: 24,
    },
});

export default Login;