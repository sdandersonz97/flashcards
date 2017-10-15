import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER, USER_SIGNUP_FAIL } from './types'
import firebase from 'firebase'
import { getCurrentUser } from '../../utils/firebaseHelpers'
export const loginUser = ({ email, password }, cb) => {
    return dispatch => {
     dispatch({ type: LOGIN_USER })
     firebase.auth().signInWithEmailAndPassword(email, password)
         .then(user  => {
             loginUserSuccess(dispatch, user)
             cb()
         })
         .catch(() => loginUserFail(dispatch))
     }
 }
 
export const signupUser = ({ fullname, email, password }, cb) => {
    return dispatch => firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => {
            cb()
        })
        .catch(() => dispatch({
            type: USER_SIGNUP_FAIL
        }))
}
 const loginUserFail = dispatch => {
     dispatch({
         type: LOGIN_USER_FAIL
     })
 }
 
 const loginUserSuccess = ( dispatch, user ) => {
     dispatch({
         type: LOGIN_USER_SUCCESS, 
         payload: user
     })
 }