import { AsyncStorage } from 'react-native'

const DECKS = 'DECKS'

export function addDeck(deckTitle){
    return AsyncStorage.mergeItem(DECKS,JSON.stringify({
        [deckTitle]:{
            deckTitle,
            key: deckTitle,
            questions:[]
        },
    }))
}
export function addCard(deckTitle,card){
    return AsyncStorage.mergeItem(DECKS,JSON.stringify({
        [deckTitle]:{
            questions:[{card}]
        }
    }))
}
export function fetchDecks(){
    return AsyncStorage.getItem(DECKS)
}