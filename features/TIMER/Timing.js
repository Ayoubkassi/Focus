import React from 'react';
import { View , Text , StyleSheet } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';


export const Timing = ({onChangeTime}) => {
  return (
    <View style={styles.container}>
      <RoundedButton text='10' size={75} onPress={()=> onChangeTime(10)} />
      <RoundedButton text='15' size={75} onPress={()=> onChangeTime(15)} />
      <RoundedButton text='20' size={75} onPress={()=> onChangeTime(20)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignItems : 'center',
    flexDirection : 'row',
    justifyContent : "space-between",
    width : '85vw'
  }
})