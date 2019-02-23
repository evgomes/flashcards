import { getDeck } from '../helpers/storage'
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