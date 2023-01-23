import appStyles from './App.module.css';
import ResetPasswordPage from "../../pages/ResetPasswordPage/ResetPasswordPage";
import MainPage from "../../pages/MainPage/MainPage";
import {useEffect} from "react";
import Api from "../../api/Api";
import useTokenStorage from "../../hooks/useTokenStorage";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import ForgotPasswordPage from "../../pages/ForgotPasswordPage/ForgotPasswordPage";
import LoginPage from "../../pages/LoginPage/LoginPage";


function App() {
    const {getToken} = useTokenStorage()


    useEffect(() => {
        Api.getUser(getToken())
            .then(date => console.log(date))
            .catch(err => console.log("Авторизация не удалась"))

    },[])

    const router = createBrowserRouter([
        {path: '/', element: <MainPage/>},
        {path: '/login', element: <LoginPage/>},
        {path: "/register", element: <RegisterPage/>},
        {path: "/reset", element: <ResetPasswordPage/>},
        {path: "/forgot", element: <ForgotPasswordPage/>},
        {path: "*", element: <MainPage/>}
    ])

    return (
        <div className={appStyles.App}>
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
