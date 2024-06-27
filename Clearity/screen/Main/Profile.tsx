import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';

import SVG, { Circle, Path, Rect } from 'react-native-svg';

import Tab from './Tab/Tab';

import Logo from './Logo/Logo';
import Hr from 'Tools/Hr';

import MainHeader from './MainHeader';

interface ProfilePageProps {
  navigation: NativeStackNavigationProp<any, 'default'>;
}

const Profile = ({navigation}: ProfilePageProps) => {

  {/* viewBox=Circle*2 */}
  return (
    <SafeAreaView style={styles.BG}>
      <View style={styles.MainHeader}>
        <MainHeader />
      </View>

      <View style={styles.profile}>
        <SVG style={styles.profilePic} width="130" height="130" viewBox="0 0 46 46" fill="none">
          <Circle cx="23" cy="23" r="20" stroke="#C1C1C1" />
          <Path d="M22.7488 23C27.1494 23 30.7169 19.6421 30.7169 15.5C30.7169 11.3579 27.1494 8 22.7488 8C18.3482 8 14.7808 11.3579 14.7808 15.5C14.7808 19.6421 18.3482 23 22.7488 23Z" stroke="#888888" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          <Path d="M35.4977 35C35.4977 31.8174 34.1545 28.7652 31.7636 26.5147C29.3728 24.2643 26.1301 23 22.7488 23C19.3676 23 16.1249 24.2643 13.7341 26.5147C11.3432 28.7652 10 31.8174 10 35" stroke="#888888" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </SVG>
        <View style={styles.info}>
          <SVG style={styles.call} width="140" height="30" viewBox="0 0 140 28" fill="none">
            <Rect x="5" y="3" width="130" height="23" rx="15" stroke="#C1C1C1" strokeWidth="2" />
            <Text style={styles.callText}>시간 지배자 ⌛</Text>
          </SVG>
          <Text style={styles.id}>hyunmin_babo</Text>
          <Text style={styles.name}>황현민</Text>
          <Text style={styles.introduce}>나는 바보다</Text>
          <SVG style={styles.setting} width="35" height="35" viewBox="0 0 13 13" fill="none">
            <Path d="M11.9378 6.92894C11.8318 6.81034 11.7733 6.65787 11.7733 6.5C11.7733 6.34213 11.8318 6.18966 11.9378 6.07106L12.7847 5.13519C12.878 5.03293 12.936 4.90427 12.9502 4.76767C12.9645 4.63106 12.9343 4.49352 12.8641 4.37479L11.5409 2.12609C11.4713 2.0075 11.3655 1.91349 11.2383 1.85748C11.1112 1.80146 10.9693 1.78629 10.8329 1.81414L9.5891 2.0611C9.43083 2.09323 9.26606 2.06734 9.12589 1.98831C8.98572 1.90929 8.87985 1.78261 8.82824 1.63216L8.42465 0.442824C8.38027 0.313738 8.29571 0.201619 8.18292 0.122315C8.07013 0.0430104 7.93482 0.000532145 7.79612 0.000883853H5.14966C5.00538 -0.00651347 4.8626 0.0326817 4.74314 0.112483C4.62367 0.192284 4.53407 0.308304 4.48804 0.442824L4.11753 1.63216C4.06593 1.78261 3.96005 1.90929 3.81988 1.98831C3.67971 2.06734 3.51495 2.09323 3.35668 2.0611L2.07976 1.81414C1.95045 1.79619 1.81862 1.81623 1.70088 1.87175C1.58314 1.92726 1.48477 2.01576 1.41814 2.12609L0.0949094 4.37479C0.0228992 4.4922 -0.00947893 4.62896 0.00240401 4.76553C0.014287 4.9021 0.0698225 5.03149 0.161071 5.13519L1.00132 6.07106C1.10739 6.18966 1.16589 6.34213 1.16589 6.5C1.16589 6.65787 1.10739 6.81034 1.00132 6.92894L0.161071 7.86481C0.0698225 7.96851 0.014287 8.0979 0.00240401 8.23447C-0.00947893 8.37104 0.0228992 8.5078 0.0949094 8.62521L1.41814 10.8739C1.48768 10.9925 1.59355 11.0865 1.72067 11.1425C1.84779 11.1985 1.98966 11.2137 2.12607 11.1859L3.36991 10.9389C3.52818 10.9068 3.69295 10.9327 3.83311 11.0117C3.97328 11.0907 4.07916 11.2174 4.13077 11.3678L4.53435 12.5572C4.58039 12.6917 4.66998 12.8077 4.78945 12.8875C4.90892 12.9673 5.05169 13.0065 5.19597 12.9991H7.84243C7.98114 12.9995 8.11644 12.957 8.22923 12.8777C8.34202 12.7984 8.42658 12.6863 8.47097 12.5572L8.87455 11.3678C8.92616 11.2174 9.03204 11.0907 9.17221 11.0117C9.31238 10.9327 9.47714 10.9068 9.63541 10.9389L10.8792 11.1859C11.0157 11.2137 11.1575 11.1985 11.2847 11.1425C11.4118 11.0865 11.5176 10.9925 11.5872 10.8739L12.9104 8.62521C12.9807 8.50648 13.0108 8.36894 12.9965 8.23234C12.9823 8.09573 12.9243 7.96707 12.831 7.86481L11.9378 6.92894ZM10.952 7.79982L11.4813 8.38474L10.6345 9.82755L9.85374 9.67157C9.37724 9.57589 8.88155 9.6554 8.46078 9.89501C8.04 10.1346 7.72344 10.5177 7.57117 10.9714L7.31976 11.6993H5.62602L5.38784 10.9584C5.23557 10.5047 4.919 10.1216 4.49823 9.88201C4.07746 9.6424 3.58177 9.56289 3.10526 9.65857L2.32456 9.81455L1.46445 8.37825L1.99375 7.79332C2.31923 7.43586 2.49918 6.97309 2.49918 6.4935C2.49918 6.01391 2.31923 5.55114 1.99375 5.19368L1.46445 4.60876L2.31132 3.17895L3.09203 3.33493C3.56854 3.43061 4.06423 3.3511 4.485 3.11149C4.90577 2.87188 5.22234 2.48885 5.3746 2.03511L5.62602 1.30071H7.31976L7.57117 2.04161C7.72344 2.49535 8.04 2.87838 8.46078 3.11799C8.88155 3.3576 9.37724 3.43711 9.85374 3.34143L10.6345 3.18545L11.4813 4.62825L10.952 5.21318C10.6302 5.56982 10.4525 6.02991 10.4525 6.5065C10.4525 6.98309 10.6302 7.44318 10.952 7.79982ZM6.47289 3.90035C5.94947 3.90035 5.4378 4.05282 5.00259 4.33847C4.56738 4.62413 4.22818 5.03014 4.02787 5.50516C3.82757 5.98018 3.77516 6.50288 3.87727 7.00717C3.97939 7.51145 4.23144 7.97466 4.60155 8.33823C4.97167 8.7018 5.44322 8.94939 5.95659 9.0497C6.46995 9.15 7.00207 9.09852 7.48564 8.90176C7.96922 8.705 8.38254 8.3718 8.67334 7.94429C8.96414 7.51678 9.11935 7.01416 9.11935 6.5C9.11935 5.81053 8.84053 5.1493 8.34422 4.66177C7.84791 4.17424 7.17477 3.90035 6.47289 3.90035ZM6.47289 7.79982C6.21118 7.79982 5.95534 7.72359 5.73774 7.58076C5.52013 7.43794 5.35053 7.23493 5.25038 6.99742C5.15023 6.75991 5.12402 6.49856 5.17508 6.24642C5.22614 5.99428 5.35216 5.76267 5.53722 5.58089C5.72228 5.3991 5.95806 5.27531 6.21474 5.22515C6.47142 5.175 6.73748 5.20074 6.97927 5.29912C7.22106 5.3975 7.42772 5.5641 7.57311 5.77786C7.71851 5.99161 7.79612 6.24292 7.79612 6.5C7.79612 6.84473 7.65671 7.17535 7.40855 7.41911C7.1604 7.66288 6.82383 7.79982 6.47289 7.79982Z" fill="#C1C1C1"/>
          </SVG>
        </View>
      </View>

      <View style={styles.line} />

      <View style={styles.general}>
        <Text style={styles.generalTitle}>일반</Text>
        <View style={styles.textSet}>
          <Text style={styles.generalText}>푼 문제 수</Text>
          <View style={styles.verticalLine} />
          <Text style={styles.generalValue}>2,384개</Text>
        </View>
        <View style={styles.textSet}>
          <Text style={styles.generalText}>정답</Text>
          <View style={styles.verticalLine} />
          <Text style={styles.generalValue}>1,957개</Text>
        </View>
        <View style={styles.textSet}>
          <Text style={styles.generalText}>오답</Text>
          <View style={styles.verticalLine} />
          <Text style={styles.generalValue}>427개</Text>
        </View>
      </View>

      <View style={styles.line} />

      <View style={styles.tab}>
        <Tab colDir="profile" />
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

  MainHeader: {
    alignItems: 'flex-start',
    width: '100%',
  },

  profile: {
    width: '100%',
    height: '18%',
    //backgroundColor: '#FCF0F0',
    marginTop: 130,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    //backgroundColor: 'skyblue',
    marginLeft: 40,
    marginRight: 15,
  },
  call: {
    marginLeft: -3
  },
  callText: {
    position: 'absolute',
    color: 'black',
    marginLeft: 25,
    marginTop: 5,
  },
  info: {
    flexDirection: 'column',
    width: '100%',
  },
  id: {
    fontSize: 19,
    marginLeft: 0,
    color: '#C1C1C1',
    fontWeight: '500',
  },
  name: {
    fontSize: 37,
    fontWeight: '900',
    color: 'black',
  },
  introduce: {
    fontSize: 21,
  },
  setting: {
    position: 'absolute',
    right: 220,
    top: 6,
  },
  general: {
    height: '100%',
    width: '100%',
    marginTop: 5,
  },
  generalTitle: {
    left: 35,
    top: 10,
    fontSize: 30,
    fontWeight: '600',
    color: '#C1C1C1',
    marginBottom: -10,
  },
  textSet: {
    marginTop: 30,
    left: 40,
    top: 20,
    flexDirection: 'row',
  },
  generalText: {
    fontSize: 23,
    color: '#C1C1C1',
  },
  generalValue: {
    marginTop: 0,
    left: 35,
    fontSize: 23,
    fontWeight: '600',
    color: '#888888',
  },

  tab: {
    position: 'absolute',
    bottom: 10,
  },
  verticalLine: {
    top: 4,
    left: 15,
    backgroundColor: '#F5F5F5',
    height: '90%',
    width: 2,
  },
  line: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#F5F5F5',
    height: 2,
    width: '90%',
  },
});

export default Profile;
