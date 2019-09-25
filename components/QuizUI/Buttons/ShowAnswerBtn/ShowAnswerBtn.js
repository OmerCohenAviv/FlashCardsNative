import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const showAnswerBtn = (props) => {
    const { showAnswer } = props
    return (
        <View>
            <TouchableOpacity style={styles.btn} onPress={showAnswer}>
                <Text style={{ textAlign: 'center' }}>
                    Show Answer
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
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
})


export default showAnswerBtn;
