import React from 'react';
import { View, Text } from 'react-native';
import Reset from '../Buttons/ResetBtn/ResetBtn'


const finished = ( props ) => {
    const { correctAnswers, resetQuiz, backToDeck} = props
    return (
        <View>
            <Text>{`You Had ${correctAnswers} Correct answers`}</Text>
            <Reset resetQuiz={resetQuiz} backToDeck={backToDeck} />
        </View>
    );
};

export default finished;