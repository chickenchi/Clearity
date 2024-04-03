import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CommonType } from "./types/common/CommonType";

import Intro from "./screen/Intro";
import LoginPage from "./screen/LoginPage";

const Stack = createNativeStackNavigator<CommonType.RootStackPageList>();

const App = (props: any) => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={"home"}>
            <Stack.Screen name="home" component={Intro}>
            </Stack.Screen>
            <Stack.Screen name="default">
                {() => <LoginPage />}
            </Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
