import React from 'react';
import { TouchableOpacity ,Text , View , StyleSheet } from 'react-native';


export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 50,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles(size).radius , style]} onPress={props.onPress}>
      <Text style={[styles(size).text, textStyle]}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = (size) =>  StyleSheet.create({
  radius : {
    borderRadius : 100,
    width : size ,
    height : size,
    justifyContent : "center",
    alignItems : "center",
    borderColor : 'white',
    borderWidth : 2,
  },

  text : {
    color : '#ffffff',
    fontSize :  size/3,
    textAlign : 'center',
    fontWeight : 'bold',
  }
})