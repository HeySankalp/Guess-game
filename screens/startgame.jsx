import { useState } from "react";
import { View, TextInput, StyleSheet, Alert, Text, useWindowDimensions } from "react-native";
import Card from "../components/card";
import Custombutton from "../components/custombutton";
import Title from "../components/title";

function Startgame({ pickedNumber }) {

    const { height, width } = useWindowDimensions();
    const [enteredValue, setEnteredValue] = useState('');

    function inputChange(enteredNum) {
        setEnteredValue(enteredNum);
    }

    function resetHandeler() {
        setEnteredValue("");
    }

    function confirmHandeler() {
        const chosenValue = parseInt(enteredValue);
        if (isNaN(chosenValue) || chosenValue <= 0 || chosenValue >= 100) {
            Alert.alert('Invalid number!',
                'Enter a number between 0-99.',
                [{ text: 'okay', style: 'cancel', onPress: resetHandeler }])
            return;
        }
        pickedNumber(chosenValue);
    }

    //------------------------dynamic margin--------------------------------
    const marginTopAuto = height < 400 ? 10 : 100;

    return (
        <View style={[styles.mainCon, { marginTop: marginTopAuto }]}>
            <Title>Guess My Number</Title>
            <Card>
                <Text style={styles.inputTitle}>Enter a number</Text>
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    value={enteredValue}
                    onChangeText={inputChange}
                    keyboardType='number-pad' />
                <View style={styles.btnCon}>
                    <View style={styles.btn}>
                        <Custombutton onPress={resetHandeler}>Reset</Custombutton>
                    </View>
                    <View style={styles.btn} >
                        <Custombutton onPress={confirmHandeler} >Confirm</Custombutton>
                    </View>
                </View>
            </Card>
            <View style={styles.footer} >
                <Text style={styles.footerText} >Developer | Sankalp Sachan</Text>
            </View>
        </View>
    )
}
export default Startgame;


const styles = StyleSheet.create({
    mainCon: {
        padding: 20,
        flex: 1,
        alignItems: 'center'
    },

    inputTitle: {
        fontSize: 20,
        color: '#f3c931'
    },
    numberInput: {
        width: 65,
        color: '#f3c931',
        borderBottomWidth: 2,
        borderBottomColor: '#f3c931',
        height: 50,
        fontSize: 31,
        fontWeight: 'bold',
        marginVertical: 10,
        textAlign: 'center'
    },
    btnCon: {
        flexDirection: 'row',
    },
    btn: {
        flex: 1
    },
    footer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'flex-end'
    },
    footerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#85803b'
    }

})