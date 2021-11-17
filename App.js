// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './screens/SignIn';
import Flatlist from './screens/Flatlist';
import SignUp from './screens/SignUp';
const Stack=createStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      {/* <SignIn /> */}
      <Flatlist />
      {/* <StatusBar style="auto" /> */}
    </View>


    //navigation screen
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='SignIn' screenOptions={{ headerShown: false }}>
    //     <Stack.Screen name='Signin' component={SignIn} options={{ title: 'Login' }} />
    //     <Stack.Screen name='Student' component={Flatlist} options={{ title: 'Student' }} />
    //     <Stack.Screen name='Signup' component={SignUp} options={{ title: 'Register' }} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   // justifyContent: 'center',
  // },
});
