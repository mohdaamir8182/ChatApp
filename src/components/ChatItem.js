import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { AVATAR_ICON, BACKARROW_ICON, FAILED_ICON, GREYTICKS_ICON, SEEN_ICON, SENT_ICON } from '../Constants/images'

const ChatItem = ({name , message , time , status, onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.innerContainer}>
                <View style={styles.leftContainer}>
                    <View style={styles.avatarContainer}>
                        <Image 
                            source={AVATAR_ICON}
                            resizeMode="contain"
                            style={{width: '100%', height: "100%"}}
                        />
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameTextStyle}>{name}</Text>
                        <View style={styles.messageContainer}>
                            <Image 
                                source={status === 'sent' ? SENT_ICON : status === 'delivered' ? GREYTICKS_ICON : status === 'seen' ? SEEN_ICON : status === 'failed' ? FAILED_ICON : ""}
                                resizeMode="contain"
                                style={{width: 21, height: 21, marginRight: 6}}
                            />
                            <Text 
                                style={styles.messageTextStyle}
                                numberOfLines={1}
                            >
                                {message}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.rightContainer}>
                    <Text style={styles.time}>{time}</Text>
                    <Image 
                        source={BACKARROW_ICON}
                        resizeMode="contain"
                        style={{width: 17, height: 17, marginRight: 6}}
                    />
                </View>
            </View>
            <View style={styles.separator} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        //backgroundColor: 'teal',
        height: 80,
        paddingTop: 11
    },
    innerContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 8,
        paddingRight: 15,
        // paddingBottom: 17,
        // marginTop: 10
    },
    leftContainer:{
        //backgroundColor: 'yellow',
        flexDirection: 'row',
        flex: 1
    },
    rightContainer:{
        //backgroundColor: 'red',
        justifyContent: 'flex-start',
        alignItems: 'flex-end'
    },
    avatarContainer:{
        width: 56,
        height: 56,
        borderRadius: 56
    },
    nameContainer:{
        justifyContent: 'space-between',
        marginLeft: 9, 
    },
    messageContainer:{
        flexDirection: 'row'
    },
    nameTextStyle:{
        color: '#000000',
        fontSize: 16,
        fontWeight: '700',
        letterSpacing: -0.13,
    },
    messageTextStyle:{
        color: '#8e8e8e',
        fontSize: 16,
        fontWeight: '400',
        letterSpacing: -0
    },
    time:{
        color: '#8e8e8e',
        fontSize: 18,
        fontWeight: '400',
        letterSpacing: -0.13,
        marginRight: 29,
        marginBottom: 11
    },
    separator:{
        height: 1,
        width: '100%',
        borderColor: '#b3b3b3',
        borderStyle: 'solid',
        borderWidth: 0.3,
        marginTop: 20,
        marginLeft: 73
    }


})

export default ChatItem