import appStyles from './App.module.css';
import ResetPasswordPage from "../../pages/ResetPasswordPage/ResetPasswordPage";
import MainPage from "../../pages/MainPage/MainPage";
import {useEffect} from "react";
import {
    Navigate,
    Route,
    Routes, useLocation, useNavigate
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
import Modal from "../Modal/Modal";
import UpdateProfileForm from "../UpdateProfileForm/UpdateProfileForm";
import ProfileOrders from "../ProfileOrders/ProfileOrders";
import OrderInfo from "../OrderInfo/OrderInfo";
import IngredientDetails from "../IngredientDetails/IngredientDetails";

function App() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    // eslint-disable-next-line
    useEffect(() => dispatch(checkAuthThunk() as any), [])


    return (
        <div className={appStyles.App}>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route path="/" element={<MainPage/>}>
                        {location.state?.from === "/" &&
                            <Route path={"ingredients/:id"} element={<Modal handleClose={() => navigate(-1)}><IngredientDetails ingredientDetails={location.state.ingredient}/></Modal>}/>}
                    </Route>
                    <Route path="/ingredients/:id" element={<IngredientDetailsPage/>}/>
                    <Route path="/feed" element={<FeedPage/>}>
                        {location.state?.from === "feed" && <Route path=":id" element={<Modal handleClose={() => navigate(-1)} children={<OrderInfo orderInfo={location.state.orderInfo}/>}/>}/>}
                    </Route>
                    <Route path="/feed/:id" element={<OrderDetailsPage/>}/>
                    <Route path="/profile" element={<AuthRoute><ProfilePage/></AuthRoute>}>
                        <Route index element={<UpdateProfileForm/>}/>
                        <Route path="orders" element={<ProfileOrders/>}>
                            {location.state?.from === "profile" && <Route path=":id" element={<Modal handleClose={() => navigate(-1)} children={<OrderInfo orderInfo={location.state.orderInfo}/>}/>}/>}
                        </Route>
                    </Route>
                    <Route path="/profile/orders/:id" element={<AuthRoute><OrderDetailsPage/></AuthRoute>}/>
                    <Route path="/login" element={<UnAuthRoute><LoginPage/></UnAuthRoute>}/>
                    <Route path="/register" element={<UnAuthRoute><RegisterPage/></UnAuthRoute>}/>
                    <Route path="/reset-password" element={<UnAuthRoute><ResetPasswordPage/></UnAuthRoute>}/>
                    <Route path="/forgot-password" element={<UnAuthRoute><ForgotPasswordPage/></UnAuthRoute>}/>
                    <Route path="*" element={<Navigate to={'/'}/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
