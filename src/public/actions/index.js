import firebase from 'firebase'
import { userDecksRef, getCurrentUser, userDeckQuestionsRef, publicDecksRef } from '../../utils/firebaseHelpers'
import { FETCH_USER_DECKS, ADD_USER_DECK, ADD_USER_CARD_TO_DECK, ADD_PUBLIC_DECK } from './types'


export const fetchUserDecks = () => {
    return dispatch => userDecksRef(getCurrentUser().uid).on('value', snap => {
        dispatch({
            type: FETCH_USER_DECKS,
            decks: snap.val() ? snap.val() : {}
        })
    })
}

export const addUserDeck = (deckTitle, isDeckPublic) => {
    const key = userDecksRef(getCurrentUser().uid).push().key
    const uid = getCurrentUser().uid
    return () => {
        userDecksRef(uid).child(key).set({
            key,
            deckTitle,
            isDeckPublic
        })
        .then(() => {
            isDeckPublic
            ? addPublicDeck(key, uid)
            : null
        })
    }
}

export const addUserCardToDeck = (deckId, { question, answer }) => {
    return () => userDeckQuestionsRef(getCurrentUser().uid, deckId).push({
        question,
        answer
    })
}

const addPublicDeck = (deckId, uid) => {
    const key = publicDecksRef().push().key
    publicDecksRef().child(key).set({
        key,
        deckId,
        uid,
        likes:0
    })
}