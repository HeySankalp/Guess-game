import { View, StyleSheet } from "react-native"


function Card({children, style}) {
    return(
        <View style={[styles.cardCon,style]}>{children}</View>
    )
}

export default Card

const styles = StyleSheet.create({
    cardCon: {
        alignItems: 'center',
        marginHorizontal: 5,
        padding: 16,
        marginTop: 50,
        backgroundColor: '#0443b0',
        borderRadius: 8,
        elevation: 4
    }
})