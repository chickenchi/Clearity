import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

import Tab from './Tab/Tab';

import MainHeader from './MainHeader';
import Under_construction from '../Items/under_construction';

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
  tab: {
    position: 'absolute',
    bottom: 0
  }
});

export default Setting;
