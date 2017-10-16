import { combineReducers } from 'redux'
import privateDecks from './privateDecks'
import publicDecks from './publicDecks'
import auth from './auth'
export default combineReducers({
    privateDecks,
    publicDecks,
    auth
})
