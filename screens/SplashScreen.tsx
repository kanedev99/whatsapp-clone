import * as React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons'; 
import Colors from '../constants/Colors';

const SplashScreen = (props: any) => {

    const onGetStarted = () => {
        props.navigation.navigate("Signin");
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../assets/images/logo.png')}
                    style={styles.logo} />
                <Text style={styles.whatsapp}>WhatsApp</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.title}>Stay connected with everyone!</Text>
                <Text style={styles.text}>Sign in with accoount</Text>
                <View style={styles.btnStart}>
                    <TouchableOpacity onPress={onGetStarted} activeOpacity={0.5}>
                        <LinearGradient colors={['#3CB371', '#0C6157']} style={styles.linearGradient}>
                            <Text>Get Started</Text>
                            <AntDesign name="right" size={12} color="black" style={styles.startIcon}/>
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
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 150,
        height: 150
    },
    whatsapp: {
        color: "white",
        fontSize: 30,
        marginTop: 8
    },
    footer: {
        flex: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: "white"
    },
    title: {
        fontSize: 30,
        marginLeft: 16,
        marginTop: 16
    },
    text: {
        marginLeft: 16
    },
    btnStart: {
        flexWrap: "wrap",
        alignItems: "flex-end",
        alignContent: "flex-end",
        margin: 8
    },
    linearGradient: {
        flexDirection: "row",
        paddingHorizontal: 32,
        paddingVertical: 12,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    startIcon: {
        marginLeft: 4
    }
});

export default SplashScreen;