import React from "react";
import {View, Text, Image, TouchableWithoutFeedback} from "react-native";
import {ChatRoom} from "../../types";
import styles from "./styles";
import moment from "moment";
import {useNavigation} from '@react-navigation/native';

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {
    const {chatRoom} = props;

    const navigation = useNavigation();

    let user = chatRoom.users[1];

    const onClick = () => {
        navigation.navigate('ChatRoom', {
            id: chatRoom.id,
            name: user.name
        });
    }

    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
                <Image source={{uri: user.imageUri}} style={styles.avatar}/>
                <View style={styles.rightContainer}>
                    <View style={styles.topContainer}>
                        <Text style={styles.name}>{user.name}</Text>
                        <Text style={styles.createAt}>
                            {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
                        </Text>
                    </View>
                    <Text style={styles.content}>{chatRoom.lastMessage.content}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
};

export default ChatListItem;