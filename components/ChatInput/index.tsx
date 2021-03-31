import React from "react";
import {View, Text, TextInput} from "react-native";
import {Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons} from "@expo/vector-icons";
import styles from "./styles";

const ChatInput = () => {
    return(
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name="laugh-beam" size={28} color="grey" />
                <TextInput  style={styles.textInput}/>
                <Entypo name="attachment" size={28} color="grey"  style={styles.icon}/>
                <Fontisto name="camera" size={28} color="grey"  style={styles.icon}/>
            </View>
            <View  style={styles.microIcon}>
                <MaterialCommunityIcons name="microphone" size={28} color="white" />
            </View>
        </View>
    );
}

export default ChatInput;