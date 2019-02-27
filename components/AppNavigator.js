import React from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation"
import Home from './Home'
import NewDeck from './NewDeck'
import DeckDetail from './DeckDetail'
import AddCard from './AddCard'
import Quiz from './Quiz'

export const StackNavigator = createStackNavigator({
    Home: Home,
    NewDeck: NewDeck,
    DeckDetail: DeckDetail,
    AddCard: AddCard,
    Quiz: Quiz
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
    })

const AppContainer = createAppContainer(StackNavigator)

const AppNavigator = () => {
    return (
        <AppContainer />
    );
};

export default AppNavigator