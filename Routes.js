import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/stack/Home';
import Status from './src/screens/bottomTabs/Status';
import Call from './src/screens/bottomTabs/Call';
import Camera from './src/screens/bottomTabs/Camera';
import Chats from './src/screens/bottomTabs/Chats';
import Settings from './src/screens/bottomTabs/Settings';
import { CALL_ICON, CAMERA_ICON, CHATS_ICON, SETTINGS_ICON, STATUS_ICON } from './src/Constants/images';
import BottomIcon from './src/components/BottomIcon';
import { activeTintColor, inActiveTintColor, tabBgColor } from './src/Constants/colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainStack() {
  return (
    <Stack.Navigator
     headerMode = "none"
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

function StatusStack() {
    return (
      <Stack.Navigator
        headerMode = "none"
      >
        <Stack.Screen name="Status" component={Status} />
      </Stack.Navigator>
    );
  }

function CallsStack() {
    return (
      <Stack.Navigator
        headerMode = "none"
      >
        <Stack.Screen name="Calls" component={Call} />
      </Stack.Navigator>
    );
  }

  function CameraStack() {
    return (
      <Stack.Navigator
        headerMode = "none"
      >
        <Stack.Screen name="Camera" component={Camera} />
      </Stack.Navigator>
    );
  }

  function ChatssStack() {
    return (
      <Stack.Navigator
        headerMode = "none"
      >
        <Stack.Screen name="Chats" component={Chats} />
      </Stack.Navigator>
    );
  }

  function SettingsStack() {
    return (
      <Stack.Navigator
        headerMode = "none"
      >
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    );
  }

  function BottomTabsNavigator() {
      return (
        <Tab.Navigator
          initialRouteName="Chats"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Status') {
              iconName = STATUS_ICON;
            } else if (route.name === 'Calls') {
              iconName = CALL_ICON;
            } else if (route.name === 'Camera') {
                iconName = CAMERA_ICON;
            } else if (route.name === 'Chats') {
                iconName = CHATS_ICON;
            } else  {
                iconName = SETTINGS_ICON;
            }

            // You can return any component that you like here!
            return <BottomIcon icon={iconName} focused={focused} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: activeTintColor,
          inactiveTintColor: inActiveTintColor,
          style: {backgroundColor: tabBgColor, paddingTop: 10}
        }}
      >
        <Tab.Screen name="Status" component={StatusStack} />
        <Tab.Screen name="Calls" component={CallsStack} />
        <Tab.Screen name="Camera" component={CameraStack} />
        <Tab.Screen name="Chats" component={ChatssStack} />
        <Tab.Screen name="Settings" component={SettingsStack} />
      </Tab.Navigator>
      )
  }

  export { MainStack , BottomTabsNavigator};