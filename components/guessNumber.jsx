import { StyleSheet, Text, View } from "react-native";

function Guessnumber({ children }) {

    return (
        <View style={styles.guessedCon} >
            <Text style={styles.guessedText} >{children}</Text>
        </View>
    )
}

export default Guessnumber

const styles = StyleSheet.create({
    guessedCon:{
        borderWidth:3,
        borderRadius:10,
        borderColor:'#f3c931',
        padding:5,
        paddingVertical:15,
        marginHorizontal:45,
        marginTop:50
        
    },
    guessedText:{
        fontSize:35,
        fontWeight:'700',
        color:'#f3c931',
        textAlign:'center'
    }
})

