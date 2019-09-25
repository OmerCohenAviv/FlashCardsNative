import React from 'react';
import { View, StyleSheet } from 'react-native';
import QuizTitle from './QuizTitle/QuizTitle';
import DisplayQuestion from './DisplayQA/Question/Question';
import DisplayAnswer from './DisplayQA/Answer/Answer';
import ShowAnswerBtn from './Buttons/ShowAnswerBtn/ShowAnswerBtn';


const Quiz = (props) => {
    const { deckName,
        totalCards,
        currentCardPosition,
        toDisplayQuestion,
        showAnswer,
        currentQuestion } = props
    return (
        <View style={styles.container}>
            <View>
                <QuizTitle
                    currentCardPosition={currentCardPosition}
                    totalCards={totalCards}
                    deckName={deckName} />
            </View>
            <View style={styles.display}>
                {
                    toDisplayQuestion
                        ? <DisplayAnswer answer={currentQuestion.answer} />
                        : <DisplayQuestion question={currentQuestion.question} />
                }

            </View>
            <View>
                <ShowAnswerBtn showAnswer={showAnswer}/>
            </View>
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