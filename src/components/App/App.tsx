import appStyles from './App.module.css';
import ResetPasswordPage from "../../pages/ResetPasswordPage/ResetPasswordPage";
import MainPage from "../../pages/MainPage/MainPage";
import {useEffect} from "react";
import {
    BrowserRouter,
    Navigate,
    Route,
    Routes
} from "react-router-dom";
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
import OrderDetailsPage from "../../pages/OrderDetailsPage/OrderDetailsPage";
import Layout from "../Layout/Layout";


function App() {
    const dispatch = useDispatch()
    // eslint-disable-next-line
    useEffect(() => dispatch(checkAuthThunk() as any),[])

    return (
        <div className={appStyles.App}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Layout/>}>
                        <Route index path="/" element={<MainPage/>}/>
                        <Route  path="/feed">
                            <Route index element={<FeedPage/>}/>
                            <Route  path=":id" element={<OrderDetailsPage/>} />
                        </Route>
                        <Route  path="/profile">
                            <Route index element={<AuthRoute><ProfilePage/></AuthRoute>}/>
                            <Route  path="orders" >
                                <Route index element={<AuthRoute><ProfilePage/></AuthRoute>}/>
                                <Route  path=":id" element={<AuthRoute><OrderDetailsPage/></AuthRoute>}/>
                            </Route>
                        </Route>
                        <Route  path="/ingredients/:id" element={<IngredientDetailsPage/>}/>
                        <Route  path="/login" element={<UnAuthRoute><LoginPage/></UnAuthRoute>}/>
                        <Route  path="/register" element={<UnAuthRoute><RegisterPage/></UnAuthRoute>}/>
                        <Route  path="/reset-password" element={<UnAuthRoute><ResetPasswordPage/></UnAuthRoute>}/>
                        <Route  path="/forgot-password" element={<UnAuthRoute><ForgotPasswordPage/></UnAuthRoute>}/>
                        <Route  path="*" element={<Navigate to={'/'}/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
