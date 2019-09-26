import React from 'react';
import { View, StyleSheet } from 'react-native';
import QuizTitle from './QuizTitle/QuizTitle';
import DisplayQuestion from './DisplayQA/Question/Question';
import DisplayAnswer from './DisplayQA/Answer/Answer';
import ShowAnswerBtn from './Buttons/ShowAnswerBtn/ShowAnswerBtn';
import ShowScoreButtons from './Buttons/IsCorrect/IsCorrect';
import Finished from './Finished/Finished';

const Quiz = (props) => {
    const { deckName,
        backToDeck,
        resetQuiz,
        finished,
        correctAnswers,
        totalCards,
        currentCardPosition,
        toDisplayQuestion,
        showAnswer,
        scoreNextQuestion,
        currentQuestion } = props
    return (
        <View style={styles.container}>
            <View>
                <QuizTitle
                    currentCardPosition={currentCardPosition}
                    totalCards={totalCards}
                    deckName={deckName} />
            </View>
            {
                !finished
                    ? <View >
                        <View style={styles.display}>
                            {
                                toDisplayQuestion
                                    ? <DisplayAnswer answer={currentQuestion.answer} />
                                    : <DisplayQuestion question={currentQuestion.question} />
                            }

                        </View>
                        <View>
                            {
                                !toDisplayQuestion
                                    ? <ShowAnswerBtn showAnswer={showAnswer} />
                                    : <ShowScoreButtons scoreNextQuestion={scoreNextQuestion} />
                            }
                        </View>
                    </View>
                    : <Finished  
                    backToDeck={backToDeck}
                    resetQuiz={resetQuiz} 
                    correctAnswers={correctAnswers}/>
            }
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    display: {
        justifyContent: 'center',
        marginTop: 45,
        alignItems: 'center'
    }
})


export default Quiz;