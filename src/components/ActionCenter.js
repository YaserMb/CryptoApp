import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'

const ActionCenter = ({img_src,img_text}) => {
    return (
        <TouchableOpacity style={{flexDirection:'column',alignItems:'center'}} >
            <Image style={{height:60,width:60}} source={img_src} />
            <Text style={{fontSize:15,fontFamily:'Roboto-Bold',color:'#333'}} >{img_text}</Text>
        </TouchableOpacity>
    )
}

export default ActionCenter

const styles = StyleSheet.create({})
