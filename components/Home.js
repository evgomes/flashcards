import React, { Component, Fragment } from 'react'
import { StyleSheet } from 'react-native'
import { Content, Footer, FooterTab, Button, Text } from 'native-base'
import Toolbar from './Toolbar'
import Decks from './Decks'

class Home extends Component {
    static navigationOptions = {
        title: 'Decks',
    }
    
    render() {
        return (
            <Fragment>
                <Content style={styles.content}>
                    <Decks />
                    <Decks />
                    <Decks />
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>New Deck</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Fragment>
        );
    }
}

export default Home

const styles = StyleSheet.create({
    content: {
        padding: 10
    }
});
