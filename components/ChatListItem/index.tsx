import React from "react";
import {View, Text, Image} from "react-native";
import {ChatRoom} from "../../types";
import styles from "./styles";
import moment from "moment";

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {
    const {chatRoom} = props;
    return (
        <View style={styles.container}>
            <Image source={{uri: chatRoom.users[1].imageUri}} style={styles.avatar}/>
            <View style={styles.rightContainer}>
                <View style={styles.topContainer}>
                    <Text style={styles.name}>{chatRoom.users[1].name}</Text>
                    <Text style={styles.createAt}>
                        {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
                    </Text>
                </View>
                <Text style={styles.content}>{chatRoom.lastMessage.content}</Text>
            </View>

        </View>
    )
};

export default ChatListItem;