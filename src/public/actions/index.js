import firebase from 'firebase'
import { userDecksRef, getCurrentUser } from '../../utils/firebaseRef'
import { FETCH_USER_DECKS, ADD_USER_DECK } from './types'
const fetchUserDecks = () => {
    return dispatch => userDecksRef(getCurrentUser()).on('value', snap => {
        dispatch({
            type: FETCH_USER_DECKS,
            decks: snap.val()
        })
    })
}

const addUserDeck = deckTitle => {
    return () => userDecksRef(getCurrentUser()).push(deckTitle)
}