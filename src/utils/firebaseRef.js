import firebase from 'firebase'

export const rootRef = firebase.database().ref()
export const userRef = uid => rootRef.child(uid)
export const userDecksRef = uid => userRef().child('decks')
