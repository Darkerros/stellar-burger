import AppHeader from "../../components/AppHeader/AppHeader";
import styles from './ProfilePage.module.css'
import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";
import UpdateProfileForm from "../../components/UpdateProfileForm/UpdateProfileForm";
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {getIngredientsThunk} from "../../services/actions/getIngredientsThunk";
import {webSocketCloseConnectionAction, webSocketOpenConnectionAction} from "../../services/actions/webSocketActions";
import useTokenStorage from "../../hooks/useTokenStorage";
import OrderCard from "../../components/OrderCard/OrderCard";
import {useIngredientsData} from "../../hooks/useIngredientsData";

const ProfilePage = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const tokenStorage = useTokenStorage()
    const {getIngredientPrice,getIngredientImage} = useIngredientsData()

    const orders = useSelector(state => state.orderWebSocketReducer.orders)
    const ingredients = useSelector(state => state.ingredientsReducer.ingredients)
    const calculatePrice = (ingredientsIdList) => ingredientsIdList.reduce((a,id) => id ? a + getIngredientPrice(id) : a,0)


    useEffect(() => {
        if (!ingredients.length) {
            dispatch(getIngredientsThunk())
        }
        // eslint-disable-next-line
    },[ingredients])


    useEffect(() => {
        dispatch(webSocketOpenConnectionAction("wss://norma.nomoreparties.space/orders?token="+tokenStorage.getToken().split(" ")[1]))

        return () => {
            dispatch(webSocketCloseConnectionAction())
        }
        // eslint-disable-next-line
    },[])


    return (
        <>
            <AppHeader/>
            <div className={styles.container}>
                <ProfileMenu/>
                {location.pathname === "/profile"
                    ?
                    <UpdateProfileForm/>
                    :
                    <div className={styles.feed + " pr-4"}>
                        {orders.map(order => <OrderCard status={order.status} key={order.number} id={`#${order.number}`} date={order.createAt} title={order.name} ingredients={order.ingredients} price={calculatePrice(order.ingredients)} getIngredientImageFn={getIngredientImage}/>)}
                    </div>
                }
            </div>
        </>
    );
};

export default ProfilePage;