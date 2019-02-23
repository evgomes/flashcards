import { combineReducers } from 'redux'
import decks from "./decks"
import deckDetail from "./deckDetail"

export default combineReducers({
    decks,
    deckDetail
})