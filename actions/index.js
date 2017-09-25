import { ADD_DECK, RECIEVE_DECKS, ADD_CARD } from './types'

export function addDeck(deck){
    return {
        type:ADD_DECK,
        deck
    }
}

export function recieveDecks(decks){
    return {
        type: ADD_DECK,
        decks
    }
}

export function addCard(deckId,card){
    return{
        type: ADD_CARD,
        card,
        deckId
    }
}