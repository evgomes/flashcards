import React, { Component } from 'react';
import { Text } from "native-base"

class NewDeck extends Component {
    static navigationOptions = {
        title: 'New Deck',
    }
    render() {
        return (
            <Text>
                New Deck
            </Text>
        );
    }
}

export default NewDeck;