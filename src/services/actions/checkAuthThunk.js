import {userFailLoadingAction, userStartLoadingAction, userSucessLoadingAction} from "./userAction";
import useUserController from "../../hooks/useUserController";

export const checkAuthThunk = () => (dispatch) => {
    const userController = useUserController()
    dispatch(userStartLoadingAction())
    userController.checkAuth()
        .then(user => dispatch(userSucessLoadingAction(user)))
        .catch(error => error.then(error => dispatch(dispatch(userFailLoadingAction(error.message)))))
}