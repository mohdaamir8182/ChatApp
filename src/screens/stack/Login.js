import React, {useContext,useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {Context as AuthContext} from '../../context/AuthContext';
import {GoogleSignin,statusCodes,} from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';
import { WEB_CLIENT_ID } from '../../Constants/secret';
import { googleSignInWithFirebase, googleSignOut } from '../../context/Methods';

const Login = () => {

    useEffect(() => {
        GoogleSignin.configure({
          scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
          webClientId:WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
          offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
        });
      }, []);
    
    return (

        <View style={styles.container}>
        <TouchableOpacity 
            style={styles.btn}
            onPress={() => googleSignInWithFirebase()}
        >
            <Text>LOGIN WITH GOOGLE</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            style={styles.btn}
            onPress={() => googleSignOut().then(() => console.log('Signed out with Google!'))}
        >
            <Text>LOGIN out</Text>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn:{
        height: 100,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
    }

})

export default Login
