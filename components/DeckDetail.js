import React, { Component } from 'react'
import { View } from 'react-native'
import { StyleSheet } from "react-native"
import { connect } from 'react-redux'
import { Container, Content, Footer, FooterTab, Button, Text } from "native-base"
import { handleGetDeckDetail } from "../actions/deckDetail"
import { buildDeckSubtitle, isObjectEmpty } from '../helpers/common'

class DeckDetail extends Component {
    static navigationOptions = {
        title: "Deck's detail",
    }

    componentDidMount() {
        const { id } = this.props.navigation.state.params
        this.props.getDeckDetail(id)
    }

    onAddNewCard = () => {
        const { id } = this.props.navigation.state.params
        this.props.navigation.navigate('AddCard', { id })
    }

    render() {
        const { deckDetail } = this.props

        if (isObjectEmpty(deckDetail)) {
            return <Text>Loading...</Text>
        }

        return (
            <Container style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.title}>
                        {deckDetail.title}
                    </Text>
                    <Text style={styles.subtitle}>
                        {buildDeckSubtitle(deckDetail)}
                    </Text>
                    <View style={styles.buttonsContainer}>
                        <Button rounded block style={styles.button}>
                            <Text>
                                Start Quiz
                            </Text>
                        </Button>
                        <Button rounded success block style={styles.button} onPress={this.onAddNewCard}>
                            <Text>
                                Add Card
                            </Text>
                        </Button>
                    </View>
                </View>
            </Container>
        );
    }
}

function mapStateToProps({ deckDetail }) {
    return {
        deckDetail
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getDeckDetail: (id) => {
            dispatch(handleGetDeckDetail(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckDetail)

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#edf0f7',
    },

    content: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#FFF',
        padding: 10,
        margin: 15,
        borderRadius: 10
    },

    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 35,
        marginTop: 30,
        color: '#13244E'
    },

    subtitle: {
        textAlign: 'center',
        fontSize: 15,
        marginTop: 30,
        color: 'black'
    },

    buttonsContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36,
    },

    button: {
        marginTop: 15
    }
})