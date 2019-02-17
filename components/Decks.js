import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity } from "react-native"
import { Card, CardItem, Text, Body } from 'native-base';

class Decks extends Component {
    render() {
        return (
            <TouchableOpacity onPress={() => alert('It works')}>
                <Card>
                    <CardItem>
                        <Body>
                            <Text style={styles.title}>
                                Udacity
                        </Text>
                            <Text>
                                3 cards
                        </Text>
                        </Body>
                    </CardItem>
                </Card>
            </TouchableOpacity>
        );
    }
}

export default Decks

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#022B3A'
    }
});