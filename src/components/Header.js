import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { AUDIOCALL_ICON, BACK_ICON, CHATAVATAR_ICON, VIDEO_ICON } from '../Constants/images'
import { useNavigation } from '@react-navigation/native';


const Header = () => {

    const navigation = useNavigation(); 

    function onBack(){
        navigation.goBack(null);
    }

    return (
    <View style={styles.container}>
        <View style={styles.leftContainer}>
            <TouchableOpacity onPress={onBack}>
                <Image 
                    source={BACK_ICON}
                    resizeMode='contain'
                    style={{width: 14, height: 22, marginRight: 20}}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.avatarContainer}>
                <Image 
                    source={CHATAVATAR_ICON}
                    resizeMode="contain"
                    style={{width: '100%', height: "100%"}}
                />
            </TouchableOpacity>

            <Text style={styles.nameText}>Robert Bronze</Text>
        </View>

        <View style={styles.rightContainer}>
            <TouchableOpacity>
                <Image 
                    source={VIDEO_ICON}
                    resizeMode="contain"
                    style={{width: 25, height: 25, marginRight: 33}}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image 
                    source={AUDIOCALL_ICON}
                    resizeMode="contain"
                    style={{width: 25, height: 25}}
                />
            </TouchableOpacity>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 64,
        backgroundColor: '#f8f7f7',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 8,
        paddingRight: 18,    
    },
    leftContainer:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    rightContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    avatarContainer:{
        width: 36,
        height: 36,
        borderRadius: 56
    },
    nameText:{
        color: '#000000',
        fontSize: 16,
        fontWeight: '400',
        letterSpacing: -0.13,
        marginLeft: 9
    }
})

export default Header
