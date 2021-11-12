import React from 'react'
import {View,Text,StyleSheet,StatusBar,TouchableOpacity,FlatList,Image,TextInput} from 'react-native'
import { dummyData } from '../constants';
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome'
import { ProfitIndicator } from '../components';


const Search =({navigation})=>{
    return(
        
        <View style={{flex:1,backgroundColor:'#fff'}}>
            <StatusBar barStyle='dark-content' translucent={true} />
            <View style={{flex:1,flexDirection:'column'}} >
                {/* Backbutton with header */}
                <View style={{flex:1,backgroundColor:'#fff',flexDirection:'row',justifyContent:"flex-start",alignItems:'center'}} >
                    {/* backbutton */}
                    <TouchableOpacity onPress={()=>navigation.navigate('Dashboard')} >
                        <Icon name="arrow-left" size={23} color="#333" />
                    </TouchableOpacity>
    
                    {/* header Text */}
                    <Text style={{width:'80%',textAlign:'center',fontFamily:'Roboto-Bold',fontSize:18,color:'#333'}} >Live Market</Text>
                </View>


                {/* search bar */}
                <View style={{flex:0.5,justifyContent:'flex-start',backgroundColor:'#fff',paddingHorizontal:'2%'}} >
                    <View style={{flexDirection:'row',borderWidth:1,borderColor:'#999',borderRadius:20,height:50,width:'100%',justifyContent:'flex-start',alignItems:'center',paddingLeft:20}} >
                        <Icon name='search' color='#ddd' size={22} />
                        <TextInput placeholder='Search' placeholderTextColor="#999" />
                    </View>
                </View>


                {/* horizontal scroll section */}
                <View style={{flex:1.5,backgroundColor:'#fff',paddingHorizontal:'2%'}} >
                    {/* Copying horizontal flatlist from dashboard */}
                    <FlatList
                        keyExtractor={(item)=>item.id}
                        data={dummyData.coins}
                        renderItem={({item})=>(
                            <View style={{position:'relative',flexDirection:'column',height:hp('20%'),width:wp('65%'),borderWidth:1,borderColor:'#ddd',backgroundColor:'#fff',borderRadius:15,marginRight:10,marginTop:10}}  >
                                {/* Coin and symbol */}
                                <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:10,paddingTop:20}} >
                                    <Image style={{height:25,width:25}} source={item.image} />
                                    <Text style={{fontFamily:'Roboto-Bold',color:'#333',fontSize:18}} > {item.currency}/USDT</Text>
                                </View>


                                {/* coin and price indicator */}
                                <View style={{flexDirection:'row',marginTop:20,justifyContent:'space-around',alignItems:'center'}} >
                                    {/* Coin Price */}

                                    <View style={{flexDirection:'column'}} >
                                        <Text style={{fontFamily:'Roboto-Bold',color:'#333',fontSize:20}} > ${item.amount}</Text>
                                        <Text>0.0256 BNB</Text>
                                    </View>

                                    {/* indicator */}
                                    <ProfitIndicator type={item.type} percentage_change={item.changes} />

                                </View>

                            </View>
                        )}
                        horizontal={true}
                     />

                </View>

                {/* vertical scroll section */}
                <View style={{flex:4,backgroundColor:'#fff',paddingHorizontal:'2%'}} >
                    {/* copying vertical flatlist from dashboard */}
                    <FlatList
                        keyExtractor={(item)=>item.id}
                        data={dummyData.coins}
                        renderItem={({item})=>(
                            <View style={{flexDirection:'row',height:hp('12%'),width:'100%',borderWidth:1,borderColor:'#ddd',borderRadius:15,justifyContent:'space-between',paddingRight:10,marginBottom:15}} >
                                {/* Coin image ,coin name and symbol */}
                                <View style={{flexDirection:'row',alignItems:'center'}} >
                                    {/* Coin image */}
                                    <Image style={{height:'65%'}} resizeMode="contain" source={item.image} />

                                    {/* Coin symbol */}
                                    <View style={{flexDirection:'column',justifyContent:'flex-start'}} >
                                        <Text style={{fontFamily:'Roboto-Medium',color:'#333',fontSize:20}} >{item.currency}</Text>
                                        <Text>BNB/USDT</Text>
                                    </View>
                                </View>


                                {/* Coin price and indicator */}
                                <View style={{flexDirection:'column',backgroundColor:'#fff',alignContent:'center',justifyContent:'center'}} >
                                    {/* price */}
                                    <Text style={{fontFamily:'Roboto-Medium',fontSize:14,color:'#333'}} >${item.amount}</Text>

                                    {/* indicator */}
                                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}} >
                                        <Text style={{color: item.type =="I" ? 'green':'red',fontFamily:'Roboto-Bold',fontSize:12}} >{item.changes}</Text>
                                        
                                        <Icon name={item.type == "I" ? 'chevron-circle-up':'chevron-circle-down'} color={item.type == "I" ? 'green':'red'} />

                                    </View>
                                </View>

                            </View>
                        )}
                    />

                </View>

            </View>
            
            
        </View>
    

    );
}

export default Search

const styles = StyleSheet.create({
        
})