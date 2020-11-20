import React, { useEffect,useState } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native'

import {NavigationContainer, StackActions} from '@react-navigation/native'
import {useSelector,useDispatch} from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
// import SplashScreen from './src/screen/SplashScreen'
import Axios from 'axios';
import AuthStackRoot from './src/navigation/AuthStackRoot'
import StackRoot from './src/navigation/StackRoot'
import SplashScreen from './src/screen/SplashScreen'
const AppMain=()=>{
    const Auth = useSelector(state=>state.Auth)
    console.log(Auth.isLogin,' ini is login')

    const [Loading,setLoading]=useState(true)
    const dispatch=useDispatch()

    useEffect(()=>{
        AsyncStorage.getItem('idUser')
        .then((value)=>{
            if(value !== null){
                console.log(value)
                AsyncStorage.setItem('idUser',value)
                .then(()=>{
                    dispatch({type:'LOGINTEST'})
                }).catch((err)=>{
                    console.log(err)
                }).finally(()=>{
                    setLoading(false)
                })
            }else {
                setLoading(false)
            }
        }).catch((err)=>{
            console.log(err)
            setLoading(false)
        })
    },[])
    
    if(Loading){
        return <SplashScreen/>
    }
    return (
        <>
           <NavigationContainer>
            {
                Auth.isLogin?
                <StackRoot/>
                :
                <AuthStackRoot/>
            }

           </NavigationContainer>
        </>
    )
}

export default AppMain