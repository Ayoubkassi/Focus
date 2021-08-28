import React , { useState } from 'react';
import { Text , View , StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import { paddingSizes , fontSizes } from '../../utils/sizes';


export const Focus = ({addSubject}) => {

  const [subject , setSubjcet] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>What would u like to foucs on ?</Text>
      <View style={styles.main}>
        <TextInput onSubmitEditing={({nativeEvent})=> setSubjcet(nativeEvent.text)} style={styles.input}/>
        <RoundedButton text='+' onPress={()=> addSubject(subject)}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    padding : paddingSizes.md,
  },
  text : {
    color : '#ffffff',
    fontSize : '19px',
    //textAlign : "center",
    marginBottom : 18,
    fontWeight : 'bold',
    marginTop : 10,
  },
  input : {
    outline : 'none',
    border : 'none',
    flex : 1,
    marginRight : 10

  },
  main : {
    flexDirection : 'row',
    alignItems : 'center',
  }
})
