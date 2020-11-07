import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const BottomIcon = ({ icon , focused , size , color }) => {
    return (
        <Image 
            source = {icon}
            style={{height: size, width: size, tintColor: focused ? color : color}}
        />
    )
}

export default BottomIcon;
