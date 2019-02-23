import React from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation"
import Home from './Home'
import NewDeck from './NewDeck'
import DeckDetail from './DeckDetail'


export const StackNavigator = createStackNavigator({
    Home: Home,
    NewDeck: NewDeck,
    DeckDetail: DeckDetail
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