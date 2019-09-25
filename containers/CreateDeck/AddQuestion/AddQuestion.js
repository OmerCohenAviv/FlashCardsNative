import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { addCardToDeck } from '../../AsyncStorage/AsyncStorageHelpers/AsyncStorageHelpers';
import AddQuestionUI from '../../components/AddQuestionUI/AddQuestionUI';

class AddQuestion extends Component {
    state = {
        deck: '',
        questionText: {
            value: '',
            valid: false
        },
        answerText: {
            value: '',
            valid: false
        },
    }
    componentDidMount() {
        const { deck } = this.props.navigation.state.params
        this.setState({ deck: deck })
    };
    submitQuestionHandler = () => {
        const newQuestion = {
            question: this.state.questionText.value,
            answer: this.state.answerText.value
        }
        addCardToDeck(this.state.deck.title, newQuestion, this.state.deck)
        const a = this.state.deck.questions.push(newQuestion)
        this.props.navigation.navigate('Deck', {
            deckData: null,
        });
    };
    changeTextHandler = (text, type) => {
        const textValid = text.trim() !== ''
        const updatedText = {
            ...this.state[type],
            value: text,
            valid: textValid,
        }
        this.setState({ [type]: updatedText })
    };
    render() {
        return (
            <View style={{flex: 1}}> 
                <AddQuestionUI
                    valid={!(this.state.questionText.valid === true && this.state.answerText.valid === true)}
                    change={this.changeTextHandler}
                    submit={this.submitQuestionHandler}
                />
            </View>
        );
    };
};
export default AddQuestion;
