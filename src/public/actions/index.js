import firebase from 'firebase'
import { userDecksRef, getCurrentUser, userDeckQuestionsRef, publicDecksRef } from '../../utils/firebaseHelpers'
import { FETCH_USER_DECKS, ADD_USER_DECK, ADD_USER_CARD_TO_DECK, ADD_PUBLIC_DECK, FETCH_PUBLIC_DECKS } from './types'


export const fetchUserDecks = () => {
    return dispatch => userDecksRef(getCurrentUser().uid).on('value', snap => {
        dispatch({
            type: FETCH_USER_DECKS,
            decks: snap.val() ? snap.val() : {}
        })
    })
}

export const addUserDeck = (deckTitle, isDeckPublic, category) => {
    const key = userDecksRef(getCurrentUser().uid).push().key
    const uid = getCurrentUser().uid
    return () => {
        userDecksRef(uid).child(key).set({
            key,
            deckTitle,
            isDeckPublic,
            category
        })
        .then(() => {
            isDeckPublic
            ? addPublicDeck(key, uid, category)
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

const addPublicDeck = (deckId, uid, category) => {
    const key = publicDecksRef().push().key
    publicDecksRef().child(key).set({
        key,
        category,
        deckId,
        uid,
        likes:0
    })
}

export const fetchPublicDecks = () => {
    return () => publicDecksRef().limitToFirst(20).on('value', snap => {
        dispatch({
            type: FETCH_PUBLIC_DECKS,
            decks: snap.val()
        })
    })

}