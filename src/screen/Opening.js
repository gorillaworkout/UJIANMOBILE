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
    ImageBackground
  } from 'react-native';
  import {Input,Icon,Button} from 'react-native-elements'
  import * as Animatable from 'react-native-animatable'
  import Animated from 'react-native-reanimated'
  const OpeningScreen=({navigation})=>{

    const fall = new Animated.Value(1)
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
                                <View style={{paddingBottom:100}}>
                                    <Button
                                    style={{paddingHorizontal:30}}
                                    buttonStyle={{backgroundColor:'hotpink',borderRadius:10}}
                                    title='Get Started'
                                    onPress={()=>navigation.navigate('Login')}
                                    />
                                </View>

                            </View>
                        </SafeAreaView>

                    </ImageBackground>
                        </Animatable.View>
            
        </>
    
      )
  }

  export default OpeningScreen