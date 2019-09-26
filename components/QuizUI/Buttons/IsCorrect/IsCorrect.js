import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';


const isCorrect = (props) => {
    const { scoreNextQuestion } = props
    return (
        <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
            <TouchableOpacity
                style={styles.correctButton}
                onPress={() => scoreNextQuestion('right')}>
                <Text>
                    Correct
                </Text>
            </TouchableOpacity >
            <TouchableOpacity
                onPress={() => scoreNextQuestion('wrong')}
                style={styles.wrongButton}>
                <Text>
                    InCorrect
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    correctButton: {
        marginTop: 8,
        marginLeft: 8,
        padding: 10,
        backgroundColor: 'rgb(3, 148, 252)',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 7,
    },
    wrongButton: {
        marginTop: 8,
        marginLeft: 8,
        padding: 10,
        backgroundColor: 'rgb(199, 80, 80)',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 7,
    },
})

export default isCorrect;