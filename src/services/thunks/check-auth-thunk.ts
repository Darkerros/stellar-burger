import {TUserActions, userFailLoadingAction, userStartLoadingAction, userSucessLoadingAction} from "../actions/user-actions";
import useUserController from "../../hooks/use-user-controller";
import {TAppThunk} from "./app-thunk-type";

export const checkAuthThunk = ():TAppThunk<TUserActions> => (dispatch) => {
    const userController = useUserController()
    dispatch(userStartLoadingAction())
    userController.checkAuth()
        .then(user => dispatch(userSucessLoadingAction(user)))
        .catch(error => dispatch(userFailLoadingAction(error.message)))
}