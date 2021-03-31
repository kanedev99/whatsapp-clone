import * as React from 'react';
import { FlatList, View } from 'react-native';
import ContactListItem from "../components/ContactListItem";
import NewMessageButton from '../components/NewMessageButton';
import users from '../data/Users';

export default function ContactsScreen() {
    return (
        <View>
            <FlatList
                style={{ width: '100%' }}
                data={users}
                renderItem={({ item }) => <ContactListItem user={item} />}
            />
            <NewMessageButton />
        </View>
    );
}
