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
import {useDispatch} from "react-redux";
import {setUserAction} from "../../services/actions/userAction";


function App() {
    const dispatch = useDispatch()
    const {getToken,getRefreshToken,setToken,setRefreshToken} = useTokenStorage()

    useEffect(() => {
        Api.getUser(getToken())
            .then(date => {
                const {user} = date
                dispatch(setUserAction(user))
            })
            .catch(err => {
                const refreshToken = getRefreshToken()
                if (refreshToken) {
                    Api.updateToken(refreshToken)
                        .then(data => {
                            setToken(data.accessToken)
                            setRefreshToken(data.refreshToken)
                        })
                }
            })

    },[dispatch,getToken])

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
