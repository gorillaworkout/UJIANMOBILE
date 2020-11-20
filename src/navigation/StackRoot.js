import React, { Component } from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import TabRoot from './TabRoot'
import DetailsScreen from './../screen/DetailsScreen'
const Stack=createStackNavigator()

const StackRoot=()=>{
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='TabRoot' component={TabRoot}/>
            <Stack.Screen name='Details' component={DetailsScreen}/>
        </Stack.Navigator>
    )
}

export default StackRoot