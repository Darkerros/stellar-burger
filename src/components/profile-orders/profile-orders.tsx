import styles from './profile-orders.module.css'
import OrderCard from "../order-card/order-card";
import React, {useEffect} from "react";
import {getIngredientsThunk} from "../../services/thunks/get-ingredients-thunk";
import {websocketUrl} from "../../utils/websocketUrl";
import {superIngredientsSelector} from "../../services/selectors/ingredients-selectors";
import {
    userOrdersWebSocketCloseConnectAction,
    userOrdersWebSocketStartConnectAction
} from "../../services/actions/userOrdersWebSocketActions";
import {superUserOrdersWebSocketOrdersSelector} from "../../services/selectors/user-orders-websocket-selectors";
import {Outlet} from "react-router-dom";
import {useAppDispatch} from "../../hooks/use-app-dispatch";
import {useAppSelector} from "../../hooks/use-app-selector";
import {tokenStorage} from "../../utils/utils";


const ProfileOrders = () => {
    const dispatch = useAppDispatch()
    const ingredients = useAppSelector(superIngredientsSelector)
    const orders = useAppSelector(superUserOrdersWebSocketOrdersSelector)

    // eslint-disable-next-line
    useEffect(() => {!ingredients.length && dispatch(getIngredientsThunk())},[ingredients])

    useEffect(() => {
        dispatch(userOrdersWebSocketStartConnectAction(websocketUrl.userFeed(tokenStorage.getToken()?.split(" ")[1])))

        return () => {
            dispatch(userOrdersWebSocketCloseConnectAction())
        }
        // eslint-disable-next-line
    },[])

    return (
        <div className={styles.feed + " pr-4"}>
            {orders.map((order) => <OrderCard elementPosition={"profile"} orderInfo={order} key={order._id}/> )}
            {ingredients.length && <Outlet/>}
        </div>
    );
};

export default ProfileOrders;