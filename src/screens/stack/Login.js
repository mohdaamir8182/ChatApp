import React, {useContext,useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {Context as AuthContext} from '../../context/AuthContext';
import {GoogleSignin,statusCodes,} from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';
import { WEB_CLIENT_ID } from '../../Constants/secret';
import {googleSignOut } from '../../context/Methods';
import {useDispatch} from 'react-redux';
import {hitSignIn} from '../../redux/Actions'

const Login = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        GoogleSignin.configure({
          scopes: ['profile'], // what API you want to access on behalf of the user, default is email and profile
          webClientId:WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
          offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
        });
      }, []);

      const googleSignInWithFirebase = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const {accessToken, idToken} = await GoogleSignin.signIn();
          console.log("INFO.....",idToken)
          const googleCredential = auth.GoogleAuthProvider.credential(
            idToken,
            accessToken,
          );
        
          // Sign-in the user with the credential
         return await auth().signInWithCredential(googleCredential);
  
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
          } else {
            console.error(error)
          }
        }
      };
    
    return (

        <View style={styles.container}>
        <TouchableOpacity 
            style={styles.btn}
            onPress={() => googleSignInWithFirebase().then(() => dispatch(hitSignIn("Amir")))}
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
