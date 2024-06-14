import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  Button,
  TextInput,
  View,
  Dimensions,
} from 'react-native';

import TextLink from 'react-native-text-link';

import Notification from 'Tools/Notification';
import axios from 'axios';

interface RegisterPageProps {
  navigation: NativeStackNavigationProp<any, 'default'>;
}

let no = 0;

const LoginPage = ({navigation}: RegisterPageProps) => {
  
  const [request, req] = useState("");
  const [type, setType] = useState("");
  const [response, ChangeResponse] = useState<string>("");
  
  const showAlert = (script: any, type: any) => {
    req(script + "; " + no);
    setType(type)
    no += 1;
  }

  const [id, setID] = useState("");
  const [pw, setPW] = useState("");

  useEffect(() => {
    if(response == "No Account") {
      showAlert("계정(ID)이나 비밀번호가 잘못 입력되었습니다.", "error");
      ChangeResponse("")
    }
    else if(response == "Success") {
      navigation.navigate("home")
      ChangeResponse("")
    }
  }, [response])

  const checkInput = () => {
    if(id == "")
    {
      showAlert("계정(ID) 혹은 전자 우편 주소를 입력해 주세요.", "error");
      return;
    }
    else if(pw == "")
    {
      showAlert("비밀번호를 입력해 주세요.", "error");
      return;
    }
    
      try {
        const url = 'http://10.0.2.2:5000/login';

        const options = {
            "id": id,
            "pw": pw,
        };

        axios.post(url, options)
            .then(function (response) {
            ChangeResponse(response.data)
        })
            .catch(function (error) {
            console.log(error);
        });
  
      } catch(e) {
        console.log(e)
      }
  }

  return (
    <SafeAreaView style={styles.BG}>
      <Notification request={request} type={type} />

      <Image source={require('assets/images/Background/Login.jpg')} style={styles.image} />
      
      <Text style={styles.Title}>들어가기</Text>

      <TextInput
          style={styles.TextInput}
          autoCapitalize="none"
          placeholder="계정(ID) 혹은 전자 우편 주소"
          onChangeText={setID}
          value={id} />
      <TextInput
          style={styles.TextInput}
          autoCapitalize="none"
          secureTextEntry
          placeholder="비밀번호"
          onChangeText={setPW}
          value={pw} />

      <View style={styles.BtnContainer}>
        <Button color='#399DF9'
                title="들어가기"
                onPress={checkInput} />
      </View>

      <View style={styles.registerView}>
        <Text style={styles.notice}>아직 가입하지 않았나요?</Text>
        <TextLink links={[
                        {
                          text: '회원 가입',
                          onPress: () => navigation.navigate('register'),
                        },
                      ]}
                  textStyle={styles.register}
                  textLinkStyle={styles.register}>
                      회원 가입
        </TextLink>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  BG: {
    backgroundColor: 'black',

    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  Title: {
    position: 'relative',

    fontSize: 45,
    color: 'white',

    marginBottom: 20,
    fontFamily: 'NotoSansKR-Medium',
  },

  BtnContainer: {
    width: '45%',

    marginTop: 20,
    borderRadius: 10,
  },

  TextInput: {
    backgroundColor: 'white',
    width: '70%',
    height: 52,

    fontSize: 14,

    paddingLeft: 15,
    marginTop: 7,
    marginBottom: 7,
    borderRadius: 8,
  },

  image: {
    position: 'absolute',

    opacity: 0.5,

    width: '100%',
    height: '100%',
  },

  registerView: {
    flexDirection: 'row',
    marginTop: 20,
  },
  
  notice: {
    marginRight: 15,

    fontSize: 15,
    color: '#A4A4A4',
    fontFamily: 'NotoSansKR-Light',

  },
  
  register: {
    fontSize: 15,
    color: 'white',
    textDecorationLine: 'underline',
    fontFamily: 'NotoSansKR-Light',
  },

  modalBackground: {
    position: 'absolute',
  },
  
  modalView: {
    marginTop: Dimensions.get('screen').height / 2.5,
    margin: 30,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
},

  modalTextStyle: {
    color: '#17191c',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50
  },

  centeredView: {
    flex: 1,
    alignContent: "center",
    textAlignVertical: 'center',
    backgroundColor: "rgba(0, 0, 0, 0.8)",
},
});

export default LoginPage;
