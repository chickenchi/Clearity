import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AddWord, SettingWord } from 'Word/tool/AddingWord';
import { CheckNInsert } from 'Word/tool/CheckNInsert';
import { FillLack } from 'Word/tool/FillLack';
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  Button,
  TextInput,
} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { Multiset } from 'algorithm/Multiset';

interface CrosswordPageProps {
  navigation: NativeStackNavigationProp<any, 'default'>;
}

const maxLen = 7;
const wordCount = 7;

let space: number[][] = Array.from({ length: maxLen }, () => Array(maxLen).fill(0));

let crossword: string[][] = Array.from({ length: maxLen }, () => Array(maxLen).fill(""));
let cwDescription: string[][] = Array.from({ length: maxLen }, () => Array(maxLen).fill(""));
let cw: any[][] = Array.from({ length: maxLen }, () => Array(maxLen).fill(""));

const Crossword = ({navigation}: CrosswordPageProps) => {

  const [reset, resetter] = useState(0);
  const [desc, ChangeDesc] = useState<string>("");
  const [titleDesc, ChangeTitleDesc] = useState<string>("");

  const Resetting = () => {
    space = Array.from({ length: maxLen }, () => Array(maxLen).fill(0));
    
    crossword = Array.from({ length: maxLen }, () => Array(maxLen).fill(""));
    cwDescription = Array.from({ length: maxLen }, () => Array(maxLen).fill(""));
    cw = Array.from({ length: maxLen }, () => Array(maxLen).fill(""));
    
    let visited = new Array(wordCount);
    let cnt: number = 0;
    
    let direction: Array<[number, number, number, string]> = []; // col, row, length
    
    const distinct: Multiset<number[]> = new Multiset<number[]>();

    SettingWord();

    return;

    while(cnt < wordCount)
    {
      if(CheckNInsert(distinct, direction, space, cnt, maxLen)) cnt += 1
    }

    for(var i=0; i<wordCount; i++) FillLack(direction[i], i, space, direction, distinct, maxLen);

    for(var i=0; i<wordCount; i++) AddWord(direction[i], i, crossword, maxLen, wordCount, distinct, visited, direction, cwDescription);

    for(let i=0; i<maxLen; i++)
      for(let j=0; j<maxLen; j++)
        if(space[i][j] != 0)
          cw[i][j] = <TextInput onFocus={() => ChangeDescription(i, j)} maxLength={1} id={crossword[i][j]} style={styles.inputWord}></TextInput>

    resetter(reset + 1);
  }

  useEffect(() => {
      if(reset == 0) Resetting()
  })

  const BacktoHome = () => {
      navigation.navigate("home");
  }

  const ChangeDescription = (i: any, j: any) => {
    let descSet: string[] = cwDescription[i][j].split("; ");
    let title: string = descSet[0];
    let description: string = descSet[1];

    ChangeTitleDesc("<" + title + ">")
    ChangeDesc(description)
  }

  const Reshake = () => {
    resetter(0)
  }

  return (
      <SafeAreaView style={styles.BG}>
          <View style={styles.tbContainer}>
              <Table borderStyle={{borderWidth: 2, borderColor: '#999999'}}>
                  <Rows data={cw} textStyle={styles.tbText} />
              </Table>
          </View>
          <View style={styles.touchableContainer}>
              <TouchableOpacity style={styles.backBtn} onPress={BacktoHome}>
                  <Text style={styles.backBtnTxt}>나가기</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.backBtn} onPress={Reshake}>
                  <Text style={styles.backBtnTxt}>다시 섞기</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.description}>
            <Text style={styles.dTitle}>{titleDesc}</Text>
            <Text style={styles.dDescription}>{desc}</Text>
          </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  BG: {
    backgroundColor: '#ffffff',

    alignItems: 'center',
    flex: 1,
  },

  tbContainer: {
    width: '100%',
    height: '50%',
    padding: 20,
    paddingTop: 30,
  },
  tbText: {
    color: 'white',
    textAlign: 'center',
    margin: 6,
    padding: 10,
  },
  input: {
    backgroundColor: 'white',
    textAlign: 'center',
    flex: 1,
  },

  touchableContainer: {
    width: '80%',
    position: 'absolute',
    bottom: 20,
    marginBottom: 20,
    flexDirection: 'row',
  },

  backBtn: {
    flex: 1,
    backgroundColor: '#E04E92',
    padding: 10,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 8,
  },
  backBtnTxt: {
    fontFamily: 'Inter',
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  inputWord: {
    fontFamily: 'Inter',
    backgroundColor: '#E04E92',
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
  },

  description: {
    position: 'absolute',
    width: '90%',
    height: '40%',
  },
  dTitle: {
    fontFamily: 'Inter',
    color: '#222222',
    fontSize: 25,
  },
  dDescription: {
    fontFamily: 'Inter',
    marginTop: 15,
    fontSize: 20,
  },
});

export default Crossword;