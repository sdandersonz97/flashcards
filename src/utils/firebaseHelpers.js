import firebase from 'firebase'

export const rootRef = () => firebase.database().ref()
export const userRef = uid => rootRef().child(`users/${uid}`)
export const userDecksRef = uid => userRef(uid).child('decks')
export const userDeckQuestionsRef = (uid, deckId) => userDecksRef(uid).child(`${deckId}/questions`)
export const getCurrentUser = () => firebase.auth().currentUser
export const publicDecksRef = () => rootRef().child('publicDecks')
export const likesDeckRef = (uid, deckId) => userDecksRef(uid).child(`${deckId}/likes`)