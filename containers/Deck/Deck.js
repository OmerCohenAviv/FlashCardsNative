import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import TextHeader from '../../components/UI/TextHeader/TextHeader'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getDeck } from '../../AsyncStorage/AsyncStorageHelpers/AsyncStorageHelpers';

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
            questions: this.state.deckData.questions
        })
    };
    addQuestionHandler = () => {
        this.props.navigation.navigate('AddQuestion', {
            deck: this.state.deckData
        })
    }
    render() {
        let deckUI = <ActivityIndicator size="large" color="#0000ff" />
        if (this.state.deckData !== '' && this.state.deckData) {
            deckUI = (
                <View >
                    <View>
                        <TextHeader title={this.state.deckData.title} />
                    </View>
                    <View>
                        <Text style={styles.cardsCount}>
                            {`There are ${this.state.deckData.questions.length} Questions Inside!`}
                        </Text>
                    </View>
                    <View style={styles.buttons}>
                        <TouchableOpacity style={[styles.button, { backgroundColor: 'yellow' }]} onPress={() => this.addQuestionHandler()}>
                            <Text>Add Question</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: 'lightgreen' }]} onPress={() => this.startQuizHandler()}>
                            <Text>Start Quiz</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
        return (
            <View style={{ flex: 1 }} >
                {deckUI}
            </View>
        );
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