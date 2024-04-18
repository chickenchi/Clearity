import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

interface RegisterPageProps {
  navigation: NativeStackNavigationProp<any, 'default'>;
}

const Home = ({navigation}: RegisterPageProps) => {

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>안녕</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});

export default Home;
