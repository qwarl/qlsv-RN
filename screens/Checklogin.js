import React, { useState } from 'react'
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, TouchableOpacityBase, View } from 'react-native'

const Checklogin = () => {
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const [login, setLogin] = useState();
    const checklogin = () => {
        //     setLogin(
        // if (userName == admin && passource $HOME/.bash_profilesword == admin) 
        // { Alert.alert('Dang nhap thanh cong') }
        //     else { Alert.alert('Dang nhap that bai') };
        // )
        if (userName == 'admin' && password == 'admin') {
            setLogin('dang nhap thanh cong');
        } else {
            setLogin('sai tai khoan hoac mat khau');
            
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text_Login}>LOGIN</Text>
            <TextInput style={styles.inputType}  placeholder='User name' onChangeText={(usN) => setUserName(usN)} />
            <TextInput style={styles.inputType}  placeholder='Password' onChangeText={(pw) => setPassword(pw)} secureTextEntry={true}/>
            <TouchableOpacity  onPress={checklogin}  >
                <View style={styles.loginButton}>
                    <Text style={styles.loginText}>LOGIN</Text>
                </View>
            </TouchableOpacity>
            <Text>{login}</Text>
        </View>
        
        
    )
}

export default Checklogin

const styles = StyleSheet.create({
    // inputType: {

    // },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    loginButton: {
        backgroundColor: 'grey',
        justifyContent:'center',
        
    },
    loginText: {
        color: 'white',
        fontSize: 20
    },
    text_Login:{
        fontSize:24,
        marginBottom:10
    }
})
