import appStyles from './App.module.css';
import ResetPasswordPage from "../../pages/ResetPasswordPage/ResetPasswordPage";
import MainPage from "../../pages/MainPage/MainPage";
import {useEffect} from "react";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import ForgotPasswordPage from "../../pages/ForgotPasswordPage/ForgotPasswordPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import {useDispatch} from "react-redux";
import {resetUserAction, setUserAction} from "../../services/actions/userAction";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";
import useUserController from "../../hooks/useUserController";
import UnAuthRoute from "../UnAuthRoute/UnAuthRoute";
import AuthRoute from "../AuthRoute/AuthRoute";
import IngredientDetailsPage from "../../pages/IngredientDetailsPage/IngredientDetailsPage";


function App() {
    const dispatch = useDispatch()
    const userController = useUserController()

    useEffect(() => {
        userController.checkAuth()
            .then(user => dispatch(setUserAction(user)))
            .catch(() => dispatch(resetUserAction()))
    },[dispatch, userController])

    const router = createBrowserRouter([
        {path: '/', element: <MainPage/>},
        {path: '/login', element: <UnAuthRoute><LoginPage/></UnAuthRoute>},
        {path: "/register", element: <UnAuthRoute><RegisterPage/></UnAuthRoute>},
        {path: "/reset", element: <UnAuthRoute><ResetPasswordPage/></UnAuthRoute>},
        {path: "/forgot", element: <UnAuthRoute><ForgotPasswordPage/></UnAuthRoute>},
        {path: "/profile/orders", element: <AuthRoute><ProfilePage/></AuthRoute>},
        {path: "/profile", element: <AuthRoute><ProfilePage/></AuthRoute>},
        {path: "/ingredients/:id", element: <IngredientDetailsPage/>},
        {path: "*", element: <Navigate to={'/'}/>}
    ])

    return (
        <div className={appStyles.App}>
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
