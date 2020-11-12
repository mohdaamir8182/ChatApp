import React from 'react';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import {GoogleSignin,statusCodes,} from '@react-native-community/google-signin';

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

   const googleSignOut = async () => {
      try {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        auth()
          .signOut()
          .then(() => alert('Your are signed out!'));
      //   setloggedIn(false);
      //   // setuserInfo([]);
      } catch (error) {
        console.error(error);
      }
    };

    export {googleSignInWithFirebase , googleSignOut}