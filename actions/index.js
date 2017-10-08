import { ADD_DECK, RECIEVE_DECKS, ADD_CARD, DELETE_DECK } from './types'

export function addDeck(deck){
    return {
        type:ADD_DECK,
        deck
    }
}

export function recieveDecks(decks){
    return {
        type: RECIEVE_DECKS,
        decks
    }
}

export function addCard(deckId, card){
    return{
        type: ADD_CARD,
        card,
        deckId
    }
}

export function deleteDeck(deckTitle, cb){
    cb()
    return{
        type: DELETE_DECK,
        deckTitle
    }
}