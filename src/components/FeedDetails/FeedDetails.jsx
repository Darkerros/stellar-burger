import React, {useEffect} from 'react';
import styles from './FeedDetails.module.css'
import priceIcon from "../../images/icons/money-icon.png";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {webSocketCloseConnectionAction, webSocketOpenConnectionAction} from "../../services/actions/webSocketActions";
import {getIngredientsThunk} from "../../services/actions/getIngredientsThunk";

const FeedDetails = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {orders,ingredients} = useSelector(state => ({orders: state.orderWebSocketReducer.orders, ingredients: state.ingredientsReducer.ingredients}))
    const order = orders.find(order => order._id === id) || null


    useEffect(() => {
        dispatch(getIngredientsThunk())
        dispatch(webSocketOpenConnectionAction("wss://norma.nomoreparties.space/orders/all"))
        return () => {dispatch(webSocketCloseConnectionAction())}
    }, [])

    useEffect(() => {
        if (ingredients && orders && order) {
            order.ingredients = order.ingredients.map(ingredientsId => {
                if (ingredientsId) {
                    const ingredientInfo = ingredients.find(ingredient => ingredient._id === ingredientsId)
                    if (ingredientInfo) return ingredientInfo
                }
            })
        }
    },[ingredients,orders,order])

    console.log(order)

    return (
        <div className={`${styles.container}`}>
            <p className={`text text_type_main-default text_color_primary ${styles.id}`}>#034533</p>
            <p className={"text text_type_main-medium text_color_primary mt-10"}>Black Hole Singularity острый бургер</p>
            <p className={"text text_type_main-small text_color_primary mt-3"}>Выполнен</p>
            <p className={"text text_type_main-medium text_color_primary mt-15"}>Состав:</p>
            <div className={`${styles.ingredientsContainer} mt-6 pr-4`}>

            </div>
            <div className={`${styles.infoContainer} mt-10`}>
                <p className={"text text_type_main-small text_color_inactive"}>Вчера, 13:50 i-GMT+3</p>
                <div className={styles.price}>
                    <p className={"text text_type_digits-default text_color_primary"}>510</p>
                    <img src={priceIcon} alt="Иконка денег" className={styles.priceIcon}/>
                </div>
            </div>
        </div>
    );
};

export default FeedDetails;