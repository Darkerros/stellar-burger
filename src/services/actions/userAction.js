export const SET_USER = "SET_USER"
export const LOGOUT_USER = "LOGOUT_USER"
export const USER_START_LOADING = "USER_START_LOADING"
export const USER_SUCESS_LOADING = "USER_SUCESS_LOADING"
export const USER_FAIL_LOADING = "USER_FAIL_LOADING"


export const setUserAction = ({email,name}) => ({type: SET_USER ,payload: {email,name}})
export const userStartLoadingAction = () => ({type: USER_START_LOADING })
export const userSucessLoadingAction = ({email,name}) => ({type: USER_SUCESS_LOADING ,payload: {email,name}})
export const userFailLoadingAction = (errorMessage) => ({type: SET_USER ,payload: errorMessage})
export const resetUserAction = () => ({type: LOGOUT_USER})

