import AsyncStorage from '@react-native-async-storage/async-storage';
import { BaseRouter, NavigationContainer } from '@react-navigation/native';
import { Item } from 'native-base';
import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Platform,
    Keyboard,
    TouchableWithoutFeedback,
    Alert,
    ImageBackground,
    Button
  } from 'react-native';
  import {Input,Icon} from 'react-native-elements'
import { useSelector,useDispatch } from 'react-redux';

  const DetailsScreen=({navigation,route})=>{

    const dispatch=useDispatch()
    const Auth=useSelector(state=>state.Auth)
    const {item} = route.params
    const onLogoutPress=()=>{
        AsyncStorage.removeItem('idUser')
        .then(()=>{
            dispatch({type:'LOGOUT'})
        })
    }
      return (

        <>
            <StatusBar backgroundColor={'#FF8E53'} barStyle={'dark-content'}/>
            <SafeAreaView>
            <View style={{
                    flex:0,
                    backgroundColor:'lightblue',
                    paddingVertical:30,
                    flexDirection:'row'
                    }}>
                        <View>
                          <Button 
                          onPress={()=>navigation.goBack()}
                          title='back'
                          />                  
                        </View>
                        <View style={{marginLeft:20}}>
                            <Text style={{color:'red'}}>{item.restaurant.name}</Text>     
                        </View>
                       
                </View>

                <View>
                <ImageBackground
                    source={{uri: item.restaurant.featured_image?item.restaurant.featured_image :'https://rollyyp.files.wordpress.com/2016/04/file-uploads1.png'}}
                    style={styles.containerimageBgstyle}
                    imageStyle={{borderRadius: 5}}  >
                </ImageBackground>
                </View>

                <View style={{marginLeft:20,marginTop:20}}>
                    <View stye={{marginLeft:20, backgroundColor:'red'}}>
                      <Text style={{fontSize:25}}>
                      Rating : {item.restaurant.user_rating.aggregate_rating}
                      </Text>
                    </View>

                    <View>
                      <Text style={{fontSize:25}}>
                      Address : {item.restaurant.location.address}
                      </Text>
                    </View>
                    <View>
                    <Text style={{fontSize:25}}>
                      Cuisines : {item.restaurant.cuisines}

                      </Text>
                    </View>
                    <View>
                    <Text style={{fontSize:25}}>
                      Open : {item.restaurant.timings}

                      </Text>
                    </View>
                    <View>
                    <Text style={{fontSize:25}}>
                      Cost For 2 :

                      </Text>
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

  export default DetailsScreen