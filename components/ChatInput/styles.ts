import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginBottom: 5
    },
    mainContainer: {
        flexDirection: "row",
        backgroundColor: "white",
        flex: 1,
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 25,
    },
    icon: {
        marginHorizontal: 5
    },
    textInput: {
        flex: 1,
        marginHorizontal: 8
    },
    microIcon: {
        backgroundColor: Colors.light.tint,
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        marginRight: 5
    }
})

export default styles;