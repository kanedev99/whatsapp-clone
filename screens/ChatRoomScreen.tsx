import React from 'react';
import {FlatList, ImageBackground, View} from 'react-native';
import chatRoomData from '../data/Chats';
import ChatMessage from "../components/ChatMessage";
import BG from '../assets/images/BG.png';
import ChatInput from "../components/ChatInput";

const ChatRoomScreen = () => {
    return (
        <ImageBackground style={{width: '100%', height: '100%'}} source={BG}>
            <FlatList
                data={chatRoomData.messages}
                renderItem={({item}) => <ChatMessage message={item}/>}
                inverted={true}
            />
            <ChatInput/>
        </ImageBackground>
    );
}

export default ChatRoomScreen;