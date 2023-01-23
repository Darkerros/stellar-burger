
const defaultState = {
    name : null,
    email: null
}


const SET_USER = "SET_USER"
const LOGOUT_USER = "LOGOUT_USER"

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