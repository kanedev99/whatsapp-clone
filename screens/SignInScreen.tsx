import React, { useState } from 'react';
import {
    StyleSheet, Text, View, TextInput, TouchableOpacity
} from 'react-native';
import Colors from '../constants/Colors';
import { MaterialIcons, AntDesign, FontAwesome5, Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function SignInScreen() {
    const onSignIn = () => {

    }

    const [data, setData] = useState({
        email: "",
        password: "",
        emailChange: false,
        securePassword: true
    });

    const onEmailChange = (value: any) => {
        if (value.trim().length > 4) {
            setData({
                ...data,
                email: value,
                emailChange: true
            })
        } else {
            setData({
                ...data,
                email: value,
                emailChange: false
            })
        }
    };

    const onVisiblePassword = () => {
        setData({
            ...data,
            securePassword: !data.securePassword
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.welcome}>Welcome!</Text>
            </View>
            <View style={styles.footer}>
                <Text>Email</Text>
                <View style={styles.emailContainer}>
                    <MaterialIcons name="email" size={20} color="black" style={styles.icon} />
                    <TextInput
                        onChangeText={onEmailChange}
                        placeholder="Your email"
                        style={styles.emailInput}
                        textContentType="emailAddress"
                        autoCapitalize="none" />
                    {data.emailChange ? <AntDesign name="checkcircleo" size={20} color="black" style={styles.icon} /> : null}
                </View>
                <Text style={styles.password}>Password</Text>
                <View style={styles.pwContainer}>
                    <FontAwesome5 name="key" size={20} color="black" style={styles.icon} />
                    <TextInput
                        secureTextEntry={data.securePassword? false: true}
                        placeholder="Password"
                        style={styles.pwInput}
                        textContentType="password"
                        autoCapitalize="none" />
                    <TouchableOpacity activeOpacity={0.5} onPress={onVisiblePassword}>
                        {data.securePassword? <Feather name="eye" size={20} color="black" style={styles.icon} /> : <Feather name="eye-off" size={20} color="black" style={styles.icon} />}
                    </TouchableOpacity>
                </View>
                <View style={styles.btnSignIn}>
                    <TouchableOpacity
                        onPress={onSignIn}
                        activeOpacity={0.5}>
                        <LinearGradient
                            colors={['#3CB371', '#0C6157']}
                            style={styles.linearGradient}>
                            <Text>Sign In</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.tint
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    footer: {
        flex: 2,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: "white",
        padding: 16,
        flexDirection: "column"
    },
    welcome: {
        color: "white",
        fontSize: 25,
        marginLeft: 16
    },
    emailContainer: {
        flexDirection: "row",
        borderBottomWidth: 0.5
    },
    emailInput: {
        flex: 1,
        marginHorizontal: 8,
        fontSize: 16
    },
    pwContainer: {
        flexDirection: "row",
        borderBottomWidth: 0.5,
        paddingBottom: 4
    },
    password: {
        marginTop: 16
    },
    btnSignIn: {
        marginTop: 32,
        marginHorizontal: 16
    },
    pwInput: {
        flex: 1,
        marginHorizontal: 8,
        fontSize: 16
    },
    linearGradient: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        paddingVertical: 16
    },
    icon: {
        marginTop: 4
    }
});