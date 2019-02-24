import { getDeck, addCardToDeck } from '../helpers/storage'
import { getAllDecks } from '../actions/decks'
export const GET_DECK_DETAIL = 'GET_DECK_DETAIL'

export function getDeckDetail(deck) {
    return {
        type: GET_DECK_DETAIL,
        deck
    }
}

export function handleGetDeckDetail(id) {
    return (dispatch) => {
        getDeck(id).then(deck => {
            dispatch(getDeckDetail(deck))
        })
    }
}

export function handleAddNewCard(id, question, answer) {
    return (dispatch) => {
        addCardToDeck(id, question, answer).then(decks => {
            dispatch(getDeckDetail(decks[id]))
            dispatch(getAllDecks(decks))
        })
    }
}