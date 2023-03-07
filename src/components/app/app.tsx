import appStyles from './app.module.css';
import ResetPasswordPage from "../../pages/reset-password-page/reset-password-page";
import MainPage from "../../pages/main-page/main-page";
import {useEffect} from "react";
import {
    Navigate,
    Route,
    Routes, useLocation, useNavigate
} from "react-router-dom";
import RegisterPage from "../../pages/register-page/register-page";
import ForgotPasswordPage from "../../pages/forgot-password-page/forgot-password-page";
import LoginPage from "../../pages/login-page/login-page";
import {useDispatch} from "react-redux";
import ProfilePage from "../../pages/profile-page/profile-page";
import UnAuthRoute from "../un-auth-route/un-auth-route";
import AuthRoute from "../auth-route/auth-route";
import IngredientsDetailsPage from "../../pages/ingredients-details-page/ingredients-details-page";
import FeedPage from "../../pages/feed-page/feed-page";
import {checkAuthThunk} from "../../services/actions/checkAuthThunk";
import OrderDetailsPage from "../../pages/order-details-page/order-details-page";
import Layout from "../layout/layout";
import Modal from "../modal/modal";
import UpdateProfileForm from "../update-profile-form/update-profile-form";
import ProfileOrders from "../profile-orders/profile-orders";
import OrderInfo from "../order-info/order-info";
import IngredientsDetails from "../ingredient-details/ingredients-details";

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
                            <Route path={"ingredients/:id"} element={<Modal handleClose={() => navigate(-1)}><IngredientsDetails ingredientDetails={location.state.ingredient}/></Modal>}/>}
                    </Route>
                    <Route path="/ingredients/:id" element={<IngredientsDetailsPage/>}/>
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
