import React, { Fragment } from 'react';
import {StatusBar, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MainStack, LoginStack } from './Routes';
import { useSafeAreaInsets, SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
import { chatHeaderBgColor, tabBgColor } from './src/Constants/colors';

const token = "1";

function App() {

  return (
    <Fragment>
      <SafeAreaView style={{ flex: 0, backgroundColor: chatHeaderBgColor }} />
      <SafeAreaView style={{flex:1, backgroundColor: tabBgColor}}>
            <NavigationContainer>
              {
                token === "1" ?
                <LoginStack /> :
                <MainStack />
              } 
            </NavigationContainer>
      </SafeAreaView>
    </Fragment>
  );
};


export default App;
