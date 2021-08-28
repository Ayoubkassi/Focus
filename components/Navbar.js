import React from 'react';
import { Text , View , StyleSheet , Image } from 'react-native';


export const Navbar = () => {
  return (
    <View style={styles.container}>
        <Image
        style={styles.image}
        source={require('../menu.png')}
      />
        <Text style={styles.text}>TIMER</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    flexDirection : 'row',
    alignItems : "center",
    padding : 10,
    
  },
  image : {
    width : 40,
    height : 40,
  },
  text :{
    color : 'white',
    fontWeight : 'bold',
    marginLeft : 120,
    letterSpacing : 6
  }
})