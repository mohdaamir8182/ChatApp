import React from 'react';
import {SafeAreaView,StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabsNavigator, MainStack } from './Routes';



function App() {
  return (
    
        <NavigationContainer>
          <MainStack /> 
        </NavigationContainer>
      
  );
};


export default App;
