import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';

import Tab from './Tab/Tab';

import Logo from './Logo/Logo';
import MainHeader from './MainHeader';
import Under_construction from 'Tools/under_construction';

interface SettingPageProps {
  navigation: NativeStackNavigationProp<any, 'default'>;
}

const Setting = ({navigation}: SettingPageProps) => {

  return (
    <SafeAreaView style={styles.BG}>
      <View style={styles.MainHeader}>
        <MainHeader />
      </View>
      
      <Under_construction />
      
      <View style={styles.tab}>
        <Tab colDir="setting" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  BG: {
    backgroundColor: 'white',

    alignItems: 'center',
    flex: 1,
  },
  MainHeader: {
    alignItems: 'flex-start',
    width: '100%',
  },
  logo: {
    position: 'absolute',
  },
  tab: {
    position: 'absolute',
    bottom: 10
  }
});

export default Setting;
