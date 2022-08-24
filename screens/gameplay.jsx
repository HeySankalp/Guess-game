import { useState, useEffect } from "react";
import { View, StyleSheet, Text, Alert, FlatList } from "react-native"
import Card from "../components/card";
import Custombutton from "../components/custombutton";
import Guessnumber from "../components/guessNumber";
import Loglistitem from "../components/logListItem";
import Title from "../components/title";

// utility function for finding random number
function randomBetween(min, max, exclude) {
    const randomNum = Math.floor(Math.random() * (max - min)) + min;
    if (randomNum === exclude) {
        return randomBetween(min, max, exclude);
    } else {
        return randomNum;
    }
}

let minBound = 1;
let maxBound = 100;

function Gameplay({ userNum, gameOver }) {

    useEffect(() => {
        minBound = 1;
        maxBound = 100;
    }, [])

   
    const initialGuess = randomBetween(1, 100, userNum)
    const [randomGuess, setRandomGuess] = useState(initialGuess)
    const [guessRounds, setGuessRounds] = useState([initialGuess])
    
    useEffect(() => {
        if (randomGuess === userNum) {
            setTimeout(() => {
                gameOver(guessRounds.length);
            }, 1000);
        }
    }, [randomGuess, userNum, gameOver])

    function nextGuesshandeler(direction) {

        if ((direction == 'lower' && randomGuess < userNum)
            || (direction == 'higher' && randomGuess > userNum)) {
            Alert.alert('Don,t lie!', 'Please play a fair game...', [{ text: 'Sorry!', style: 'cancel' }]);
            return;
        }

        if (direction == 'lower') {
            maxBound = randomGuess;
        } else {
            minBound = randomGuess + 1;
        }

        const newRandomNum = randomBetween(minBound, maxBound, randomGuess);
        setRandomGuess(newRandomNum)
        setGuessRounds(prevGuessRounds => [newRandomNum, ...prevGuessRounds]);

    }
    const totalGuessRounds = guessRounds.length;

    return (
        <View style={styles.gamePlayCon}>
            <Title>Opponent's Guess</Title>
            <Guessnumber>{randomGuess}</Guessnumber>
            <Card style={styles.card}>
                <Text style={styles.instructionTitle}>Higher or Lower?</Text>
                <View style={styles.btnCon}>
                    <View style={styles.btn}>
                        <Custombutton onPress={nextGuesshandeler.bind(this, 'lower')}>Lower</Custombutton>
                    </View>
                    <View style={styles.btn}>
                        <Custombutton onPress={nextGuesshandeler.bind(this, 'higher')}>Higher</Custombutton>
                    </View>
                </View>
            </Card>
            <Text style={styles.logTitle}>Guess Logs</Text>
            <View style={styles.flatListCon}>
                <FlatList
                    data={guessRounds}
                    renderItem={(itemData) => {
                        return <Loglistitem logGuess={itemData.item} logIndex={totalGuessRounds - itemData.index} />
                    }}
                    keyExtractor={key => key}
                />
            </View>
        </View>
    )
}
export default Gameplay

const styles = StyleSheet.create({
    gamePlayCon: {
        marginTop: 50,
        flex: 1,
        padding: 30,
        paddingBottom: 10
        // alignItems: 'center'
    },
    card: {
        paddingHorizontal: 7
    },
    instructionTitle: {
        fontSize: 20,
        color: '#f3c931',
        marginVertical: 10
    },
    btnCon: {
        marginVertical: 15,
        flexDirection: 'row'
    },
    btn: {
        flex: 1
    },
    logTitle: {
        marginHorizontal: 70,
        marginVertical: 10,
        paddingBottom: 3,
        fontSize: 25,
        textAlign: 'center',
        borderBottomWidth: 3,
        borderBottomColor: '#ecc32e',
        color: 'white'
    },
    flatListCon: {
        flex: 1
    }
})