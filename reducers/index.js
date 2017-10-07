import { ADD_DECK, RECIEVE_DECKS, ADD_CARD } from '../actions/types'
export default function (state={}, action){
    switch(action.type){
        case ADD_DECK:
            return {
                ...state,
                ...action.deck
            }
        case RECIEVE_DECKS:
            return action.decks
        case ADD_CARD:
            return {
                ...state,
                [action.deckId]:{
                    ...state[action.deckId],
                    ['questions']:[
                        ...state[action.deckId]['questions'], 
                        action.card
                    ]
                }
                
            }
        default:
            return state
    }

}