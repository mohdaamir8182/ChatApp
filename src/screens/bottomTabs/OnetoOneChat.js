import React, {useEffect} from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import Header from '../../components/Header'
import { BG } from '../../Constants/images'
import { useNavigation, } from '@react-navigation/native';

const OnetoOneChat = () => {

    const navigation = useNavigation()

    //useEffect(()=>{navigation.tabBa})

    return (
        <View style={styles.container}>
            <Header />

           
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white'
    },
    body:{

    }
})

export default OnetoOneChat
