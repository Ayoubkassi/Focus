import React , {useState , useEffect , useRef } from 'react';
import { Text , View , StyleSheet } from 'react-native';
import { fontSizes , paddingSizes , colors } from '../utils/sizes';

const minutesToMillSc = (minutes) => minutes * 60 * 1000;
const formatTime = (num) => {
  if(num < 10)
    return `0${num}`
  return num;
}

export const Counter = ({
  minutes ,
  isPaused = true ,
  onProgress
})=>{

  const interval = useRef(null);
  const [millis , setMillis ] = useState(minutesToMillSc(minutes));
  const minute = Math.floor(millis / 60 / 1000 ) % 60 ;
  const seconds = Math.floor(millis  / 1000) % 60 ;
  

  const CountDown = () => {
    setMillis((time)=>{
      if(time === 0){
        //do something;
        return time;
      }
      else {
        const timeLeft = time - 1000;
        //REPORT PROGRESS;
        onProgress(timeLeft / millis);
          
        return timeLeft;
      }
    })
  }

  useEffect(()=>{
    setMillis(minutesToMillSc(minutes))
  },[minutes])

  useEffect(() => {
    if(isPaused){
      if(interval.current) clearInterval(interval.current);
        return;
    }
    interval.current = setInterval(CountDown , 1000);
     return () => clearInterval(interval.current);
}, [isPaused]);

  return (
    <View style={styles.container}>
    <Text style={styles.text}>{formatTime(minute)} : {formatTime(seconds)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
   
    justifyContent : 'center',
    alignItems : 'center',
    width : 240,
    height : 240,
    marginLeft : 'auto',
    marginRight : 'auto',
    borderWidth : 5,
    borderColor : colors.color2,
    flexDirection: 'column',
    

    borderRadius : 200,
    //marginLeft : 45,
    marginTop : 180,
    
  },
  text : {
    fontSize : fontSizes.xxl,
    fontWeight : 'bold',
    color : '#ffffff',
    //padding : paddingSizes.lg,
    //backgroundColor : colors.color2,
    textAlign : 'center',
    //marginTop : paddingSizes.xl,
    //marginBottom : paddingSizes.xxxl,
    //paddingTop : 90,
    //rgba(94,132,226,0.3)
  }
})