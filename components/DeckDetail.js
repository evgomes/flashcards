import React, { Component } from 'react'
import { StyleSheet } from "react-native"
import { connect } from 'react-redux'
import { Container, Content, Footer, FooterTab, Button, Text } from "native-base"
import { handleGetDeckDetail } from "../actions/deckDetail"
import { buildDeckSubtitle, isObjectEmpty } from '../helpers/common'

class DeckDetail extends Component {
    static navigationOptions = {
        title: 'DeckDetail',
    }

    componentDidMount() {
        const { id } = this.props.navigation.state.params
        this.props.getDeckDetail(id)
    }

    render() {
        const { deckDetail } = this.props

        if (isObjectEmpty(deckDetail)) {
            return <Text>Loading...</Text>
        }

        return (
            <Container style={styles.container}>
                <Content style={styles.content}>
                    <Text style={styles.title}>
                        {deckDetail.title}
                    </Text>
                    <Text style={styles.subtitle}>
                        {buildDeckSubtitle(deckDetail)}
                    </Text>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button>
                            <Text>Add Card</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

function mapStateToProps({ deckDetail }) {
    console.log(deckDetail);

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
    },

    subtitle: {
        textAlign: 'center',
        fontSize: 15,
        marginTop: 30,
        color: 'black'
    }
})