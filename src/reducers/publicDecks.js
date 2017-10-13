import _ from 'lodash'
import { FETCH_PUBLIC_DECKS } from '../public/actions/types'

const INITIAL_STATE = {}
export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case FETCH_PUBLIC_DECKS:
            return action.decks
        default:
            return state
    }
}