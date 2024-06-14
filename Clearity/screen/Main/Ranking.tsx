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

import Logo from './Logo/Logo'

interface RankingPageProps {
  navigation: NativeStackNavigationProp<any, 'default'>;
}

const Ranking = ({navigation}: RankingPageProps) => {

  return (
    <SafeAreaView style={styles.BG}>
      <Logo style={styles.logo} />
      
      <View style={styles.tab}>
        <Tab colDir="ranking" />
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
  logo: {
    position: 'absolute',
  },
  tab: {
    position: 'absolute',
    bottom: 10
  }
});

export default Ranking;
