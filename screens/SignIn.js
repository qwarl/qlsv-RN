import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const SignIn = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState();
    const LoginButton = () => {
        //     setLogin(
        // if (userName == admin && passource $HOME/.bash_profilesword == admin) 
        // { Alert.alert('Dang nhap thanh cong') }
        //     else { Alert.alert('Dang nhap that bai') };
        // )
        if (userName == '' || password == '') {
            setLogin('Vui long nhap username va password')
        }
        else if (userName == 'admin' && password == 'admin') {
            setLogin('dang nhap thanh cong');
        } else {
            setLogin('sai tai khoan hoac mat khau');

        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text_Login}>Login Screen</Text>
            <TextInput style={styles.inputType} value={userName} placeholder='User name' onChangeText={(usN) => setUserName(usN)} />
            <TextInput style={styles.inputType} value={password} placeholder='Password' onChangeText={(pw) => setPassword(pw)} secureTextEntry={true} />
            <TouchableOpacity onPress={LoginButton} style={styles.css_LoginButton}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.css_SignUpButton}>
                <Text style={styles.SignUpText}>New user? Join here</Text>
            </TouchableOpacity>
            <Text>{login}</Text>
        </View>


    )
}

export default SignIn
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    // inputType: {

    // },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    css_LoginButton: {
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
    loginText: {
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
    css_SignUpButton: {
        marginTop: 15,
    },
    SignUpText: {
        fontSize: 20,
        color: '#6646ee',
    }
})
