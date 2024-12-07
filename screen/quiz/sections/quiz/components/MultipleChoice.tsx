import { Question } from "../../../../Quiz/Data/questionList";
import { ScrollView, View, Text, StyleSheet } from "react-native";

interface MultipleChoice {
  currentQuestion: Question;
  readOnly: boolean;
}

const MultipleChoice: React.FC<MultipleChoice> = ({ currentQuestion, readOnly }) => {
  return (
    <View style={styles.SelContainer}>
          <ScrollView nestedScrollEnabled>
            <View style={styles.SelectContainer}>
              {['item1', 'item2', 'item3', 'item4', 'item5'].map(
                (item, index) =>
                  currentQuestion[item as keyof Question] && (
                    <View key={index} style={[styles.item, readOnly && { width: '100%'}]}>
                      <Text
                        style={[
                          styles.itemDesc,
                          readOnly &&
                            currentQuestion.Corr === index + 1 && {
                              color: '#E04E92',
                            },
                        ]}>
                        {`①②③④⑤`[index]}{' '}
                        {currentQuestion[item as keyof Question]}
                      </Text>
                      {readOnly && (
                        <Text style={styles.reason}>
                          {
                            currentQuestion[
                              `reason${index + 1}` as keyof Question
                            ]
                          }
                        </Text>
                      )}
                    </View>
                  )
              )}
            </View>
          </ScrollView>
        </View>
  )
}

const styles = StyleSheet.create({
  SelContainer: {
    width: '90%',
    height: '40%',
    margin: 15,

    padding: 15,
  },
  SelectContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  item: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginRight: 15,
    marginBottom: 20,
  },
  itemDesc: {
    fontSize: 19,
    fontFamily: 'GowunBatang',
  },
  reason: {
    fontSize: 13,
    fontFamily: 'GowunBatang',
    flexShrink: 1,
    flexWrap: 'wrap',
  },
})

export default MultipleChoice;