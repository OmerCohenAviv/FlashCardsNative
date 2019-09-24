import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';



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
        }
        console.log(nextQuestion)
        console.log(this.state.correctAnswers)
        this.setState((prevState) => ({
            correctAnswers: prevState.correctAnswers + score,
            displayedQuestion: nextQuestion,
            displayAnswer: false,
        }))

    }
    render() {
        let showCorrectType = ''
        if (this.state.displayedQuestion !== '' && this.state.displayedQuestion !== undefined) {
            showCorrectType = (
                <Text>
                    {this.state.displayedQuestion.question}
                </Text>
            )
            if (this.state.displayAnswer) {
                showCorrectType = (
                    <Text>
                        {this.state.displayedQuestion.answer}
                    </Text>

                )
            }
            if (this.state.finished) {
                showCorrectType = (
                    <Text>You Finished the Deck, You had {this.state.correctAnswers} Goodjob</Text>
                )
            }
        }
        return (
            <View style={{ flex: 1 }}>
                <Text>
                    {showCorrectType}
                </Text>
                <TouchableOpacity onPress={!this.state.finished ? this.showAnswerHandler : this.showAnswerHandler }>
                    {
                        this.state.displayAnswer ? <Text>Please ANSWER FIRST</Text>
                            : this.state.finished ? <Text>Reset</Text> : <Text>SHOW ANSWER</Text>
                    }
                </TouchableOpacity>
                {
                    this.state.displayAnswer && !this.state.finished ?
                        <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                            <TouchableOpacity onPress={() => this.scoreNextQuestion('right')} style={{ color: 'green' }}>
                                <Text>
                                    Correct
                            </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.scoreNextQuestion('wrong')} style={{ color: 'red' }}>
                                <Text>
                                    Incorrect
                            </Text>
                            </TouchableOpacity>
                        </View>
                        : this.state.finished ? <Text>AWESOME JOB</Text> : <Text>Please Answer First before choosing If u were right</Text>
                }

            </View>
        );
    };
}


export default Quiz;