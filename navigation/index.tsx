import {
    AntDesign,
    FontAwesome5,
    MaterialCommunityIcons,
    MaterialIcons
} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { View } from 'react-native';
import Colors from '../constants/Colors';
import ChatRoomScreen from "../screens/ChatRoomScreen";
import ChatsScreen from '../screens/ChatsScreen';
import ContactsScreen from '../screens/ContactsScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SplashScreen from '../screens/SplashScreen';
import { AuthParamList, RootStackParamList } from '../types';
import MainTabNavigator from './MainTabNavigator';


export default function Navigation() {
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    );
}

// const Stack = createStackNavigator<RootStackParamList>();
const Stack = createStackNavigator<AuthParamList>();

const AuthNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen
                name="Splash"
                component={SplashScreen} />
            <Stack.Screen
                name="Signin"
                component={SignInScreen} />
            <Stack.Screen
                name="Signup"
                component={SignUpScreen} />
        </Stack.Navigator>
    );
};

function RootNavigator() {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: Colors.light.tint
            },
            headerTintColor: Colors.light.background,
            headerTitleAlign: "left",
            headerTitleStyle: {
                fontWeight: "bold"
            }
        }}>
            <Stack.Screen
                name="Root"
                component={MainTabNavigator}
                options={{
                    title: "WhatsApp",
                    headerRight: () => (
                        <View style={{
                            flexDirection: "row",
                            width: 70,
                            justifyContent: "space-between",
                            marginRight: 10
                        }}>
                            <AntDesign name="search1" size={24} color="white" />
                            <MaterialCommunityIcons name="dots-vertical" size={24} color="white" />
                        </View>
                    )
                }}
            />
            <Stack.Screen
                name="ChatRoom"
                component={ChatRoomScreen}
                options={({ route }) => ({
                    // title: route.params.title,
                    headerRight: () => (
                        <View style={{
                            flexDirection: "row",
                            width: 120,
                            justifyContent: "space-around",
                            marginRight: 10
                        }}>
                            <MaterialIcons name="call" size={24} color="white" />
                            <FontAwesome5 name="video" size={24} color="white" />
                            <MaterialCommunityIcons name="dots-vertical" size={24} color="white" />
                        </View>
                    )
                })}
            />
            <Stack.Screen
                name="Contacts"
                component={ContactsScreen}
            />
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
        </Stack.Navigator>
    );
}