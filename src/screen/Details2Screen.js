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
 
const token = 'ee5c7a59d5aad08f786511d7d86253d6'
 
const Details2Screen = ({navigation}) => {
    const [rest, setRest] = useState([])
    const [refresh, setrefresh] = useState(false)
    const [username,setusername]=useState('')
 
    useEffect(()=> {
        fetchdata()
        // Axios.get(`https://developers.zomato.com/api/v2.1/search?count=10`,{
        //     headers: {
        //         'user-key': `${token}`
        //     }
        // }).then((res)=> {
        //     setRest(res.data.restaurants)
        // }).catch((err)=> {
        //     console.log(err);
        // })
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
        navigation.navigate('detail', {restauData: item})
    }
 
    const onRefreshFlatList = () => {
        setrefresh(true)
        fetchdata()
    }
 
    const renderRestaurant = ({item}) => {
        return (
            <ImageBackground
                source={{uri: item.restaurant.featured_image?item.restaurant.featured_image :'https://rollyyp.files.wordpress.com/2016/04/file-uploads1.png'}}
                style={styles.containerimageBgstyle}
                imageStyle={{borderRadius: 5}}
            >
                <TouchableWithoutFeedback onPress={()=>onDetailScreen(item)}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: 'white', textTransform: 'capitalize'}}>
                            {item.restaurant.name}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </ImageBackground>
        )
    }
 
    return (

        <>

        <StatusBar backgroundColor={'#FF8E53'} barStyle={'dark-content'}/>
        <SafeAreaView style={{flex:1,backgroundColor:'red'}}>
                <View style={{
                    flex:0,
                    backgroundColor:'lightblue',
                    paddingVertical:30,
                    justifyContent:'space-between',
                    flexDirection:'row'
                    }}>
                        <View style={{marginLeft:20}}>
                            <Text style={{color:'red'}}>ICON</Text>     
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
                                <Icon name={'logout'} type={'antdesign'} size={23}  color={'blue'}  />
                            </View>
                            <View style={{
                               marginHorizontal:25
                            }}>
                                <Text>ICON 2</Text>

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
                                <Icon name={'logout'} type={'antdesign'} size={23}  color={'blue'}  />
                            </View>
                            <View style={{
                               marginHorizontal:25
                            }}>
                                <Text>ICON 2</Text>

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
                                <Icon name={'logout'} type={'antdesign'} size={23}  color={'blue'}  />
                            </View>
                            <View style={{
                               marginHorizontal:25
                            }}>
                                <Text>ICON 2</Text>

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
                                <Icon name={'logout'} type={'antdesign'} size={23}  color={'blue'}  />
                            </View>
                            <View style={{
                               marginHorizontal:25
                            }}>
                                <Text>ICON 2</Text>

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
                                <Icon name={'logout'} type={'antdesign'} size={23}  color={'blue'}  />
                            </View>
                            <View style={{
                               marginHorizontal:25
                            }}>
                                <Text>ICON 2</Text>

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
                                <Icon name={'logout'} type={'antdesign'} size={23}  color={'blue'}  />
                            </View>
                            <View style={{
                               marginHorizontal:25
                            }}>
                                <Text>ICON 2</Text>

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
                                <Icon name={'logout'} type={'antdesign'} size={23}  color={'blue'}  />
                            </View>
                            <View style={{
                               marginHorizontal:25
                            }}>
                                <Text>ICON 2</Text>

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
                                <Icon name={'logout'} type={'antdesign'} size={23}  color={'blue'}  />
                            </View>
                            <View style={{
                               marginHorizontal:25
                            }}>
                                <Text>ICON 2</Text>

                            </View>

                        </View>
                
                </View>
                <View style={{flex: 1}}>
                <View style={{paddingHorizontal: 10, flex: 1}}>
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
        height: 200,
        width: '100%',
        marginVertical: 5
    }
})
 
export default Details2Screen