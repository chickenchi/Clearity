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
import StartSelectPopup from 'Tools/StartSelectPopup';

interface HomePageProps {
  navigation: NativeStackNavigationProp<any, 'default'>;
}

const Home = ({navigation}: HomePageProps) => {

  const [a, ap] = useState<string>();

  /* function OpenPopup() {
    
  } */

  const Crossword = () => {
    navigation.navigate("crossword")
  }

  const Test = () => {
    navigation.navigate("login")
  }

  return (
    <SafeAreaView style={styles.BG}>
      <StartPopup />
      {/* <StartSelectPopup /> */}

      <View style={styles.titleView}>
        <Image source={require('assets/images/Logo/Logo.png')} style={styles.logo} />
      </View>

      <TouchableOpacity style={[styles.button, styles.startBtn]} onPress={Crossword}>
        <Text style={[styles.buttonText, styles.startBtnText]}>시작하기</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.battleBtn]} onPress={Test}>
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
    width: 150,
    height: 61,
    marginBottom: 25,
  },
  title: {
    marginLeft: 15,

    fontSize: 55,
    fontFamily: 'Inter',
    fontWeight: '700',

    color: 'black',
  },
  button: {
    width: '85%',
    height: '7.2%',
    
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 12,

    marginBottom: 20,
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  startBtn: {
    borderColor: '#E04E92'
  },
  startBtnText: {
    color: '#E04E92',
    fontSize: 27,
    fontFamily: 'Cafe24Oneprettynight',
  },

  battleBtn: {
    borderColor: '#C1C1C1'
  },
  battleBtnText: {
    color: '#C1C1C1',
    fontSize: 27,
    fontFamily: 'Cafe24Oneprettynight',
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
