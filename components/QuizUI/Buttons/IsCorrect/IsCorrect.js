import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';


const isCorrect = (props) => {
    return (
        <View>
            <TouchableOpacity>
                <Text>
                    Correct
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>
                    InCorrect
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default isCorrect;