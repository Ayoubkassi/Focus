import  React , {useState} from 'react';
import { Text, View, StyleSheet , Platform } from 'react-native';
import Constants from 'expo-constants';
import { Focus } from './features/Focus/Focus';
import { colors , paddingSizes } from './utils/sizes';
import { Timer } from './features/TIMER/Timer';




export default function App() {

    const [focusSubject , setFocusSubject ] = useState('Fitness');


  return (
    <View style={styles.container}>
      { focusSubject ? ( <Timer focusSubject={focusSubject} /> )
          : (
            <Focus addSubject={setFocusSubject} />
          )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : colors.color1,
    paddingTop :Platform.OS === 'ios' ? paddingSizes.sm : paddingSizes.md,
    
  },
  text : {
    color : '#ffffff',
    fontSize : '21px',
    textAlign : "center",
  }
});
