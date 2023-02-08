import React, {useEffect, useMemo, useState} from 'react';
import styles from './OrderInfo.module.css'
import priceIcon from "../../images/icons/money-icon.png";
import {useLocation, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {webSocketCloseConnectionAction, webSocketOpenConnectionAction} from "../../services/actions/webSocketActions";
import {getIngredientsThunk} from "../../services/actions/getIngredientsThunk";
import {useIngredientsData} from "../../hooks/useIngredientsData";
import OrderDetailsItem from "../OrderDetailsItem/OrderDetailsItem";
import {useIngredientsCountData} from "../../hooks/useIngredientsCountData";
import {superIngredientsSelector} from "../../services/selectors/ingredientsSelectors";
import {superOrderWebSocketOrdersSelector} from "../../services/selectors/orderWebSocketSelectors";
import {websocketUrl} from "../../utils/websocketUrl";
import useTokenStorage from "../../hooks/useTokenStorage";

const OrderInfo = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const location = useLocation()
    const tokenStorage = useTokenStorage()
    const ingredientsData = useIngredientsData()
    const ingredients = useSelector(superIngredientsSelector)
    const orders = useSelector(superOrderWebSocketOrdersSelector)

    const order = orders.find(order => order._id === id) || null
    const [orderIngredients,setOrderIngredients] = useState([])
    const ingredientsCountData = useIngredientsCountData(orderIngredients,false)

    const orderPrice = useMemo(() => orderIngredients.reduce((prev,ingredient) => prev + ingredient.price,0),[orderIngredients])

    useEffect(() => {
        dispatch(getIngredientsThunk())
        const socketUrl = location.pathname.split("/")[1] === "profile" ? websocketUrl.userFeed(tokenStorage.getToken().split(" ")[1]) : websocketUrl.allFeedUrl

        dispatch(webSocketOpenConnectionAction(socketUrl))
        return () => {dispatch(webSocketCloseConnectionAction())}
        // eslint-disable-next-line
    }, [])


    useEffect(() => {
        if (order && ingredients) {
            const orderIngredients = order.ingredients.map(ingredientsId => ingredientsId && ingredientsData.getIngredientData(ingredientsId))
            setOrderIngredients(orderIngredients)
        }
    },[ingredientsData, order,ingredients])


    return (
        <div className={`${styles.container}`}>
            <p className={`text text_type_main-default text_color_primary ${styles.id}`}>#034533</p>
            <p className={"text text_type_main-medium text_color_primary mt-10"}>Black Hole Singularity острый бургер</p>
            <p className={"text text_type_main-small text_color_primary mt-3"}>Выполнен</p>
            <p className={"text text_type_main-medium text_color_primary mt-15"}>Состав:</p>
            <div className={`${styles.ingredientsContainer} mt-6 pr-4`}>
                {[...new Set(orderIngredients)].map(ingredient => <OrderDetailsItem key={ingredient._id} ingredient={ingredient} count={ingredientsCountData.getIngredientCount(ingredient._id)}/>)}
            </div>
            <div className={`${styles.infoContainer} mt-10`}>
                <p className={"text text_type_main-small text_color_inactive"}>Вчера, 13:50 i-GMT+3</p>
                <div className={styles.price}>
                    <p className={"text text_type_digits-default text_color_primary"}>{orderPrice}</p>
                    <img src={priceIcon} alt="Иконка денег" className={styles.priceIcon}/>
                </div>
            </div>
        </div>
    );
};

export default OrderInfo;