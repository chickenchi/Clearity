import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CommonType } from "./types/common/CommonType";

import Intro from "Intro";
import LoginPage from "Account/LoginPage";
import RegisterPage from "Account/RegisterPage";
import Home from "Main/Home";
import Profile from "Main/Profile";
import Ranking from "Main/Ranking";
import Setting from "Main/Setting";
import Crossword from "Word/Crossword";

const Stack = createNativeStackNavigator<CommonType.RootStackPageList>();

const App = (props: any) => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={"home"} screenOptions={{ headerShown: false }}>
            <Stack.Screen name="intro" component={Intro} />
            <Stack.Screen name="login" component={LoginPage} />
            <Stack.Screen name="register" component={RegisterPage} />
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="profile" component={Profile} />
            <Stack.Screen name="ranking" component={Ranking} />
            <Stack.Screen name="setting" component={Setting} />
            <Stack.Screen name="crossword" component={Crossword} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
