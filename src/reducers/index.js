import { combineReducers } from 'redux'
import privateDecks from './privateDecks'
import publicDecks from './publicDecks'
import localDecks from './localDecks'
import auth from './auth'
export default combineReducers({
    privateDecks: () => [],
    localDecks,
    publicDecks: () => [],
    auth
})
