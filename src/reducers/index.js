import { combineReducers } from 'redux'
import privateDecks from './privateDecks'
import publicDecks from './publicDecks'
import localDecks from './localDecks'
export default combineReducers({
    privateDecks: () => [],
    localDecks,
    publicDecks: () => []
})
