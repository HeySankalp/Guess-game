
import { View, Text, Pressable, StyleSheet } from "react-native";

function Custombutton({ children, onPress }) {
    return (
        <View style={styles.btnOutCon}>
            <Pressable 
            onPress={onPress}
            android_ripple={{color:'#2e74ec'}} 
            style={styles.btnInCon}>
                <Text style={styles.btnText}>{children}</Text>
            </Pressable>
        </View>
    )
}
export default Custombutton;

const styles = StyleSheet.create({
    btnOutCon:{
        margin: 4,
        borderRadius: 25,
        backgroundColor: '#1162ee',
        overflow:"hidden",
        elevation:4
      
    },
    btnInCon: {
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    btnText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})