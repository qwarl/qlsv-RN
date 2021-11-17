import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import SignIn from './SignIn';

const SignUp = ({ navigation }) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const RegisterButton = () => {

        if (userName == '' || password == '') {
            ToastAndroid.show('Vui lòng không để trống username và password', ToastAndroid.SHORT);
        }
        else if (userName == 'admin' && password == 'admin') {
            navigation.navigate('Student');
            ToastAndroid.show('Đăng nhập thành công', ToastAndroid.SHORT);
        } else {
            ToastAndroid.show('Sai tài khoản hoặc mật khẩu', ToastAndroid.SHORT);
        }
    }
    const SignInButton = () => {
        navigation.navigate('Signin');
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text_Login}>Register Screen</Text>
            <TextInput style={styles.inputType} value={userName} placeholder='User name' onChangeText={(usN) => setUserName(usN)} />
            <TextInput style={styles.inputType} value={password} placeholder='Password' onChangeText={(pw) => setPassword(pw)} secureTextEntry={true} />
            <TouchableOpacity onPress={RegisterButton} style={styles.css_RegisterButton}>
                <Text style={styles.registerText}>REGISTER</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={SignInButton} style={styles.css_SignInButton}>
                <Text style={styles.SignInText}>Already have an account? Login</Text>
            </TouchableOpacity>
        </View>


    )
}

export default SignUp
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    css_RegisterButton: {
        marginTop: 10,
        width: width / 2,
        height: height / 15,
        backgroundColor: '#6495ed',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 28,
        color: '#ffffff'
    },
    registerText: {
        color: 'white',
        fontSize: 20
    },
    inputType: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: width / 1.5,
        height: height / 15,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1,
    },
    text_Login: {
        fontSize: 24,
        marginBottom: 10,
    },
    css_SignInButton: {
        marginTop: 15,
    },
    SignInText: {
        fontSize: 20,
        color: '#6646ee',
    }
})
