import firebase from 'firebase'

export const rootRef = firebase.database().ref()
export const userRef = uid => rootRef.child(uid)
export const userDecksRef = uid => userRef().child('decks')

export const getCurrentUser = () => {
    try{
        return firebase.auth().currentUser
    } catch(error){
        console.log(error)
    }  
  }