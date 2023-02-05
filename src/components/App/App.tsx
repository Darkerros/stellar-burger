import appStyles from './App.module.css';
import ResetPasswordPage from "../../pages/ResetPasswordPage/ResetPasswordPage";
import MainPage from "../../pages/MainPage/MainPage";
import {useEffect} from "react";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import ForgotPasswordPage from "../../pages/ForgotPasswordPage/ForgotPasswordPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import {useDispatch} from "react-redux";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";
import UnAuthRoute from "../UnAuthRoute/UnAuthRoute";
import AuthRoute from "../AuthRoute/AuthRoute";
import IngredientDetailsPage from "../../pages/IngredientDetailsPage/IngredientDetailsPage";
import FeedPage from "../../pages/FeedPage/FeedPage";
import {checkAuthThunk} from "../../services/actions/checkAuthThunk";
import FeedDetailsPage from "../../pages/FeedDetailsPage/FeedDetailsPage";


function App() {
    const dispatch = useDispatch()

    useEffect(() => dispatch(checkAuthThunk() as any),[dispatch])

    const router = createBrowserRouter([
        {path: '/', element: <MainPage/>},
        {path: '/login', element: <UnAuthRoute><LoginPage/></UnAuthRoute>},
        {path: "/register", element: <UnAuthRoute><RegisterPage/></UnAuthRoute>},
        {path: "/reset-password", element: <UnAuthRoute><ResetPasswordPage/></UnAuthRoute>},
        {path: "/forgot-password", element: <UnAuthRoute><ForgotPasswordPage/></UnAuthRoute>},
        {path: "/feed", element: <FeedPage/>},
        {path: "/feed/:id", element: <FeedDetailsPage/>},
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
