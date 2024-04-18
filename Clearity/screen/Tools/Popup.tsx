import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  Dimensions,
} from 'react-native';

const Popup = (props: any) => {

    const navigation = useNavigation();
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    let response;

    const onPressModalClose = () => {
        setIsModalVisible(false);
    }

    const moveToBack = () => {
        navigation.goBack()
    }

    useEffect(() => {
        response = props.request.split(';')[0];
        if(response == "") return
        setIsModalVisible(true)
    }, [props.request])

    const Type = () => {
        if(props.type == "error")
            return <Pressable onPress={onPressModalClose}><Text>확인</Text></Pressable>
        else if(props.type == "CreatedAccount")
            return <Pressable onPress={moveToBack}><Text>확인</Text></Pressable>
    }

    return (
        <View style={{marginBottom: 1}}>
            <Modal
                style={{}}
                animationType="slide"
                visible={isModalVisible}
                transparent={true}
            >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View>
                        <Text style={styles.modalTextStyle}>{props.request.split(';')[0]}</Text>
                    </View>
                    {Type()}
                </View>
            </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
  
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

export default Popup;