import { LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER, USER_SIGNUP_FAIL } from '../auth/actions/types'

const INITIAL_STATE = { 
    loading: false,
    error: '',
    user: null
}
export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case LOGIN_USER:
            return { 
                ...state, 
                loading: true, 
                error: '' 
            }
        case LOGIN_USER_SUCCESS:
            return { 
                ...state,
                ...INITIAL_STATE,
                user: action.payload, 
            }
        case LOGIN_USER_FAIL:
            return { 
                ...state, 
                error: "Authenticated Failed", 
                password: '', 
                loading: false 
            }
        case USER_SIGNUP_FAIL:{
            return {
                ...state,
                error: "Signup Failed"
            }
        }
        default:
            return state
    }
}