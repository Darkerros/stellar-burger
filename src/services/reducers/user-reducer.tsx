import {
    TUserActions,
    UserActionTypes
} from "../actions/user-actions";

export interface IUserReducerState {
    name : string | null;
    email: string | null;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    errorMessage: string | null
}

const defaultState:IUserReducerState = {
    name : null,
    email: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: null
}


const userReducer = (state = defaultState,action:TUserActions):IUserReducerState => {

  switch (action.type) {

      case UserActionTypes.SET_USER:
          return {name: action.payload.name, email: action.payload.email, isLoading: false, isSuccess: true, isError: false, errorMessage: null}

      case UserActionTypes.USER_START_LOADING:
          return {name: null, email: null,isLoading: true, isSuccess: false, isError: false, errorMessage: null}

      case UserActionTypes.USER_SUCCESS_LOADING:
          return {name: action.payload.name, email: action.payload.email ,isLoading: false, isSuccess: true, isError: false, errorMessage: null}

      case UserActionTypes.USER_FAIL_LOADING:
          return {name: null, email: null,isLoading: false, isSuccess: false, isError: true, errorMessage: action.payload}

      case UserActionTypes.LOGOUT_USER:
          return {name: null, email: null,isLoading: false, isSuccess: false, isError: false, errorMessage: null}

      default:
          return state
  }
}

export default userReducer;