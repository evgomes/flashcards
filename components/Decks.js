import React, { Component, Fragment } from 'react'
import { StyleSheet, TouchableOpacity } from "react-native"
import { Card, CardItem, Text, Body } from 'native-base'
import { connect } from 'react-redux'
import { handleGetAllDecks } from '../actions/decks'
import { isObjectEmpty, buildDeckSubtitle } from '../helpers/common'
import Loading from '../components/Loading'

class Decks extends Component {

    componentDidMount() {
        this.props.getAllDecks()
    }

    deckNotFound = () => {
        setTimeout(() => {
            this.props.onDeckNotFound()
        }, 1000)
    }

    render() {
        const { decks } = this.props

        if (isObjectEmpty(decks)) {
            //this.deckNotFound()
            return <Text>No deck avaliable</Text>
        }

        return (
            <Fragment>
                {Object.keys(decks).map(key => (
                    <TouchableOpacity key={key} onPress={() => this.props.onDeckDetail(key)}>
                        <Card>
                            <CardItem>
                                <Body>
                                    <Text style={styles.title}>
                                        {decks[key].title}
                                    </Text>
                                    <Text>
                                        {buildDeckSubtitle(decks[key])}
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>
                ))}
            </Fragment>

        );
    }
}

function mapStateToProps({ decks }) {
    return {
        decks
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllDecks: () => {
            dispatch(handleGetAllDecks())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Decks)

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#022B3A'
    }
});