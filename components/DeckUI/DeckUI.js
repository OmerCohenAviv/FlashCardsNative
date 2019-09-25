import React from 'react';
import { View, StyleSheet } from 'react-native';
import QuestionsInisde from './QuestionsInside/QuestionsInside';
import TitleDeck from './TitleDeck/TitleDeck';
import AddQuestionBtn from './Buttons/AddQuestionBtn/AddQuestionBtn';
import StartQuestionBtn from './Buttons/StartQuizBtn/StartQuizBtn';

const deckUI = (props) => {
    return (
        <View style={styles.container}>
            <View>
                <TitleDeck title={props.deckName} />
                <QuestionsInisde
                    deckName={props.deckName}
                    questionsInside={props.questionsInside} />
            </View>
            <View style={styles.buttons}>
                    <AddQuestionBtn addQuestion={props.addQuestion}/>
                    <StartQuestionBtn startQuiz={props.startQuiz}/>
            </View>
        </View>
    );
};

styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
    },
    buttons: {
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default deckUI;