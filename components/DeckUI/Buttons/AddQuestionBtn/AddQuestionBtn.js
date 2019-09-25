import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const addQuestionBtn = ( props ) => {
    return (
        <View>
            <TouchableOpacity style={styles.btn} onPress={props.addQuestion}>
                <Text>
                    Add Card!
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    btn: {
        padding: 10,
        backgroundColor: 'rgb(66, 245, 149)',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 7
    }

})


export default addQuestionBtn;