import * as React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import ChatListItem from "../components/ChatListItem";
import chatRoom from '../data/ChatRooms';

export default function ChatsScreen() {
    return (
        <FlatList
            style={{width: '100%'}}
            data={chatRoom}
            renderItem={({item}) => <ChatListItem chatRoom={item}/>}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
