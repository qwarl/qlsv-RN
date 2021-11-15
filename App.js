// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import Checklogin from './screens/Checklogin';
import Flatlist from './screens/Flatlist';
export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* <Checklogin/> */}
      <Flatlist />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
