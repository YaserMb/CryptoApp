import React from 'react'
import {Text,View,StyleSheet,Image,TouchableOpacity,StatusBar,ScrollView, Touchable, FlatList} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/FontAwesome'
import {dummyData} from '../constants'
import { ProfitIndicator,ActionCenter } from '../components'


const Dashboard = () =>{
    return (
        
        <View style={{flex:1}} >
            
            {/* Statusbar */}
            <StatusBar barStyle='light-content' translucent={true} backgroundColor='transparent' />
            {/* Header section */}
            <LinearGradient start={{x:0.0,y:0.4}} end={{x:0.5,y:1.0}} location={[0,1]} colors={['#2D97DA','#2249D6']} style={{flex:1.2,flexDirection:'column'}} >
                <View style={{flexDirection:'column',marginTop:hp('10%'),paddingHorizontal:'5%'}} >
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'flex-start'}} >
                    {/* Welcome message and name */}
                    <View style={{flexDirection:'column'}} >
                        <Text style={{fontFamily:'Roboto-Regular',fontSize:16,color:'#fff'}} >Welcome Back</Text>
                        <Text style={{fontFamily:'Roboto-Medium',color:'#fff',fontSize:22}} >Yaser</Text>
                    </View>

                    {/* Bell icon and profile pic */}
                    <View style={{flexDirection:'row',alignItems:'center'}} >
                        <Icon name='bell' size={30} color="#fff" />
                        <Image source={require('../assets/images/avatar.jpg')} resizeMode='cover' style={{width:40,height:40,borderRadius:20,marginLeft:15}} />
                    </View>
                </View>

                
                {/* amount  */}
                <View style={{flexDirection:'row',marginTop:25,justifyContent:'space-between',alignItems:'center'}} >
                        {/* Amount */}
                        <View style={{flexDirection:'column'}} >
                            <Text style={{color:'#fff',fontSize:28,fontFamily:'Roboto-Bold'}} >$32,7456.68</Text>
                            <Text style={{color:'rgba(255,255,255,0.3)',fontFamily:'Roboto-Regular-Italic',fontSize:14}} >Updated 2 mins ago</Text>
                        </View>
                        
                        {/* profit loss indicator */}
                        <ProfitIndicator type="I" percentage_change={dummyData.portfolio.changes} />            
                </View>
            </View>

            </LinearGradient>
            
            {/* Body section */}
            <View style={{flex:2.5,backgroundColor:'#fff',paddingHorizontal:wp('5%')}} >
                {/* Action Center */}
                <View style={{flexDirection:'row',backgroundColor:'#fff',height:hp('13%'),width:'100%',alignItems:'center',justifyContent:'space-around',borderRadius:10,borderWidth:1,borderColor:'rgba(255,255,255,0.1)',elevation:10,shadowColor:'#000',shadowRadius:10,marginTop:-25}} >

                    {/* <TouchableOpacity style={{flexDirection:'column',alignItems:'center'}} >
                        <Image style={{height:60,width:60}} source={require('../assets/icons/top-up.png')} />
                        <Text style={{fontSize:15,fontFamily:'Roboto-Bold',color:'#333'}} >Top-up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:'column',alignItems:'center'}} >
                        <Image style={{height:60,width:60}} source={require('../assets/icons/top-up.png')} />
                        <Text style={{fontSize:15,fontFamily:'Roboto-Bold',color:'#333'}} >Top-up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:'column',alignItems:'center'}} >
                        <Image style={{height:60,width:60}} source={require('../assets/icons/top-up.png')} />
                        <Text style={{fontSize:15,fontFamily:'Roboto-Bold',color:'#333'}} >Top-up</Text>
                    </TouchableOpacity> */}

                    <ActionCenter img_src={require('../assets/icons/top-up.png')} img_text="Top-Up" />

                    <ActionCenter img_src={require('../assets/icons/buy.png')} img_text="Buy" />

                    <ActionCenter img_src={require('../assets/icons/withdraw.png')} img_text="WithDraw" />

                </View>
        

                {/* My Assets */}
                <View style={{flexDirection:'column'}} >
                    {/* Text and button */}
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}} >
                        <Text style={{fontFamily:'Roboto-Medium',color:'#333',fontSize:22}} >My Assets</Text>
                        <TouchableOpacity onPress={()=>console.log('see all')} >
                            <Text style={{fontFamily:'Roboto-Medium',color:'#2249DA',fontSize:20}} >See All</Text>
                        </TouchableOpacity>
                    </View>


                    {/* Horizontal asset slider */} 
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

                {/* Market */}
                <View style={{flex:1,flexDirection:'column'}} >
                    {/* market text */}
                    <Text style={{fontFamily:'Roboto-Bold',fontSize:22,color:'#333'}} >Market</Text>

                    {/* coin list */}
                    <FlatList
                        keyExtractor={(item)=>item.id}
                        data={dummyData.coins}
                        renderItem={({item})=>(
                            <View style={{flexDirection:'row',height:hp('10%'),width:'100%',borderWidth:1,borderColor:'#ddd',borderRadius:15,justifyContent:'space-between',paddingRight:10,marginBottom:10}} >
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

export default Dashboard

const styles = StyleSheet.create({
    
})