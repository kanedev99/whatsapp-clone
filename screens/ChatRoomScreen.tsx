import React from 'react';
import {FlatList, ImageBackground} from 'react-native';
import chatRoomData from '../data/Chats';
import ChatMessage from "../components/ChatMessage";
import BG from '../assets/images/BG.png';

const ChatRoomScreen = () => {
    return (
        <ImageBackground style={{width: '100%'}} source={BG}>
            <FlatList
                data={chatRoomData.messages}
                renderItem={({item}) => <ChatMessage message={item}/>}
                inverted={true}
            />
        </ImageBackground>
    );
}

export default ChatRoomScreen;