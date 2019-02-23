import { GET_DECK_DETAIL } from "../actions/deckDetail"

export default function DeckDetail(state = {}, action) {
    switch (action.type) {
        case GET_DECK_DETAIL:
            return {
                ...state,
                ...action.deck
            }
        default:
            return state
    }
}