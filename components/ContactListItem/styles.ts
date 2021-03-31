import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        margin: 10,
    },
    rightContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
    },
    topContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginHorizontal: 10
    },
    name: {
        color: 'black',
        fontWeight: "bold",
        fontSize: 20
    }
});

export default styles;