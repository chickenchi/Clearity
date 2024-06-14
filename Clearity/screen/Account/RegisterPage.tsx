import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Dimensions, Pressable } from 'react-native';
import { Modal } from 'react-native';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  Button,
  TextInput,
  View,
} from 'react-native';

import TextLink from 'react-native-text-link';

import Notification from 'Tools/Notification';
import axios from 'axios';

interface RegisterPageProps {
  navigation: NativeStackNavigationProp<any, 'default'>;
}

let no = 0;

const RegisterPage = ({navigation}: RegisterPageProps) => {
  
  const [request, req] = useState("");
  const [type, setType] = useState("");
  const [response, ChangeResponse] = useState<string>("");

  const showAlert = (script: any, type: any) => {
    req(script + "; " + no);
    setType(type);
    no += 1;
  }

  const [email, setEmail] = useState("");
  const [id, setID] = useState("");
  const [pw, setPW] = useState("");
  const [pwCheck, setPWCheck] = useState("");
  
  useEffect(() => {
    if(response == "Success") {
      showAlert("계정이 생성되었습니다!", "CreatedAccount");
      ChangeResponse("");
    }
    else if(response != "") {
      console.log(response);
      showAlert(response, "error");
      ChangeResponse("");
    }
  }, [response])

  const checkInput = () => {
    // 이메일 확인
    if(email == "") {
      showAlert("전자 우편 주소를 입력해 주세요.", "error");
      return;
    }
    else if(email.indexOf("@") == -1)
      setEmail(email + "@clearity.co.kr");
    else if(email.split("@")[1] != "clearity.co.kr") {
      showAlert("유효한 전자 우편 주소가 아닙니다.\nclearity.co.kr을 사용해 주세요.", "error");
      return;
    }
    
    if(id == "") {
      showAlert("계정(ID)을 입력해 주세요.", "error");
      return;
    }
    else if(pw == "") {
      showAlert("비밀번호를 입력해 주세요.", "error");
      return;
    }
    else if(pwCheck == "") {
      showAlert("비밀번호 확인란을 입력해 주세요.", "error");
      return;
    }
    else if(pw != pwCheck) {
      showAlert("비밀번호와 확인이 일치하지 않습니다.", "error");
      return;
    }
    
      try {
        const url = 'http://10.0.2.2:5000/register';

        const options = {
            "id": id,
            "pw": pw,
            "email": email
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
      <Text style={styles.Title}>회원 가입</Text>

      <TextInput
          style={styles.TextInput} 
          autoCapitalize="none"
          placeholder="전자 우편 주소 (ex12@clearity.co.kr)"
          onChangeText={setEmail}
          value={email} />
      <TextInput
          style={styles.TextInput} 
          autoCapitalize="none"
          placeholder="계정(ID)"
          onChangeText={setID}
          value={id} />
      <TextInput
          secureTextEntry
          style={styles.TextInput}
          placeholder="비밀번호 (15자 이내)"
          onChangeText={setPW}
          value={pw} />
      <TextInput
          secureTextEntry
          style={styles.TextInput}
          placeholder="비밀번호 확인"
          onChangeText={setPWCheck}
          value={pwCheck} />
      <View style={styles.BtnContainer}>
      <Button color='#399DF9'
              title="회원 가입"
              onPress={checkInput} />
      </View>

      <View style={styles.registerView}>
        <Text style={styles.notice}>이미 가입하셨나요?</Text>
        <TextLink links={[
                        {
                          text: '들어가기',
                          onPress: () => navigation.navigate('login'),
                        },
                      ]}
                  textStyle={styles.register}
                  textLinkStyle={styles.register}>
                      들어가기
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

    width: '100%',
    height: '100%'
  },

  Title: {
    position: 'relative',

    fontSize: 45,
    color: 'white',

    marginBottom: 20,
    fontFamily: 'NotoSansKR-Medium'
  },

  BtnContainer: {
    width: '45%',

    marginTop: 20,
    borderRadius: 10
  },

  TextInput: {
    backgroundColor: 'white',
    width: '70%',

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
    height: '100%'
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
    fontFamily: 'NotoSansKR-Light'
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

export default RegisterPage;
