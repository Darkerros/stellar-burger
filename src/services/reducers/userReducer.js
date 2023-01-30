import {LOGOUT_USER, SET_USER} from "../actions/userAction";

const defaultState = {
    name : null,
    email: null
}


const userReducer = (state = defaultState,action) => {

  switch (action.type) {

      case SET_USER:
          return {name: action.payload.name, email: action.payload.email}

      case LOGOUT_USER:
          return {name: null, email: null}

      default:
          return state
  }
}

export default userReducer;