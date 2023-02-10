import styles from './ProfileOrders.module.css'
import OrderCard from "../OrderCard/OrderCard";
import {useDispatch, useSelector} from "react-redux";
import React, {useCallback, useEffect, useState} from "react";
import {getIngredientsThunk} from "../../services/actions/getIngredientsThunk";
import useTokenStorage from "../../hooks/useTokenStorage";
import {websocketUrl} from "../../utils/websocketUrl";
import {superIngredientsSelector} from "../../services/selectors/ingredientsSelectors";
import {
    userOrdersWebSocketCloseConnectAction,
    userOrdersWebSocketStartConnectAction
} from "../../services/actions/userOrdersWebSocketActions";
import {superUserOrdersWebSocketOrdersSelector} from "../../services/selectors/userOrdersWebSocketSelectors";
import {useLocation, useNavigate} from "react-router-dom";
import Modal from "../Modal/Modal";
import OrderInfo from "../OrderInfo/OrderInfo";


const ProfileOrders = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const tokenStorage = useTokenStorage()
    const ingredients = useSelector(superIngredientsSelector)
    const orders = useSelector(superUserOrdersWebSocketOrdersSelector)

    const [orderInfoModalState,setOrderInfoModalState] = useState(location.state?.from === 'profile')

    const handleCloseInfoModal = useCallback(() => {
        setOrderInfoModalState(false)
        navigate("/profile/orders")
    },[navigate])

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
            {orderInfoModalState && orders.length &&
                <Modal handleClose={handleCloseInfoModal}>
                    <div className={"mt-15 mb-15"}>
                        <OrderInfo orderInfo={orders.find(order => order._id === location.state.order._id)}/>
                    </div>
                </Modal>
            }
        </div>
    );
};

export default ProfileOrders;