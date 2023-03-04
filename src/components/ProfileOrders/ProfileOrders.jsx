import styles from './ProfileOrders.module.css'
import OrderCard from "../OrderCard/OrderCard";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {getIngredientsThunk} from "../../services/actions/getIngredientsThunk";
import useTokenStorage from "../../hooks/useTokenStorage";
import {websocketUrl} from "../../utils/websocketUrl";
import {superIngredientsSelector} from "../../services/selectors/ingredientsSelectors";
import {
    userOrdersWebSocketCloseConnectAction,
    userOrdersWebSocketStartConnectAction
} from "../../services/actions/userOrdersWebSocketActions";
import {superUserOrdersWebSocketOrdersSelector} from "../../services/selectors/userOrdersWebSocketSelectors";
import {Outlet} from "react-router-dom";


const ProfileOrders = () => {
    const dispatch = useDispatch()
    const tokenStorage = useTokenStorage()
    const ingredients = useSelector(superIngredientsSelector)
    const orders = useSelector(superUserOrdersWebSocketOrdersSelector)

    // eslint-disable-next-line
    useEffect(() => {!ingredients.length && dispatch(getIngredientsThunk())},[ingredients])

    useEffect(() => {
        dispatch(userOrdersWebSocketStartConnectAction(websocketUrl.userFeed(tokenStorage.getToken().split(" ")[1])))

        return () => {
            dispatch(userOrdersWebSocketCloseConnectAction())
        }
        // eslint-disable-next-line
    },[])

    return (
        <div className={styles.feed + " pr-4"}>
            {orders.map(order => <OrderCard elementPosition={"profile"} orderInfo={order} key={order._id}/> )}
            {ingredients.length && <Outlet/>}
        </div>
    );
};

export default ProfileOrders;