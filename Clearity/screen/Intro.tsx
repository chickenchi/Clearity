import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  Button
} from 'react-native';

interface HomePageProps {
  navigation: NativeStackNavigationProp<any, 'default'>;
}

const Intro = ({navigation}: HomePageProps) => {

  useState(() => {
    setTimeout(() => {
      navigation.navigate('login')
    }, 3000)
  })

  return (
    <SafeAreaView style={styles.BG}>
      <Image source={require('../assets/images/BG.png')} style={styles.image} />
      <Image source={require('../assets/images/Logo.png')} style={styles.logo} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  BG: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    position: 'absolute',
    width: 110,
    height: 82
  },
  image: {
    width: '100%',
    height: '100%'
  },
});

export default Intro;

