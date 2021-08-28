import React , { useState , useEffect } from 'react';
import { Text , View , StyleSheet } from 'react-native';
import { paddingSizes , colors } from '../../utils/sizes';
import { Counter } from '../../components/CountDown';
import { RoundedButton } from '../../components/RoundedButton';
import { Navbar } from '../../components/Navbar';
import { ProgressBar } from 'react-native-paper';
import { Timing } from './Timing';

export const Timer = ({focusSubject}) => {
  const [isStarted , setIsStarted ] = useState(false);
  const [minutes , setMinutes ] = useState(20);
  const [etat , setEtat] = useState('start');
  const [progress , setProgress ] = useState(0);
  const onProgress = (progress) => {
    setProgress(progress);
  } 
  const toggleStart = () => {
    setIsStarted(isStarted => !isStarted);
    setEtat(etat === 'pause' ? 'start' : 'pause');
  }

  const changeTime = (min) => {
    setMinutes(min);
    setProgress(1);
    setIsStarted(false);
    setEtat('start');
    }

  return (
      <View style={styles.container}>
        <Navbar />
        <Counter isPaused={!isStarted} onProgress={onProgress} minutes={minutes} />
        <View style={{paddingTop : paddingSizes.md }}>
          <Text style={styles.text}>Focusing on : </Text>
          <Text style={styles.title}>{focusSubject}</Text>
        </View>
        <View style={{paddingTop: 20}}>
            <ProgressBar style={{height: 5}} progress={1 - progress} color={colors.border2} />
        </View>
        <View style={styles.buttonWrapper}>
            <Timing onChangeTime={changeTime} />
        </View>
        <View style={styles.buttonWrapper}>
          <RoundedButton style={{backgroundColor : 'white'}} textStyle={{color : '#30224f'}} text={etat} onPress={toggleStart} size={60}/>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
  
  },
  text : {
      color : '#ffffff',
      textAlign : 'center',
      marginBottom : 5,
      marginTop : 30,
  },
  title : {
    color : '#ffffff',
    fontWeight : 'bold',
          textAlign : 'center',

  },
  buttonWrapper : {
    flex : 0.3,
    padding : 15,
    justifyContent : "center",
    alignItems : "center",
    marginTop : 25,
  }

});
