import {SafeAreaView, StyleSheet, View} from 'react-native';

import UnderConstruction from '../../../components/somepage/UnderConstruction';
import MainHeader from '../../header/MainHeader';
import Tab from '../../footer/Tab';

const Ranking = () => {
  return (
    <SafeAreaView style={styles.BG}>
      <View style={styles.MainHeader}>
        <MainHeader />
      </View>

      <UnderConstruction />

      <View style={styles.tab}>
        <Tab colDir="ranking" />
      </View>
    </SafeAreaView>
  );
};

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
    bottom: 0,
  },
});

export default Ranking;
