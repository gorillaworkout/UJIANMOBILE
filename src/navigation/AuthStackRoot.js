
import React from 'react';
import LoginScreen from './../screen/LoginScreen'
import { createStackNavigator} from '@react-navigation/stack'
import OpeningScreen from './../screen/Opening'
import DetailScreen from './../screen/DetailsScreen'
// import RegisterScreen from './../screen/RegisterScreen'
// import DisplayScreen from './../screen/DisplayScreen'
const Stack=createStackNavigator()

const AuthStackRoot=()=>{
    return(
        <>
            <Stack.Navigator headerMode='none'>
                <Stack.Screen name='Opening' component={OpeningScreen}/>
                <Stack.Screen name='Login' component={LoginScreen}/>
                <Stack.Screen name='Details' component={DetailScreen}/>
                
            </Stack.Navigator>

        </>
    )
}

export default AuthStackRoot