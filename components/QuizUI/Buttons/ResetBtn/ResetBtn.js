import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const resetBtn = (props) => {
    const { resetQuiz,backToDeck } = props
    return (
        <View>
            <TouchableOpacity
                onPress={resetQuiz}
                style={styles.resetButton}>
                <Text>
                    Reset Quiz
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={backToDeck}
                style={styles.backButton}>
                <Text>
                    Back To Deck
                </Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 20
    },
    resetButton: {
        marginTop: 8,
        marginLeft: 8,
        padding: 10,
        backgroundColor: 'rgb(199, 80, 107)',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 7,
    },
    backButton: {
        marginTop: 8,
        marginLeft: 8,
        padding: 10,
        backgroundColor: 'rgb(199, 195, 80)',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 7,
    },

});


export default resetBtn;