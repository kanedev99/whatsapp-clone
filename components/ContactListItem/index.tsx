import React from "react";
import {View, Text, Image, TouchableWithoutFeedback} from "react-native";
import { User } from "../../types";
import styles from "./styles";
import {useNavigation} from '@react-navigation/native';

export type ContactListItemProps = {
    user: User;
}

const ContactListItem = (props: ContactListItemProps) => {
    const {user} = props;

    const navigation = useNavigation();

    const onClick = () => {
        navigation.navigate("ChatRoom", {
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
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
};

export default ContactListItem;