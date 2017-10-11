import firebase from 'firebase'

export const rootRef = () => firebase.database().ref()
export const userRef = uid => rootRef().child(`users/${uid}`)
export const userDecksRef = uid => userRef(uid).child('decks')

export const getCurrentUser = () => {
    return firebase.auth().currentUser
}