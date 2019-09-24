import React, { Component }from 'react';
import { View } from 'react-native'



class Quiz extends Component {
    state = {
        questions: ''
    };

    componentDidMount() {
        console.log(props)
    }
    render() {
        return (
            <View>
                <Text>
                    Quiz Page
                </Text>
            </View>
        );
    };
}


export default Quiz;