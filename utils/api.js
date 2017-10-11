import _ from 'lodash'
import { AsyncStorage } from 'react-native'

const DECKS = 'DECKS'

export function addDeck (deckTitle) {
    return AsyncStorage.mergeItem(DECKS,JSON.stringify({
        [deckTitle]:{
            deckTitle,
            key: deckTitle,
            questions:[]
        },
    }))
}

export async function fetchDecks () {
    try{
        const decks = await AsyncStorage.getItem(DECKS)
        if(decks !== null){
            return JSON.parse(decks)
        }
        return {}
    } catch(error){
        console.log(error)
    }  
}
export function removeDeck (deckTitle) {
    try {
        fetchDecks().then(decks => {
            const newDecks = _.omit(decks, deckTitle)
            AsyncStorage.removeItem(DECKS)
            AsyncStorage.mergeItem(DECKS, JSON.stringify(newDecks))
        })
    } catch (error) {
        console.log(error)
    }
}
export async function fetchDeck(deckTitle){
    try{
        const decks = await AsyncStorage.getItem(DECKS)
        if( decks !== null){
           return JSON.parse(decks)[deckTitle]
        }
    } catch(error){
        console.log(error)
    }  
}
export function addCardToDeck ({ deckTitle, questions, question, answer }) {
    try{
        return AsyncStorage.mergeItem(DECKS,JSON.stringify({
                [deckTitle]:{
                    questions:[...questions, {question, answer}]
                },
            }))
    } catch(error){
        console.log(error)
    }  
}
