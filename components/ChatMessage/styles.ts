import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    messageBox: {
        backgroundColor: 'white',
        padding: 10,
        marginVertical: 10,
        borderRadius: 10
    },
    name: {
        color: 'black',
        fontWeight: "bold",
        fontSize: 16
    },
    message: {
        color: 'black'
    },
    createdAt: {
        color: 'grey',
        alignSelf: "flex-end"
    }
})

export default styles;