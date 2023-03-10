export enum UserActionTypes {
    SET_USER = "SET_USER",
    LOGOUT_USER = "LOGOUT_USER",
    USER_START_LOADING = "USER_START_LOADING",
    USER_SUCCESS_LOADING = "USER_SUCCESS_LOADING",
    USER_FAIL_LOADING = "USER_FAIL_LOADING",
}

export type TUserActions = ISetUserAction | IUserStartLoadingAction | IUserSuccessLoadingAction | IUserFailLoadingAction | IUserResetAction

interface ISetUserAction {
    type: UserActionTypes.SET_USER;
    payload: {email: string, name: string};
}
interface IUserStartLoadingAction {
    type: UserActionTypes.USER_START_LOADING;
}
interface IUserSuccessLoadingAction {
    type: UserActionTypes.USER_SUCCESS_LOADING;
    payload: {email: string, name: string};
}
interface IUserFailLoadingAction {
    type: UserActionTypes.USER_FAIL_LOADING;
    payload: string;
}
interface IUserResetAction {
    type: UserActionTypes.LOGOUT_USER;
}

export const setUserAction = ({email,name}:{email: string, name: string}):TUserActions => ({type: UserActionTypes.SET_USER ,payload: {email,name}})
export const userStartLoadingAction = ():TUserActions => ({type: UserActionTypes.USER_START_LOADING })
export const userSucessLoadingAction = ({email,name}:{email: string, name: string}):TUserActions => ({type: UserActionTypes.USER_SUCCESS_LOADING ,payload: {email,name}})
export const userFailLoadingAction = (errorMessage:string):TUserActions => ({type: UserActionTypes.USER_FAIL_LOADING ,payload: errorMessage})
export const resetUserAction = ():TUserActions => ({type: UserActionTypes.LOGOUT_USER})

