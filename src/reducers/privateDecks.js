import { FETCH_USER_DECKS } from '../public/actions/types'

const INITIAL_STATE = {}

export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case FETCH_USER_DECKS:
            return action.decks
        default: 
            return state
    }
}