import firebase from 'firebase'
import { userDecksRef, getCurrentUser, userDeckQuestionsRef } from '../../utils/firebaseHelpers'
import { FETCH_USER_DECKS, ADD_USER_DECK, ADD_USER_CARD_TO_DECK } from './types'


export const fetchUserDecks = () => {
    return dispatch => userDecksRef(getCurrentUser().uid).on('value', snap => {
        console.log(snap.val())
        dispatch({
            type: FETCH_USER_DECKS,
            decks: snap.val() ? snap.val() : {}
        })
    })
}

export const addUserDeck = deckTitle => {
    const key = userDecksRef(getCurrentUser().uid).push().key
    return () => userDecksRef(getCurrentUser().uid).child(key).set({
        key,
        deckTitle
    })
}

export const addUserCardToDeck = (deckId, { question, answer }) => {
    return () => userDeckQuestionsRef(getCurrentUser().uid, deckId).push({
        question,
        answer
    })
}