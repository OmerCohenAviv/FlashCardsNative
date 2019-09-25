import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { addCardToDeck } from '../../AsyncStorage/AsyncStorageHelpers/AsyncStorageHelpers';
import TextHeader from '../../components/UI/TextHeader/TextHeader';

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
    }

    submitQuestionHandler = () => {
        const newQuestion = {
            question: this.state.questionText.value,
            answer: this.state.answerText.value
        }
        addCardToDeck(this.state.deck.title, newQuestion, this.state.deck)
        const a = this.state.deck.questions.push(newQuestion)
        this.props.navigation.navigate('Deck', {
            deckData: null,
        })
    }
    changeTextHandler = (text, type) => {
        const textValid = text.trim() !== ''
        const updatedText = { 
            ...this.state[type],
            value: text,
            valid: textValid,
        }
        this.setState({ [type]: updatedText })
    }
    render() {

        return (
            <View style={{ flex: 1 }}>
                <TextHeader title='Add Question' />
                <View>
                    <TextInput
                        placeholder='QUESTION Goes here!'
                        style={{ justifyContent: 'center', borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={(text) => this.changeTextHandler(text, 'questionText')}
                        next
                        value={this.state.questionText.value} />
                    <TextInput
                        placeholder='ANSWER Goes here!'
                        style={{ justifyContent: 'center', borderColor: 'gray', borderWidth: 1, marginTop: 25 }}
                        onChangeText={(text) => this.changeTextHandler(text, 'answerText')}
                        value={this.state.answerText.value} />
                    <TouchableOpacity
                        onPress={this.submitQuestionHandler}
                        disabled={!(this.state.questionText.valid === true && this.state.answerText.valid === true)}
                        style={!(this.state.questionText.valid === true && this.state.answerText.valid === true) ? styles.SubmitDisabledBtn : styles.SubmitBtn}
                    >
                        <Text>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    SubmitBtn: {
        alignItems: 'center',
        marginTop: 15,
        padding: 7,
        backgroundColor: 'lightgreen'
    },
    SubmitDisabledBtn: {
        alignItems: 'center',
        marginTop: 15,
        padding: 7,
        backgroundColor: 'red'
    }
})

export default AddQuestion;
