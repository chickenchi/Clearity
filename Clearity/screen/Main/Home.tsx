import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';

import Tab from './Tab/Tab';
import StartPopup from 'Tools/StartPopup';

interface HomePageProps {
  navigation: NativeStackNavigationProp<any, 'default'>;
}

const Home = ({navigation}: HomePageProps) => {

  const [a, ap] = useState<string>();

  /* function OpenPopup() {
    
  } */

  function Crossword() {
    navigation.navigate("crossword")
  }

  return (
    <SafeAreaView style={styles.BG}>
      <StartPopup />

      <View style={styles.titleView}>
        <Image source={require('assets/images/Logo/Logo.png')} style={styles.logo} />
        <Text style={styles.title}>평명</Text>
      </View>

      <TouchableOpacity style={[styles.button, styles.startBtn]} onPress={Crossword}>
        <Text style={[styles.buttonText, styles.startBtnText]}>시작하기</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.battleBtn]}>
        <Text style={[styles.buttonText, styles.battleBtnText]}>대전하기</Text>
      </TouchableOpacity>
      
      <View style={styles.tab}>
        <Tab colDir="home" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  BG: {
    backgroundColor: 'white',

    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  titleView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 90,
  },
  logo: {
    width: 80,
    height: 58,
  },
  title: {
    marginLeft: 15,

    fontSize: 55,
    fontFamily: 'Inter',
    fontWeight: '700',

    color: 'black',
  },
  button: {
    width: '75%',
    height: '6.8%',

    color: 'white',
    
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 22,

    marginBottom: 20,
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  startBtn: {
    borderColor: '#E04E92'
  },
  startBtnText: {
    color: '#E04E92'
  },

  battleBtn: {
    borderColor: '#C1C1C1'
  },
  battleBtnText: {
    color: '#C1C1C1'
  },

  buttonText: {
    fontSize: 26,
    fontFamily: 'NANUMSQUAREROUNDB',
    fontWeight: '600',
    textAlign: 'center'
  },
  tab: {
    position: 'absolute',
    bottom: 10
  }
});

export default Home;
