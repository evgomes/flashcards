import * as storage from "../helpers/storage"
export const GET_ALL_DECKS = 'GET_ALL_DECKS'

export function getAllDecks(decks) {
    return {
        type: GET_ALL_DECKS,
        decks
    }
}

export function handleGetAllDecks() {
    return (dispatch) => {
        storage.getDecks().then(decks => {
            dispatch(getAllDecks(decks))
        })
    }
}

export function handleSaveDeck(title) {
    return (dispatch) => {        
        storage.saveDeckTitle(title).then(decks => {
            dispatch(getAllDecks(decks))
        })
    }
}