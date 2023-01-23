export const SET_USER = "SET_USER"
export const LOGOUT_USER = "LOGOUT_USER"

export const setUserAction = ({email,name}) => ({type: SET_USER ,payload: {email,name}})
export const resetUserAction = () => ({type: LOGOUT_USER})

