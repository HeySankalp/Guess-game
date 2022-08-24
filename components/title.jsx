import { StyleSheet, Text } from "react-native";

function Title({ children, style }) {
    return (
        <Text style={[styles.title,style]}>{children}</Text>
    )
}

export default Title

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: "700",
        color: 'white',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 3,
        padding: 15
    }
})