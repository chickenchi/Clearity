import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {
    Image,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';


import Logo from './Logo/Logo';

const MainHeader = () => {
  return (
    <SafeAreaView style={styles.titleView}>
        <Image source={require('assets/images/Logo/Logo.png')} style={styles.logo} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    titleView: {
        marginTop: 35,
        marginLeft: 35,
        marginBottom: -100,
        alignItems: 'flex-start',
    },

    logo: {
        width: 126,
        height: 51,
    },
});

export default MainHeader;
