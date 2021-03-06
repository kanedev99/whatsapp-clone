import * as React from 'react';
import { FlatList, View } from 'react-native';
import ChatListItem from "../components/ChatListItem";
import NewMessageButton from '../components/NewMessageButton';
import chatRoom from '../data/ChatRooms';

export default function ChatsScreen() {
    return (
        <View>
            <FlatList
                style={{ width: '100%' }}
                data={chatRoom}
                renderItem={({ item }) => <ChatListItem chatRoom={item} />}
            />
            <NewMessageButton />
        </View>
    );
}
