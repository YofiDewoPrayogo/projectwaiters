import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, TextInput } from 'react-native'
import { Logo, Background } from '../../assets'

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <ImageBackground source={Background} style={styles.background}>
            <Image source={Logo} style={styles.logo} />
            <Text style={styles.garuda}>Garuda Kasir</Text>
            <Text style={styles.footer}>Login To Your Account</Text>
            <TextInput value={email} style={styles.email} placeholder="Masukkan Email/Username" onChangeText={email => setEmail(email)} />
            <TextInput value={password} style={styles.password} placeholder="Masukkan Password" onChangeText={password => setPassword(password)} secureTextEntry />
            <Text style={styles.footer1}>Forgot Your Password?</Text>
            <TouchableOpacity style={styles.next} onPress={() => { navigation.navigate('MainApp', { email: email, password: password }) }}>
                <Text style={styles.nxttext}>Login</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}

export default Login

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 178,
        height: 178,
        marginTop: 1,
    },
    garuda: {
        textAlign: 'center',
        letterSpacing: 0.02,
        fontSize: 25,
        fontFamily: 'Viga',
        lineHeight: 33.6,
        fontWeight: 'bold',
        color: '#FA0000',
        marginBottom: 60
    },
    footer: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'BentonSans Bold',
        fontWeight: 'bold',
        lineHeight: 26.2,
        color: '#09051C',
        marginTop: 10,
        marginBottom: 50,
        marginLeft: 82,
        marginRight: 82
    },
    email: {
        backgroundColor: '#FFFFFF',
        width: 325,
        height: 57,
        borderRadius: 15,
        elevation: 5,
        marginBottom: 20,
        paddingHorizontal: 25
    },
    password: {
        backgroundColor: '#FFFFFF',
        width: 325,
        height: 57,
        borderRadius: 15,
        elevation: 5,
        paddingHorizontal: 25,
        marginBottom: 10
    },
    footer1: {
        textAlign: 'center',
        fontSize: 14,
        fontFamily: 'BentonSans Medium',
        fontWeight: 'bold',
        lineHeight: 23.31,
        color: '#E85353',
        marginTop: 10,
        marginBottom: 90,
    },
    next: {
        width: 157,
        height: 57,
        textAlign: 'center',
        fontFamily: 'BentonSans Book',
        fontWeight: '400',
        lineHeight: 21.66,
        backgroundColor: '#E85353',
        borderRadius: 15,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 82,
        marginRight: 82
    },
    nxttext: {
        textAlign: 'center',
        fontFamily: 'BentonSans Bold',
        fontWeight: '400',
        fontSize: 21,
        lineHeight: 20.96,
        color: '#FFFFFF',
        marginTop: 20,
    }
})