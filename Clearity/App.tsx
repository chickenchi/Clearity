import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CommonType } from "./types/common/CommonType";

import Intro from "./screen/Intro";
import LoginPage from "./screen/Account/LoginPage";
import RegisterPage from "./screen/Account/RegisterPage";
import Home from "./screen/Main/Home";

const Stack = createNativeStackNavigator<CommonType.RootStackPageList>();

const App = (props: any) => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={"intro"}>
            <Stack.Screen name="intro" component={Intro} />
            <Stack.Screen name="login" component={LoginPage} />
            <Stack.Screen name="register" component={RegisterPage} />
            <Stack.Screen name="home" component={Home} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
