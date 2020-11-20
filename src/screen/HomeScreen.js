import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Button,
    FlatList,
    StyleSheet,
    ImageBackground,
    TouchableWithoutFeedback,
    RefreshControl,
    StatusBar,
    SafeAreaView
} from 'react-native'
import Axios from 'axios'
import {Input,Icon} from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage';
 
const token = 'ee5c7a59d5aad08f786511d7d86253d6'
 
const Details2Screen = ({navigation}) => {
    const [rest, setRest] = useState([])
    const [refresh, setrefresh] = useState(false)
    const [username,setusername]=useState('')
 
    useEffect(()=> {
        fetchdata()
        AsyncStorage.getItem('idUser')
        .then((res)=>{
            setusername(res)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
 
    const fetchdata = async () => {
        try {
            const {data} = await Axios.get(`https://developers.zomato.com/api/v2.1/search?count=12`,{headers: {'user-key': `${token}`}})
            setRest(data.restaurants)
            setrefresh(false)
        } catch (error) {
            console.log(error);
        }
    }
 
    const onDetailScreen = (item) => {
        navigation.navigate('Details', {item})
    }
 
    const onRefreshFlatList = () => {
        setrefresh(true)
        fetchdata()
    }
 
    const renderRestaurant = ({item}) => {
            return (
                <View style={{flex:1,marginBottom:50,height:200}}>
                <ImageBackground
                    source={{uri: item.restaurant.featured_image?item.restaurant.featured_image :'https://rollyyp.files.wordpress.com/2016/04/file-uploads1.png'}}
                    style={styles.containerimageBgstyle}
                    imageStyle={{borderRadius: 5}}  >
                    <TouchableWithoutFeedback onPress={()=>onDetailScreen(item)}>
                        
                        <View style={{flex: 1,flexDirection:'row',marginTop:110}}>
                            <View>
                                <Icon name={'star'} type={'antdesign'} size={23}  color={'blue'} style={{color:'yellow'}}  />
                                <Text>
                                    {item.restaurant.user_rating.aggregate_rating}
                                </Text>
                            </View>
                            <Text style={{color: 'yellow', textTransform: 'capitalize',fontWeight:'700'}}>
                                {item.restaurant.name}
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                </ImageBackground>
            </View>
            )
        
        
    }
 
    return (

        <>

        <StatusBar backgroundColor={'#FF8E53'} barStyle={'dark-content'}/>
        <SafeAreaView style={{flex:1}}>
                <View style={{
                    flex:0,
                    backgroundColor:'lightblue',
                    paddingVertical:30,
                    justifyContent:'space-between',
                    flexDirection:'row'
                    }}>
                        <View style={{marginLeft:20}}>
                        <Icon name={'github'} type={'antdesign'} size={23}  color={'blue'}  />
                        </View>
                        <View style={{marginRight:20}}>
                            <Text style={{color:'royalblue',fontSize:20}}>Hallo,{username}</Text>     
                        </View>                   
                </View>

                <View style={{
                    flex:0,
                    backgroundColor:'white',
                    paddingVertical:25,
                    flexDirection:'row' }}>
                        <View>
                            <View style={{              
                                backgroundColor:'white',
                                height:60,
                                width:60,
                                borderRadius:30,
                            borderWidth:3,
                            borderColor:'lightblue',
                            marginHorizontal:20,
                            justifyContent:'center'}}>
                                <Icon name={'creditcard'} type={'antdesign'} size={23}  color={'blue'}  />
                            </View>
                            <View style={{
                               marginHorizontal:25
                            }}>
                                <Text>Credit</Text>

                            </View>

                        </View>
                        <View>
                            <View style={{              
                                backgroundColor:'white',
                                height:60,
                                width:60,
                                borderRadius:30,
                            borderWidth:3,
                            borderColor:'lightblue',
                            marginHorizontal:20,
                            justifyContent:'center'}}>
                                <Icon name={'carryout'} type={'antdesign'} size={23}  color={'blue'}  />
                            </View>
                            <View style={{
                               marginHorizontal:25
                            }}>
                                <Text>Variant</Text>

                            </View>

                        </View>
                        <View>
                            <View style={{              
                                backgroundColor:'white',
                                height:60,
                                width:60,
                                borderRadius:30,
                            borderWidth:3,
                            borderColor:'lightblue',
                            marginHorizontal:20,
                            justifyContent:'center'}}>
                                <Icon name={'wallet'} type={'antdesign'} size={23}  color={'blue'}  />
                            </View>
                            <View style={{
                               marginHorizontal:25
                            }}>
                                <Text>Recipe</Text>

                            </View>

                        </View>
                    
                        <View>
                            <View style={{              
                                backgroundColor:'white',
                                height:60,
                                width:60,
                                borderRadius:30,
                            borderWidth:3,
                            borderColor:'lightblue',
                            marginHorizontal:20,
                            justifyContent:'center'}}>
                                <Icon name={'location'} type={'entypo'} size={23}  color={'blue'}  />
                            </View>
                            <View style={{
                               marginHorizontal:25
                            }}>
                                <Text>Locations</Text>

                            </View>

                        </View>
                
                </View>

                <View style={{
                    flex:0,
                    backgroundColor:'white',
                    paddingVertical:25,
                    flexDirection:'row',
                    
                
                }}>
                    <View>
                            <View style={{              
                                backgroundColor:'white',
                                height:60,
                                width:60,
                                borderRadius:30,
                            borderWidth:3,
                            borderColor:'lightblue',
                            marginHorizontal:20,
                            justifyContent:'center'}}>
                                <Icon name={'cart-plus'} type={'font-awesome-5'} size={23}  color={'blue'}  />
                            </View>
                            <View style={{
                               marginHorizontal:25
                            }}>
                                <Text>Cart</Text>

                            </View>

                        </View>
                        <View>
                            <View style={{              
                                backgroundColor:'white',
                                height:60,
                                width:60,
                                borderRadius:30,
                            borderWidth:3,
                            borderColor:'lightblue',
                            marginHorizontal:20,
                            justifyContent:'center'}}>
                                <Icon name={'pizza-slice'} type={'font-awesome-5'} size={23}  color={'blue'}  />
                            </View>
                            <View style={{
                               marginHorizontal:25
                            }}>
                                <Text>Pizza</Text>

                            </View>

                        </View>
                        <View>
                            <View style={{              
                                backgroundColor:'white',
                                height:60,
                                width:60,
                                borderRadius:30,
                            borderWidth:3,
                            borderColor:'lightblue',
                            marginHorizontal:20,
                            justifyContent:'center'}}>
                                <Icon name={'hamburger'} type={'font-awesome-5'} size={23}  color={'blue'}  />
                            </View>
                            <View style={{
                               marginHorizontal:25
                            }}>
                                <Text>Burger</Text>

                            </View>

                        </View>
                        <View>
                            <View style={{              
                                backgroundColor:'white',
                                height:60,
                                width:60,
                                borderRadius:30,
                            borderWidth:3,
                            borderColor:'lightblue',
                            marginHorizontal:20,
                            justifyContent:'center'}}>
                                <Icon name={'more-horizontal'} type={'feather'} size={23}  color={'blue'}  />
                            </View>
                            <View style={{
                               marginHorizontal:25
                            }}>
                                <Text>More</Text>

                            </View>

                        </View>
                
                </View>
                <View style={{flex: 1}}>
                <View style={{paddingHorizontal: 10, flex: 1,flexDirection:'row'}}>
                    <FlatList 
                        data={rest}
                        keyExtractor={item=> `${item.restaurant.id}`}
                        renderItem={renderRestaurant}
                        showsVerticalScrollIndicator={false}
                        refreshControl={<RefreshControl onRefresh={onRefreshFlatList} refreshing={refresh} />}
                    />
                </View>
        </View>
              

        </SafeAreaView>
   
    </>
       
    )
}
 
const styles = StyleSheet.create({
    containerimageBgstyle: {
        height: 150,
        width: '100%',
        marginVertical: 5
    }
})
 
export default Details2Screen