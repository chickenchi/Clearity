import RNFS from 'react-native-fs';

let txt: string = "";

type Words = {
    [key: string]: string
}

const tobin = (k: number) => {
    if(Math.floor(k / 2)) tobin(Math.floor(k / 2));
    txt += k % 2 ? "고" : "수";
  }

export const InsertWord = (wordList: any[]) => {

    /* 
    형식: 
          [****],[*******], ...
    */

    // const pattern = /^가.{1}나.{2}$/;

    // console.log(words.filter(w => pattern.test(w)));
          

    return wordList
}


export const SearchWord = (letter: any, colRange: any, rowRange: any, length: number, wordList: any[]) => {
    let pass = false;
    let word;
    let wordList_Length = wordList[length].length;

    while (!pass) {
        pass = true;
        let random = Math.floor(Math.random() * wordList_Length);
        word = wordList[length][random];

        let s = 0;
        for (let i = colRange[0]; i <= colRange[1] && pass; i++)
            for (let j = rowRange[0]; j <= rowRange[1]; j++) {
                if (word[s] !== letter[Math.floor(s)] && letter[Math.floor(s)] !== "") {
                    pass = false;
                    break;
                }
                s += 2;
            }

    }

    return word;
};