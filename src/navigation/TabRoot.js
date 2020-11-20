import React, { Component } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from './../screen/HomeScreen'
import DetailsScreen from './../screen/DetailsScreen'
import Details2Screen from './../screen/Details2Screen'
// import SearchScreen from './../screen/SearchScreen'
// import CartScreen from './../screen/CartScreen'
// import HistoryScreen from '../screen/HistoryScreen'
// import ProfileScreen from './../screen/ProfileScreen'
import {Icon} from 'react-native-elements'
import {View } from 'react-native'
import {useSelector} from 'react-redux'
import LogoutScreen from './../screen/LogoutScreen'
const Tab=createBottomTabNavigator()

const TabRoot=()=>{
    const Auth=useSelector(state=>state.Auth)

    return (
        <Tab.Navigator
        screenOptions={({route})=>({
            tabBarIcon:({focused,color,size})=>{
                let iconName;
                let type;
                if(route.name === 'Home'){
                    iconName=focused?'home':'home'
                    type='feather'             
                }else if (route.name==='History'){
                    iconName=focused?'history':'history'
                    type='font-awesome'
                }else if (route.name==='Search'){
                    iconName=focused?'search-location':'search-location'
                    type='font-awesome-5'
                    let colors= focused ? 'white':'white'
                    return (
                        <View style={{
                            marginTop:-50,
                            backgroundColor:'white',
                            height:60,
                            width:60,
                            padding:5,
                            justifyContent:'center',
                            alignItems:'center',
                            borderRadius:30,
                            borderWidth:5,
                            borderColor:'#FF8E53',
                            shadowColor:'black',
                            shadowOffset:{
                                width:100,
                                height:100
                            },
                            elevation:7,
                            shadowRadius:50
                        }}>
                            <Icon name={iconName} type={type} size={size} color={'#FF8E53'}/>
                        </View>
                    )
                }else if (route.name==='Cart'){
                    iconName=focused?'cart-arrow-down':'cart-arrow-down'
                    type='font-awesome-5'
                }else {
                    iconName=focused? 'logout':'logout'
                    type='antdesign'
                }
                return <Icon name={iconName} type={type} size={size} color={color}/>
            },
            tabBarLabel:({focused,color})=>{
                return null
            }
        })}
        tabBarOptions={{
            inactiveTintColor:'lightgray',
            activeTintColor:'#FF8E53'
        }}
        >
            <Tab.Screen name='Home' component={HomeScreen}/>
            <Tab.Screen name='Logout' component={LogoutScreen}/>
        </Tab.Navigator>

    )
}

export default TabRoot