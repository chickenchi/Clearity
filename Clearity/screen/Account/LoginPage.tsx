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
  TouchableOpacity,
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

      <Image source={require('assets/images/Logo/Logo.png')} style={styles.logo} />

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

      <TouchableOpacity style={styles.Btn} onPress={checkInput}>
          <Text style={styles.BtnText}>들어가기</Text>
      </TouchableOpacity>

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
    backgroundColor: 'white',

    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  logo: {
    width: 150,
    height: 61,
    marginBottom: 45,
  },

  Btn: {
    width: '55%',
    height: 55,
    backgroundColor: '#399DF9',

    marginTop: 30,
    borderRadius: 10,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  BtnText: {
    color: 'white',
    fontSize: 17,

    fontFamily: 'Cafe24Oneprettynight',
  },

  TextInput: {
    backgroundColor: '#F2F2F2',
    width: '80%',
    height: 65,

    fontSize: 16,

    paddingLeft: 15,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 6,

    fontFamily: 'Cafe24Oneprettynight',
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
    marginRight: 16,
    
    fontSize: 16,
    color: '#A4A4A4',

    marginTop: 12,
    fontFamily: 'Cafe24Oneprettynight',
  },
  
  register: {
    fontSize: 16,
    color: 'black',
    textDecorationLine: 'underline',
    
    marginTop: 12,
    fontFamily: 'Cafe24Oneprettynight',
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
