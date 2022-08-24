import { StyleSheet, ImageBackground, SafeAreaView, StatusBar } from 'react-native';
import Startgame from './screens/startgame';
import Gameplay from './screens/gameplay';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import Endgame from './screens/endgame';


export default function App() {



  const [userNum, setUserNum] = useState()
  const [gameIsOver, setGameIsOver] = useState(false);
  const [roundsTake, setRoundsTake] = useState(0);

  function pickedNumber(number) {
    setUserNum(number)
  }

  function gameOver(roundsTaken) {
    setGameIsOver(true);
    setRoundsTake(roundsTaken);
  }

  function startNewGame(){
    setUserNum(null);
    setGameIsOver(false);
    setRoundsTake(0);
  }


  let screen = <Startgame pickedNumber={pickedNumber} />

  if (userNum) {
    screen = <Gameplay gameOver={gameOver}  userNum={userNum} />
  }

  if(gameIsOver){
    screen = <Endgame userNum={userNum} roundsTake={roundsTake} startNewGame={startNewGame}/>
  }

  return (
    <>
    <StatusBar backgroundColor={'#7e3d8e'} barStyle={'light-content'} />
    <LinearGradient colors={['#c35add', '#c8ca49']} style={styles.root}>
      <ImageBackground style={styles.root} imageStyle={styles.imgStyle} source={require('./assets/images/dice.jpg')} resizeMode='cover'>
        <SafeAreaView style={styles.root}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  imgStyle: {
    opacity: 0.17
  }
});
