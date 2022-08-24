import { StyleSheet, Text, View } from "react-native";

function Loglistitem({logIndex, logGuess}) {

    return (
        <View style={styles.listContainer} >
            <Text style={styles.listItem}>#{logIndex}</Text>
            <Text  style={styles.listItem}>Computer guessed - {logGuess}</Text>
        </View>
    )
    
}

const styles = StyleSheet.create({
    listContainer: {
        backgroundColor:'#1056cf',
        borderWidth: 1,
        borderRadius:23,
        borderColor: 'white',
        paddingVertical: 8,
        paddingHorizontal: 10,
        margin: 5,
        flexDirection:'row',
        justifyContent:'space-between',
        elevation:3

    },
    listItem: {
        fontSize: 18,
        color: 'yellow',
        textAlign: 'center',
        marginHorizontal:10
    }

})

export default Loglistitem