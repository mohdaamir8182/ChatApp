import * as ActionTypes from './types'

export const hitSignIn = (payload) => {
    return { 
        type: ActionTypes.SIGN_IN, 
        payload: {user:'AAmir'} 
    }
  };

  export const hitSignOut = () => {
    return { 
        type: ActionTypes.SIGN_IN,  
    }
  };