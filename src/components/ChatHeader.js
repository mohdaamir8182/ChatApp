import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import {scale , verticalScale , moderateScale, moderateVerticalScale} from 'react-native-size-matters'
import { chatHeaderBgColor, tabBgColor } from '../Constants/colors'
import { EDIT_ICON, SEARCH_ICON } from '../Constants/images'


const ChatHeader = () => {
    return (
        <View style={styles.container}>
            
            <View style={styles.topRow}>
                <TouchableOpacity>
                    <Text style={styles.editStyle}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image 
                        source={EDIT_ICON}
                        resizeMode='contain'
                        style={{width: moderateScale(20), height: moderateScale(20)}}
                    />
                </TouchableOpacity>
            </View>

            <Text style={styles.title}>Chats</Text>

            <View style={styles.searchBar}>

                <Image 
                    source={SEARCH_ICON}
                    resizeMode="contain"
                    style={styles.searchIconStyle}
                />
                <TextInput 
                    style={styles.searchInput}
                    placeholder="Search"
                />
            
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 168,
        backgroundColor: tabBgColor,
        paddingHorizontal: scale(20),
        paddingTop: verticalScale(5),
        borderBottomWidth: 0.3,
        borderBottomColor: '#b3b3b3'
    },
    topRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    editStyle:{
        color: '#0a81ff',
        fontSize: moderateScale(16),
        fontWeight: '400',
        letterSpacing: -0.13,
    },
    title:{
        color: '#000000',
        fontSize: moderateScale(32),
        fontWeight: '700',
        textAlign: 'left',
        letterSpacing: -0.27,
        marginTop: verticalScale(18),
        marginBottom: verticalScale(9)
    },
    searchBar:{
        height: moderateVerticalScale(36),
        borderRadius: 10,
        backgroundColor: 'rgba(142, 142, 147, 0.12)',
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchIconStyle:{
        width: moderateScale(18),
        height: moderateScale(18),
        marginHorizontal: scale(15)
    },
    searchInput:{
        flex: 1
    },
    searchInputText:{
        color: '#8e8e93',
        fontSize: moderateScale(17),
        fontWeight: '400',
        letterSpacing: -0.41,
    }
})

export default ChatHeader
