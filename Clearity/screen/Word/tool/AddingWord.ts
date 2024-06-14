import { Multiset } from "algorithm/Multiset";
import { SearchWord, InsertWord } from "./SearchingWord";

let wordList: any[] = [];
let wordDescription: any[] = [];

export const SettingWord = () => {
    if(wordList.length) return;

    wordList = InsertWord(wordList);
    console.log(wordList)
    // wordDescription = InsertWord(wordList); // [제목; 내용]
}

export const AddWord = (marking: any, index: number, crossword: string[][], maxLen: number, wordCount: number, distinct: Multiset<number[]>, visited: number[], direction: Array<[number, number, number, string]>, cwDescription: string[][]) => {
    let col: number = marking[0], row: number = marking[1], length: number = marking[2];
    let dir: string = marking[3];

    let colRange = [col, col];
    let rowRange = [row, row];

    if(dir === "up")
        colRange[0] -= length + 1;
    if(dir === "down")
        colRange[1] += length - 1;
    if(dir === "left")
        rowRange[0] -= length + 1;
    if(dir === "right")
        rowRange[1] += length - 1;

    let overlapping = 0;

    for(let i=0; i<wordCount; i++)
    {
        for(let item of distinct.entries())
        {
            let opp: number;
            if(item[0][0] === index)
                opp = item[0][1];
            else if(item[0][1] === index)
                opp = item[0][0];
            else continue;

            let checked = (opp === index) ? true : false;

            if(checked && !visited[opp])
            {
                overlapping += 1;
                break;
            }
        }
    
        if(overlapping)
            if(!visited[i])
            {
                visited[i] = 1;

                AddWord(direction[i], i, crossword, maxLen, wordCount, distinct, visited, direction, cwDescription);
            }
    }
    
    let free = true;
    
    let letter: string[] = Array(maxLen).fill("");
    letter.length = maxLen;

    let wordSize = wordList[length].length;
    let random = Math.floor(Math.random() * wordSize);
    let word = wordList[length][random];
    let description = wordDescription[length][random];

    let s = 0;
    
    for(let i=colRange[0]; i<=colRange[1]; i++)
        for(let j=rowRange[0]; j<=rowRange[1]; j++)
        {
            if(crossword[i][j])
            {
                free = false;
                letter[s] = crossword[i][j];
                s += 1;
            }
        }

    if(!free)
        word = SearchWord(letter, colRange, rowRange, length, wordList); 

    AssigningLetter(colRange, rowRange, word, crossword, description, cwDescription)
}

const AssigningLetter = (colRange: number[], rowRange: number[], word: string, crossword: string[][], description: string, cwDescription: string[][]) => {
    let s = 0;
    
    for(let i=colRange[0]; i<=colRange[1]; i++)
        for(let j=rowRange[0]; j<=rowRange[1]; j++)
        {
            crossword[i][j] = word[s];
            cwDescription[i][j] = description;
            s += 1;
        }
}