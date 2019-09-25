import React, { Component } from 'react';
import { View } from 'react-native'
import QuizUI from '../../components/QuizUI/QuizUI';



class Quiz extends Component {
    state = {
        questions: '',
        displayedQuestion: '',
        displayAnswer: false,
        correctAnswers: 0,
        finished: false
    };
    componentDidMount() {
        let { questions } = this.props.navigation.state.params
        this.setState({ questions: questions, displayedQuestion: questions[0] })
    }
    showAnswerHandler = () => {
        this.setState((prevState) => ({
            displayAnswer: !prevState.displayAnswer
        }))
    }
    scoreNextQuestion = (answer) => {
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

    render() {
        console.log(this.state.displayedQuestion)
        return (
            <View style={{ flex: 1 }}>
                <QuizUI
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
}


export default Quiz;