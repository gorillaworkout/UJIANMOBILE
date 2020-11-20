import React, { Component ,useState} from 'react';
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
    ImageBackground
  } from 'react-native';
  import {Input,Icon,Button} from 'react-native-elements'
  import * as Animatable from 'react-native-animatable'
  import Animated from 'react-native-reanimated'
  import {useDispatch,useSelector} from 'react-redux'
  import AsyncStorage from '@react-native-async-storage/async-storage'


  const LoginScreen=({navigation,route})=>{

    const [isusernamefilled,setisusernamefilled]=useState(false)

    const [datauser,setdatauser]=useState({
        username:''
    })

    const fall = new Animated.Value(1)
    const dispatch=useDispatch()
    const OnInputChangeText=(text)=>{
        if(text){
          setisusernamefilled(true)
        }else{
          setisusernamefilled(false)
        }
        setdatauser({...datauser,username:text})
      }

    const onLoginPress=()=>{
        dispatch({type:'LOADING'})
        console.log('button login jalan')
        console.log(datauser.username)
        let id = datauser.username
        AsyncStorage.setItem('idUser',id)
        .then(()=>{
            dispatch({type:'LOGINTEST',payload:datauser.username})
        }).catch((err)=>{
            console.log(err)
            dispatch({type:'ERROR'})
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
                                    <Text style={{fontSize:35,marginBottom:10,color:'hotpink',fontWeight:'800'}}>Best </Text>
                                    <Text style={{fontSize:35,marginBottom:10,color:'lightseagreen'}}>Food </Text>
                                    <Text style={{fontSize:35,marginBottom:10,color:'lightseagreen'}}>In </Text>
                                    <Text style={{fontSize:35,marginBottom:10,color:'hotpink',fontWeight:'600'}}>Jakarta</Text>
                                </View>

                                <View>
                                    <Input
                                    placeholder={'Your Name'}
                                    value={datauser.username}
                                    placeholdeTextColor={isusernamefilled?'#FF8E53':'lightgray'}
                                    inputContainerStyle={{borderColor:isusernamefilled?'#FF8E53':'lightblue'}}
                                    inputStyle={{color:'#FE6B8B'}}
                                    label={'Username'}
                                    labelStyle={{color:isusernamefilled?'#FF8E53':'lightgray'}}
                                    onChangeText={OnInputChangeText}

                                    />
                                </View>
                                <View style={{paddingBottom:100}}>
                                    <Button
                                    style={{paddingHorizontal:30}}
                                    buttonStyle={{backgroundColor:'hotpink',borderRadius:10}}
                                    title='Sign In'
                                    onPress={onLoginPress}
                                    />
                                </View>

                            </View>
                        </SafeAreaView>

                    </ImageBackground>
                        </Animatable.View>
            
        </>
    
      )
  }

  export default LoginScreen