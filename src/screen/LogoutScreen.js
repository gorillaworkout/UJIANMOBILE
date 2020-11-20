import AsyncStorage from '@react-native-async-storage/async-storage';
import { BaseRouter, NavigationContainer } from '@react-navigation/native';
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
import * as Animatable from 'react-native-animatable'
import Animated from 'react-native-reanimated'
  const DetailsScreen=({navigation,route})=>{

    const dispatch=useDispatch()
    const Auth=useSelector(state=>state.Auth)
    const fall = new Animated.Value(1)
    const onLogoutPress=()=>{
        AsyncStorage.removeItem('idUser')
        .then(()=>{
            dispatch({type:'LOGOUT'})
        })
    }
      return (

        <>
        <StatusBar backgroundColor={'#FF8E53'} barStyle={'light-content'}/>
        <Animatable.View   animation='fadeIn' style={{flex:1,backgroundColor:'white',opacity:Animated.add(0.1,Animated.multiply(fall,0.9))}}>
                    <ImageBackground
                    source={require('./../../assets/ujian4.jpg')}
                    style={{flex:1,width:'100%',height:'100%'}}
                    resizeMode='cover'
                    >
                        <SafeAreaView>
                            
                            <View style={{height:'100%',flexDirection:'column',justifyContent:'space-between'}}>
                                <View style={{paddingTop:50}}>
                                    <Text style={{fontSize:35,marginBottom:10,color:'hotpink',fontWeight:'800'}}>Click </Text>
                                    <Text style={{fontSize:35,marginBottom:10,color:'lightseagreen'}}>The </Text>
                                    <Text style={{fontSize:35,marginBottom:10,color:'lightseagreen'}}>Button </Text>
                                    <Text style={{fontSize:35,marginBottom:10,color:'hotpink',fontWeight:'600'}}>For Logout</Text>
                                </View>
                                <View style={{paddingBottom:100}}>
                                    <Button
                                    style={{paddingHorizontal:30}}
                                    buttonStyle={{backgroundColor:'hotpink',borderRadius:10}}
                                    title='Logout Here'
                                    
                                    onPress={onLogoutPress}
                                    />
                                </View>

                            </View>
                        </SafeAreaView>

                    </ImageBackground>
                        </Animatable.View>

            {/* <SafeAreaView style={{flex:1}}>
                <TouchableWithoutFeedback
                onPress={()=>navigation.goBack()}>
                     <Icon name={'arrowleft'} type={'antdesign'} size={23}  color={'blue'}  />

                </TouchableWithoutFeedback>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Button
                    title='Logout'
                    loading={Auth.isLoading}
                    onPress={onLogoutPress}
                    />
                </View>
            </SafeAreaView> */}
        </>
    
      )
  }

  export default DetailsScreen