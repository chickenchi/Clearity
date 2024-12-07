import React, { useState, useEffect, useRef } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  TextInput,
} from 'react-native';
import Slider from '@react-native-community/slider';
import SelectPopup from '../../Popup/StartSelectPopup';
import { Draw, ShowImage, Write } from '../svgs/QuizSvg';
import { questionList, Question } from '../Data/questionList';

import { useRecoilState } from 'recoil';
import {
  checkedQuestionState,
  currentQuestionNoState,
  currentQuestionState,
  playingState,
  readOnlyState,
  resultState,
  selectedQuestionState,
  showedExplanationState,
  showedResultState,
  showListState,
  showTagState,
  timeState,
} from '../../../Atoms/Quiz/QuizAtom';

/* Tools */
import { Tag } from '../../Quiz/Section/Tools/Tag';
import { ShowingImage } from '../../Quiz/Section/Tools/ShowingImage';

/* Components */
import MultipleChoice from '../../Quiz/Section/Components/Quiz/MultipleChoice';
import DrawingBoard from '../../Quiz/Section/Components/Quiz/DrawingBoard';
import WritingBoard from '../../Quiz/Section/Components/Quiz/WritingBoard';
import ImageContainer from '../../Quiz/Section/Components/Quiz/ImageContainer';
import {
  AvailableBoard,
  InsertTagList,
  PauseArt,
  QuestionStyling,
  SelectQuestion,
  ShowAlert,
} from '../../Quiz/Section/Tools/QuizFunction';

const Quiz = () => {
  const [readOnly] = useRecoilState(readOnlyState);
  const [, setIsPlaying] = useRecoilState(playingState);
  const [currentQuestionNo, setCurrentQuestionNo] = useRecoilState(currentQuestionNoState);
  const [currentQuestion, setCurrentQuestion] = useRecoilState(currentQuestionState);
  const [reqSelQ, requestingSelectingQuestion] = useRecoilState(selectedQuestionState);
  const [requestedShowTag, requestingShowTag] = useRecoilState(showTagState);

  const [tagList, setTagList] = useState<JSX.Element[]>([]);
  const [currentOpacity, setCurrentOpacity] = useState(80);

  const [request, setRequest] = useState('');
  const [type, setType] = useState('');

  const [showedTag, setShowedTag] = useState<boolean>(false);

  /** image, drawingBoard, writingBoard */
  const [subscreen, setSubscreen] = useState<string>('none');

  let no = useRef(0);

  useEffect(() => {
    if (reqSelQ) {
      SelectQuestion({
        readOnly,
        questionList,
        currentQuestionNo,
        setIsPlaying,
        setCurrentQuestionNo,
        setCurrentQuestion,
        setTagList,
        setSubscreen,
        setRequest,
        no,
        setType,
      });
      requestingSelectingQuestion(!reqSelQ);
    }
    if (readOnly) {
      SelectQuestion({
        readOnly,
        questionList,
        currentQuestionNo,
        setIsPlaying,
        setCurrentQuestionNo,
        setCurrentQuestion,
        setTagList,
        setSubscreen,
        setRequest,
        no,
        setType,
      });
    }
    if (requestedShowTag) {
      InsertTagList(questionList[parseInt(currentQuestionNo) - 1].tag, {
        setTagList,
        setRequest,
        no,
        setType,
      });
      requestingShowTag(false);
    }
  }, [reqSelQ, readOnly, requestedShowTag]);

  return (
    <SafeAreaView style={styles.BG}>
      <SelectPopup request={request} type={type} />
      <View style={styles.BasicContainer}>
        <Tag
          setShowedTag={setShowedTag}
          showedTag={showedTag}
          tagList={tagList}
        />
      </View>
      {!readOnly && AvailableBoard({ setSubscreen, subscreen })}
      <View style={styles.QuestionContainer}>
        <Text style={styles.examNum}>{currentQuestion.questionNo}</Text>
        <Text style={styles.question}>
          {QuestionStyling(currentQuestion.question)}
        </Text>
      </View>

      {currentQuestion.type === '다지선다' && (
        <MultipleChoice currentQuestion={currentQuestion} readOnly={readOnly} />
      )}

      {(currentQuestion.Image !== 'none' || currentQuestion.Description) && (
        <ShowingImage setSubscreen={setSubscreen} subscreen={subscreen} />
      )}
      {subscreen === 'drawingBoard' && (
        <DrawingBoard />
      )}
      {subscreen === 'writingBoard' && <WritingBoard />}
      {subscreen === 'image' && (
        <ImageContainer
          setCurrentOpacity={setCurrentOpacity}
          currentOpacity={currentOpacity}
          setSubscreen={setSubscreen}
          currentQuestion={currentQuestion}
          subscreen={subscreen}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  BG: {
    flex: 1,
    alignItems: 'center',
  },
  BasicContainer: {
    position: 'relative',
    width: '90%',
    flexDirection: 'row',
    marginLeft: 15,
    marginBottom: 30,
  },
  QuestionContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  examNum: {
    marginLeft: 20,
    marginRight: 20,

    fontFamily: 'GowunBatang',
    fontSize: 37,
  },
  question: {
    width: '80%',
    marginRight: 15,

    fontFamily: 'GowunBatang',
    fontWeight: 'normal',
    fontSize: 21,
  },
});

export default Quiz;
