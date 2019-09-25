import React from 'react';
import { View, TextInput, StyleSheet} from 'react-native';

const answerInput = (props) => {
    const { value, change } = props
    return (
        <View style={styles.container}>
        <TextInput
            style={styles.textInput}
            value={value}
            onChangeText={(text) => change(text, 'questionText')}
            placeholder='Question!!'
        />
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 7,
        marginRight: 15,
        marginLeft: 15
    },
    textInput: {
        textAlignVertical: 'center',
        textAlign: 'justify',
        justifyContent: 'center',
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 6
    }
})

export default answerInput;