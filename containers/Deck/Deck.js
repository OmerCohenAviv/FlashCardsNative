import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import TextHeader from '../../components/UI/TextHeader/TextHeader'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getDeck } from '../../AsyncStorage/AsyncStorageHelpers/AsyncStorageHelpers';
import DeckUI from '../../components/DeckUI/DeckUI'

class Deck extends Component {
    state = {
        deckData: '',
    }
    componentDidMount() {
        const { deckData } = this.props.navigation.state.params
        this.setState({ deckData: deckData })
    }
    startQuizHandler = () => {
        this.props.navigation.navigate('Quiz', {
            questions: this.state.deckData.questions,
            deckName: this.state.deckData.title
        })
    };
    addQuestionHandler = () => {
        this.props.navigation.navigate('AddQuestion', {
            deck: this.state.deckData
        })
    }
    render() {
        if (this.state.deckData) {
            return (
                <View style={{ flex: 1 }} >
                    <DeckUI
                    startQuiz={this.startQuizHandler}
                    addQuestion={this.addQuestionHandler}
                    questionsInside={this.state.deckData.questions.length}
                    deckName={this.state.deckData.title}  />
                </View>
            );
        }
        else return (
            <View>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        )
    };
};

const styles = StyleSheet.create({
    cardsCount: {
        fontWeight: 'bold'
    },
    buttons: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        marginTop: 8,
        padding: 10,

    }
})


export default Deck;