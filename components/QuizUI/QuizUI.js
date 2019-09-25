import React from 'react';
import { View, StyleSheet } from 'react-native';
import QuizTitle from './QuizTitle/QuizTitle';
import Di


const Quiz = (props) => {
    const { deckName, totalCards, currentCardPosition, toDisplayQuestion} = props
    return (
        <View style={styles.container}>
            <View>
                <QuizTitle 
                currentCardPosition={currentCardPosition}
                totalCards={totalCards}
                deckName={deckName}  />
            </View>
            <View>
                {
                    toDisplayQuestion ? <DisplayQuestion /> : <DisplayAnswer />
                }
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})


export default Quiz;