import * as ActionTypes from '../Actions/types';

const AuthReducer = (state = {user: null} , action) => {

    switch(action.type) {

        case ActionTypes.SIGN_IN:
            return {
                user : action.payload
            }
        case ActionTypes.SIGN_OUT:
            return {
                user : null
            }
        default:
            return {
                user : null
            }
    }

}

export default AuthReducer;