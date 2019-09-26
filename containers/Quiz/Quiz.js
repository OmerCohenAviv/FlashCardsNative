import React, { Component } from 'react';
import { View,Text} from 'react-native'
import QuizUI from '../../components/QuizUI/QuizUI';
import {setLocalNotifications, clearLocalNotifications} from '../../AsyncStorage/Notifications/Notifications';


class Quiz extends Component {
    state = {
        questions: '',
        displayedQuestion: '',
        displayAnswer: false,
        correctAnswers: 0,
        finished: false
    };
    componentDidMount() {
        const { questions, deckData } = this.props.navigation.state.params
        this.setState({ questions: questions, displayedQuestion: questions[0], deckData: deckData })
    }
    showAnswerHandler = () => {
        this.setState((prevState) => ({
            displayAnswer: !prevState.displayAnswer
        }))
    }
    scoreNextQuestionHandler = (answer) => {
        console.log('next')
        let score = 0;
        if (answer === 'right') {
            score = 1;
        }
        let nextAnswer = this.state.questions.indexOf(this.state.displayedQuestion)
        nextAnswer = nextAnswer + 1
        const nextQuestion = this.state.questions[nextAnswer]
        if (nextQuestion === undefined) {
            return (
                this.setState((prevState) => ({
                    finished: true,
                    correctAnswers: prevState.correctAnswers + score,
                    displayAnswer: false,
                }))
            )
        };
        this.setState((prevState) => ({
            correctAnswers: prevState.correctAnswers + score,
            displayedQuestion: nextQuestion,
            displayAnswer: false,
        }))

    };
    backToDeckHandler = () => {
        const { navigation } = this.props
        const { deckData } = this.state.deckData
        navigation.navigate('Deck',{
        deckData: deckData
        })
        clearLocalNotifications()
        .then(setLocalNotifications)
    }
    resetQuizHandler = () => {
        let { questions } = this.props.navigation.state.params
        this.setState({
            correctAnswers: 0,
            finished: false,
            displayAnswer: false,
            displayedQuestion:  questions[0]
        }, () => {
        })
        clearLocalNotifications()
        .then(setLocalNotifications)
    }

    render() {
        if(!(this.state.questions === undefined || this.state.questions.length == 0)) {
        return (
            <View style={{ flex: 1 }}>
                <QuizUI
                    backToDeck={this.backToDeckHandler}
                    resetQuiz={this.resetQuizHandler}
                    correctAnswers={this.state.correctAnswers}
                    finished={this.state.finished}
                    scoreNextQuestion={this.scoreNextQuestionHandler}
                    showAnswer={this.showAnswerHandler}
                    toDisplayQuestion={this.state.displayAnswer}
                    currentQuestion={this.state.displayedQuestion}
                    currentCardPosition={this.state.questions.indexOf(this.state.displayedQuestion) + 1}
                    deckName={this.props.navigation.state.params.deckName}
                    totalCards={this.state.questions.length}
                />
            </View>
        )
        }
        else {
            return (
                <View style={{justifyContent:'center',flex: 1,alignItems:'center'}}>
                    <Text style={{fontSize: 29, fontWeight:'bold',fontStyle:'italic'}}>There is 0 Cards Inside, Please Add Atleast one to start the Quiz.</Text>
                </View>
            )
        }
    }
}


export default Quiz;