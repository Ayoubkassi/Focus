import * as React from 'react';
import { Text , View , StyleSheet } from 'react-native';
import Constants from 'expo-Constants';


export default function App(){

  return (
    <View style={styles.container}>
      <Text>Hello Ayoub</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    padding : 50,
  }
})
