import firebase from 'firebase'
import { 
    userDecksRef, 
    getCurrentUser, 
    userDeckQuestionsRef, 
    publicDecksRef, 
    likesDeckRef,
    publicDeckRef 
} from '../../utils/firebaseHelpers'
import { 
    FETCH_USER_DECKS,
    ADD_USER_DECK, 
    ADD_USER_CARD_TO_DECK, 
    ADD_PUBLIC_DECK, 
    FETCH_PUBLIC_DECKS,
    SHARE_PRIVATE_DECK, 
    LIKE_DECK 
} from './types'


const addPublicDeck = (deckId, uid, category) => {
    publicDecksRef().child(deckId).set({
        category,
        deckId,
        uid
    })
}

export const fetchUserDecks = () => {
    return dispatch => userDecksRef(getCurrentUser().uid).on('value', snap => {
        dispatch({
            type: FETCH_USER_DECKS,
            decks: snap.val() ? snap.val() : {}
        })
    })
}

export const addUserDeck = (deckTitle, isDeckPublic, category, cb) => {
    const key = userDecksRef(getCurrentUser().uid).push().key
    const uid = getCurrentUser().uid
    return () => {
        userDecksRef(uid).child(key).set({
            key,
            deckTitle,
            isDeckPublic,
            category,
            uid
        })
        .then(() => {
            isDeckPublic
            ? addPublicDeck(key, uid, category)
            : null
        })
        .then(() => cb())
    }
}

export const addUserCardToDeck = (deckId, { question, answer }) => {
    return () => userDeckQuestionsRef(getCurrentUser().uid, deckId).push({
        question,
        answer
    })
}

export const fetchPublicDecks = (category) => {
    return dispatch => publicDecksRef().orderByChild('category').equalTo(category).limitToFirst(20).on('child_added', snap => {
        userDecksRef(snap.val().uid).child(snap.val().deckId).on('value', snapUserDeck => {
            dispatch({
                type: FETCH_PUBLIC_DECKS,
                deck: snapUserDeck.val()
            })
        })
        
    })

}

export const sharePrivateDeck = ({key, category}) => {
    const uid = getCurrentUser().uid
    return () => userDecksRef(uid).child(key).update({ isDeckPublic: true })
        .then(() => addPublicDeck(key, uid, category))
}

export const likeDeck = ({deckId, uid}) => () =>
     likesDeckRef(uid,deckId).child(getCurrentUser().uid).set(true)

export const deleteDeck = ({ deckId }) => dispatch => {
    userDecksRef(getCurrentUser().uid).child(deckId).remove()
        .then(() => publicDecksRef().child(deckId).remove())
}
