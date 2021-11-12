import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { dummyData } from '../constants'
import  Icon  from 'react-native-vector-icons/FontAwesome'

const ProfitIndicator = ({percentage_change,type}) => {
    return (
        <View style={{flexDirection:'row',height:30,width:80,borderRadius:12 , justifyContent:'center',alignItems:'center',backgroundColor:type =="I" ? '#13D131' : 'red'}}  >
            <Text style={{fontFamily:'Roboto-Bold',color:'#fff'}} >{percentage_change}</Text>
            <Icon name="chevron-circle-up" size={15} color="#fff" />
        </View>
    )
}

export default ProfitIndicator

const styles = StyleSheet.create({})
