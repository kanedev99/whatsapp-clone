import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { Alert, TouchableOpacity, View } from 'react-native';
import styles from './styles';


const NewMessageButton = () => {

  const navigation = useNavigation()

  const onClick = () => {
    navigation.navigate("Contacts");
  };

  return (
    <TouchableOpacity onPress={onClick} style={styles.container}>
        <MaterialCommunityIcons name='message-reply-text' size={28} color="white" />
    </TouchableOpacity>

  );
};

export default NewMessageButton;
