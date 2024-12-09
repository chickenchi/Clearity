import React, {useState, useEffect, useRef} from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';

import {useRecoilState} from 'recoil';
import {
  currentQuestionNoState,
  currentQuestionState,
  playingState,
  readOnlyState,
  selectedQuestionState,
  showTagState,
} from '../../../atoms/quiz/QuizAtom';

/* Tools */
import {ShowingImage} from './components/ShowingImage';

/* Components */
import {questionList} from '@quiz/data/QuestionList';
import SelectPopup from '@main/components/popups/StartSelectPopup';
import {Tag} from './components/Tag';
import {
  AvailableBoard,
  InsertTagList,
  QuestionStyling,
  SelectQuestion,
} from './QuizFunction';
import ImageContainer from './components/ImageContainer';
import MultipleChoice from './components/MultipleChoice';
import DrawingBoard from './components/DrawingBoard';
import WritingBoard from './components/WritingBoard';

const Quiz = () => {
  const [readOnly] = useRecoilState(readOnlyState);
  const [, setIsPlaying] = useRecoilState(playingState);
  const [currentQuestionNo, setCurrentQuestionNo] = useRecoilState(
    currentQuestionNoState,
  );
  const [currentQuestion, setCurrentQuestion] =
    useRecoilState(currentQuestionState);
  const [reqSelQ, requestingSelectingQuestion] = useRecoilState(
    selectedQuestionState,
  );
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
      {!readOnly && AvailableBoard({setSubscreen, subscreen})}
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
      {subscreen === 'drawingBoard' && <DrawingBoard />}
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
