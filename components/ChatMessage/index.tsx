import React from "react";
import {Text, View } from 'react-native';
import {Message} from '../../types';
import moment from "moment";
import styles from "./styles";

export type ChatMessageProps = {
    message: Message
}

const ChatMessage = (props: ChatMessageProps) => {
    const {message} = props
    const isMyMessage = () => {
        return message.user.id === 'u1';
    }
    return (
        <View style={[
            styles.messageBox, {
                backgroundColor: isMyMessage() ? '#DCF8C5' : 'white',
                marginLeft: isMyMessage() ? 50 : 10,
                marginRight: isMyMessage() ? 10 : 50,
            }
        ]}>
            {!isMyMessage() && <Text style={styles.name}>{message.user.name}</Text>}
            <Text style={styles.message}>{message.content}</Text>
            <Text style={styles.createdAt}>{moment(message.createdAt).fromNow()}</Text>
        </View>
    );
}

export default ChatMessage;