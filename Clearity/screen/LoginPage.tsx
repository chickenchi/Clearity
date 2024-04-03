import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image
} from 'react-native';

const LoginPage = () => {
  return (
    <SafeAreaView style={styles.BG}>
      <Text style={styles.Text}>아잉</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  BG: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },

  Text: {
    color: 'white'
  }
});

export default LoginPage;

