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
    AsyncStorage.getItem(DECKS).then(data => {
       const decks = JSON.stringify(data)
       console.log(decks[deckTitle] + 'test')
    })
}
export async function fetchDecks(){
    try{
        const decks = await AsyncStorage.getItem(DECKS)
        if( decks !== null){
           return JSON.parse(decks)
        }
    } catch(error){
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
export function addCardToDeck({ deckTitle, questions, question, answer }){
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
