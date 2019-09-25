import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import CreateTitle from './AddTitle/AddTitle';
import AnswerInput from './Inputs/AnswerInput';
import QuestionInput from './Inputs/QuestionInput';

const createQuestionUI = (props) => {
    const { valid, change, submit } = props
    return (
        <View style={styles.container}>
            <View>
                <CreateTitle />
            </View>
            <View >
                <QuestionInput valid={valid} change={change} />
                <AnswerInput valid={valid} change={change} />
            </View>
            <View >
                <TouchableOpacity
                    onPress={submit}
                    style={valid ? styles.btnDisabled : styles.btn}
                    disabled={valid}>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold' }} >
                        Submit
                </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
    },
    btn: {
        width: '40%',
        padding: 10,
        backgroundColor: 'rgb(3, 148, 252)',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 7,
        marginTop: 15,
        alignSelf: 'center',
    },
    btnDisabled: {
        width: '40%',
        padding: 10,
        backgroundColor: 'rgb(235, 91, 52)',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 7,
        marginTop: 15,
        alignSelf: 'center',
    }
});

export default createQuestionUI;