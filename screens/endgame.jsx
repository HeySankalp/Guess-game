import { View, Image, StyleSheet, Text } from 'react-native';
import Custombutton from '../components/custombutton';
import Title from '../components/title';


function Endgame({userNum,roundsTake,startNewGame}) {

    return (
        <View style={styles.mainContainer}>
            <Title style={styles.title}>Game Over</Title>
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={require('../assets/images/resultpage.jpg')} />
            </View>
            <Text style={styles.resultSummery}>
                Computer took <Text style={styles.dynamicText}>{roundsTake}</Text> attempts to guess the number <Text style={styles.dynamicText}>{userNum}</Text>
            </Text>
            <View style={styles.newGameBtn}>
            <Custombutton onPress={startNewGame} >New Game</Custombutton>
            </View>
        </View>
    )
}
export default Endgame;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        margin: 20,
        paddingHorizontal:40
    },
    imgContainer: {
        width: 250,
        height: 250,
        borderRadius: 125,
        overflow: 'hidden'
    },
    img: {
        width: '100%',
        height: '100%'
    },
    resultSummery:{
        marginVertical:20,
        marginHorizontal:5,
        color:'white',
        fontSize:25
    },
    dynamicText:{
        fontWeight:'bold',
        color:'#ffeb32'
    },
    newGameBtn:{
        width:150
    }

})