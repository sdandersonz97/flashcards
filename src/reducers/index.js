import { combineReducers } from 'redux'
import privateDecks from './privateDecks'
import publicDecks from './publicDecks'

export default combineReducers({
    privateDecks,
    publicDecks: () => []
})
