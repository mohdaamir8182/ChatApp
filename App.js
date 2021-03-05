import React, { Fragment } from 'react';
import {StatusBar, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MainStack, LoginStack } from './Routes';
import { useSafeAreaInsets, SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
import { chatHeaderBgColor, tabBgColor } from './src/Constants/colors';
import {useSelector, useDispatch} from 'react-redux';


const token = "1";

function App() {

  const user = useSelector(state => state.auth.user);

  return (
    
    <Fragment>
      {console.log("USER....",user)}
      <SafeAreaView style={{ flex: 0, backgroundColor: chatHeaderBgColor }} />
      <SafeAreaView style={{flex:1, backgroundColor: tabBgColor}}>
            <NavigationContainer>
              {
                user == null ?
                <LoginStack /> :
                <MainStack />
              } 
            </NavigationContainer>
      </SafeAreaView>
    </Fragment>
  );
};


export default App;
