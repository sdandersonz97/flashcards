import firebase from 'firebase'
import { userDecksRef, getCurrentUser } from '../../utils/firebaseHelpers'
import { FETCH_USER_DECKS, ADD_USER_DECK } from './types'


export const fetchUserDecks = () => {
    return dispatch => userDecksRef(getCurrentUser().uid).on('value', snap => {
        dispatch({
            type: FETCH_USER_DECKS,
            decks: snap.val()
        })
    })
}

export const addUserDeck = deckTitle => {
    return () => userDecksRef(getCurrentUser().uid).push(deckTitle)
}