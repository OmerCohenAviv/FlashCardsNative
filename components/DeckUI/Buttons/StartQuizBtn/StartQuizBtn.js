import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const startQuizBtn = ( props ) => {
    return (
        <View style={{marginTop: 10}}>
            <TouchableOpacity style={styles.btn}>
                <Text>
                    Start Quiz!
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    btn: {
        padding: 10,
        backgroundColor: 'rgb(252, 157, 3)',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 7
    }

})


export default startQuizBtn;