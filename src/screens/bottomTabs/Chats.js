import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { scale } from 'react-native-size-matters'
import ChatHeader from '../../components/ChatHeader'
import ChatItem from '../../components/ChatItem'
import { chatBodyColor } from '../../Constants/colors'
import {allChats} from '../../Constants/data'

const Chats = () => {
    return (
        <ScrollView 
            contentContainerStyle={StyleSheet.container}
            showsVerticalScrollIndicator='false'
        >

            <ChatHeader />

            <View style={styles.chatBody}>

                <View style={styles.top}>
                    <TouchableOpacity>
                        <Text style={styles.topText}>Broadcast Lists</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.topText}>New Group</Text>
                    </TouchableOpacity>
                </View>

                {
                    allChats.map(( item , index) => {
                        return(
                            <ChatItem
                                key={item.id.toString()} 
                                name = {item.name}
                                message = {item.message}
                                time = {item.time}
                                status = {item.status}
                            />
                        )
                    })
                }
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flexGrow: 1,
        backgroundColor: chatBodyColor,
    },
    chatBody:{
        flex: 1
    },
    top:{
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: scale(10),
        borderBottomWidth: 0.3,
        borderBottomColor: '#b3b3b3'
    },
    topText:{
        color: '#0a81ff',
        fontSize: 16,
        fontWeight: '400',
        letterSpacing: -0.13,
    }
})

export default Chats;
