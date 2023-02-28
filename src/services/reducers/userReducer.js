import {LOGOUT_USER, SET_USER, USER_FAIL_LOADING, USER_START_LOADING, USER_SUCCESS_LOADING} from "../actions/userAction";

const defaultState = {
    name : null,
    email: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: null
}


const userReducer = (state = defaultState,action) => {

  switch (action.type) {

      case SET_USER:
          return {name: action.payload.name, email: action.payload.email, isLoading: false, isSuccess: true, isError: false, errorMessage: null}

      case USER_START_LOADING:
          return {name: null, email: null,isLoading: true, isSuccess: false, isError: false, errorMessage: null}

      case USER_SUCCESS_LOADING:
          return {name: action.payload.name, email: action.payload.email ,isLoading: false, isSuccess: true, isError: false, errorMessage: null}

      case USER_FAIL_LOADING:
          return {name: null, email: null,isLoading: false, isSuccess: false, isError: true, errorMessage: action.payload}

      case LOGOUT_USER:
          return {name: null, email: null,isLoading: false, isSuccess: false, isError: false, errorMessage: null}

      default:
          return state
  }
}

export default userReducer;