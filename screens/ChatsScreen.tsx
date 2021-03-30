import * as React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import {View} from '../components/Themed';
import ChatListItem from "../components/ChatListItem";
import chatRoom from '../data/ChatRooms';

export default function ChatsScreen() {
    return (
        <View style={styles.container}>
            <FlatList
                style={{width: '100%'}}
                data={chatRoom}
                renderItem={({item}) => <ChatListItem chatRoom={item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
