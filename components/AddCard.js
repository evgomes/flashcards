import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { handleAddNewCard } from '../actions/deckDetail'
import { Container, Content, Footer, FooterTab, Button, Text, Form, Item, Input } from "native-base"

class AddCard extends Component {
    static navigationOptions = {
        title: 'Add new card',
    }

    state = {
        question: '',
        answer: ''
    }

    onQuestionChange = (e) => {
        const question = e.nativeEvent.text
        this.setState({
            question
        })
    }

    onAnswerChange = (e) => {
        const answer = e.nativeEvent.text
        this.setState({
            answer
        })
    }

    onAddNewCard = () => {
        const { question, answer } = this.state
        const { id } = this.props.navigation.state.params
        this.props.addNewCard(id, question, answer)
        this.props.navigation.navigate('DeckDetail')
    }

    render() {
        return (
            <Container style={styles.container}>
                <Content style={styles.content}>
                    <Form >
                        <Form>
                            <Item>
                                <Input error placeholder="Your question here" value={this.state.question} onChange={this.onQuestionChange} />
                            </Item>
                            <Item>
                                <Input error placeholder="Your answer here" value={this.state.answer} onChange={this.onAnswerChange} />
                            </Item>
                        </Form>
                    </Form>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button disabled={this.state.question === '' && this.state.answer === ''} full onPress={this.onAddNewCard}>
                            <Text>Add</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addNewCard: (id, question, answer) => {
            dispatch(handleAddNewCard(id, question, answer))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddCard)

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D4DBED',
    },

    content: {
        backgroundColor: '#FFF',
        padding: 10,
        margin: 15,
        borderRadius: 10
    },

    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 30,
        color: '#13244E'
    }
})