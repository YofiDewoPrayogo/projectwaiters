import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, Splash, Profile, History, Boarding, Login, Tambah, Setting } from '../pages'
import { IconHome, IconProfile, IconKeranjang, IconPlus, IconSearch } from '../assets'
import { Alert } from 'react-native/Libraries/Alert/Alert'
import axios from 'axios';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
state = {
    data: ''
}
const CustomTabBarButton = ({ children, onPress }) => (
    <TouchableOpacity
        style={{
            top: -20,
            justifyContent: 'center',
            alignItems: 'center',
            ...styles.shadow
        }}
        onPress={onPress}
    >
        <View style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#E85353'
        }}>
            {children}
        </View>
    </TouchableOpacity>
);

const MainApp = ({ route, navigate }) => {


    var data = {
        "username": route.params.email,
        "password": route.params.password
    }
    fetch('http://10.126.207.196:3000/login', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(response => response.json())
        .then(json => {
            console.log(json);
        })
        .catch(error => {
            console.error(error);
        });


    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                bottom: 25,
                left: 10,
                right: 10,
                elevation: 0,
                backgroundColor: '#EBE7E7',
                borderRadius: 22,
                height: 74,
                ...styles.shadow
            }
        }}>
            <Tab.Screen name="Home" component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            top: 5
                        }}>
                            <Image
                                source={IconHome}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#E32F45' : '#748C94'
                                }}
                            />
                            <Text style={{
                                fontWeight: 'bold',
                                color: focused ? '#000000' : '#748C94',
                                fontSize: 12
                            }}>Home</Text>
                        </View>
                    )
                }} />
            <Tab.Screen name="Tambah" component={Tambah} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: 5
                    }}>
                        <Image
                            source={IconSearch}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#E32F45' : '#748C94'
                            }}
                        />
                        <Text style={{
                            fontWeight: 'bold',
                            color: focused ? '#000000' : '#748C94',
                            fontSize: 12
                        }}>Search</Text>
                    </View>
                )
            }} />
            <Tab.Screen name="Setting" component={Setting} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={IconPlus}
                        resizeMode='contain'
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: '#FFFFFF'
                        }}
                    />
                ),
                tabBarButton: (props) => (
                    <CustomTabBarButton {...props} />
                )
            }} />
            <Tab.Screen name="History" component={History} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: 5
                    }}>
                        <Image
                            source={IconKeranjang}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#E32F45' : '#748C94'
                            }}
                        />
                        <Text style={{
                            fontWeight: 'bold',
                            color: focused ? '#000000' : '#748C94',
                            fontSize: 12
                        }}>History</Text>
                    </View>
                )
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: 5
                    }}>
                        <Image
                            source={IconProfile}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#E32F45' : '#748C94'
                            }}
                        />
                        <Text style={{
                            fontWeight: 'bold',
                            color: focused ? '#000000' : '#748C94',
                            fontSize: 12
                        }}>Profile</Text>
                    </View>
                )
            }} />
        </Tab.Navigator>
    )
}


const ScreenLogin = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

const Screen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Boarding" component={Boarding} options={{ headerShown: false }} />
            <Stack.Screen name="ScreenLogin" component={ScreenLogin} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName='Splash'>
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="Screen" component={Screen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
    iconhome: {

    }
})