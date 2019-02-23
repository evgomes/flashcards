import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Content, Footer, FooterTab, Button, Text, Form, Item, Input } from "native-base"
import { connect } from 'react-redux'
import { handleSaveDeck } from '../actions/decks'

class NewDeck extends Component {
    static navigationOptions = {
        title: 'New Deck',
    }

    state = {
        title: ''
    }

    onTitleChange = (e) =>{
        const title = e.nativeEvent.text
        this.setState({
            title
        })
    }

    onSaveDeck = () => {
        this.props.saveDeck(this.state.title)
        this.props.navigation.navigate('Home')
    }

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <Text style={styles.title}>
                        What is the title of your new deck?
                    </Text>
                    <Form style={styles.form}>
                        <Form>
                            <Item>
                                <Input error placeholder="Ex: Javascript" value={this.state.title} onChange={this.onTitleChange} />
                            </Item>
                        </Form>
                    </Form>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button disabled={this.state.title === ''} full onPress={this.onSaveDeck}>
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
        saveDeck: (title) => {
            dispatch(handleSaveDeck(title))
        }
    }
}

export default connect(null, mapDispatchToProps)(NewDeck)

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D4DBED',
    },

    form: {
        backgroundColor: '#FFF',
        padding: 10,
        margin: 10,
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