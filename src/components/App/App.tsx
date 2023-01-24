import appStyles from './App.module.css';
import ResetPasswordPage from "../../pages/ResetPasswordPage/ResetPasswordPage";
import MainPage from "../../pages/MainPage/MainPage";
import {useEffect} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import ForgotPasswordPage from "../../pages/ForgotPasswordPage/ForgotPasswordPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import {useDispatch} from "react-redux";
import {resetUserAction, setUserAction} from "../../services/actions/userAction";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";
import useUserController from "../../hooks/useUserController";


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
        {path: '/login', element: <LoginPage/>},
        {path: "/register", element: <RegisterPage/>},
        {path: "/reset", element: <ResetPasswordPage/>},
        {path: "/forgot", element: <ForgotPasswordPage/>},
        {path: "/profile", element: <ProfilePage/>},
        {path: "*", element: <MainPage/>}
    ])

    return (
        <div className={appStyles.App}>
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
