import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Root, Content, Footer, FooterTab, Button, Text } from 'native-base'
import { Font, AppLoading } from "expo"
import NewDeck from "./components/NewDeck"
import { createStackNavigator, createAppContainer } from "react-navigation"
import Decks from './components/Decks'

class App extends React.Component {
  static navigationOptions = {
    title: 'Decks',
  }

  state = { loading: true }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      )
    }

    return (
      <Container style={styles.container}>
        <Content style={styles.content}>
          <Decks />
          <Decks />
          <Decks />
        </Content>
        <Footer>
          <FooterTab>
            <Button full onPress={() => this.props.navigation.navigate('NewDeck')}>
              <Text>New Deck</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D4DBED'
  },

  content: {
    padding: 10
  }
});

const AppNavigator = createStackNavigator({
  Home: App,
  NewDeck: NewDeck
}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#13244E',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  });

export default createAppContainer(AppNavigator)