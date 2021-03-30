import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        margin: 10,
        width: '100%'
    },
    rightContainer: {
        flexDirection: "column",
        justifyContent: "space-around",
        width: '100%'
    },
    topContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: '75%'
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
    },
    content: {
        color: 'grey',
        fontSize: 18
    },
    createAt: {
        position: "absolute",
        color: 'grey',
        fontSize: 14,
        right: 0
    }
});

export default styles;