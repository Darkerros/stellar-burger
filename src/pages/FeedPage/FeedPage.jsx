import React, {useEffect, useMemo} from 'react';
import AppHeader from "../../components/AppHeader/AppHeader";
import styles from './FeedPage.module.css'
import OrderCard from "../../components/OrderCard/OrderCard";
import OrdersWorkInfo from "../../components/OrdersWorkInfo/OrdersWorkInfo";
import OrdersStat from "../../components/OrdersStat/OrdersStat";
import {useDispatch, useSelector} from "react-redux";
import {
    webSocketCloseConnectionAction,
    webSocketOpenConnectionAction
} from "../../services/actions/webSocketActions";
import {getIngredientsThunk} from "../../services/actions/getIngredientsThunk";

const FeedPage = () => {
    const dispatch = useDispatch()
    const ingredients = useSelector(state => state.ingredientsReducer.ingredients)
    const {total,totalToday,orders} = useSelector(state => state.orderWebSocketReducer)

    const {completeOrdersList,inWorkOrdersList} = useMemo(() => {
        const ordersStates = {done: [], inWork : []}
        orders.forEach(order => {
            if (order.status === "pending" || order.status === "created") {
                ordersStates.inWork.push(order.number)
            }
            if (order.status === "done") {
                ordersStates.done.push(order.number)
            }
        })
        return {completeOrdersList: ordersStates.done, inWorkOrdersList: ordersStates.inWork}
    },[orders])

    const imageIngredientsDictionary = useMemo(() => {
        const baseImageDictionary = {}
        ingredients.forEach(ingredient => {
            baseImageDictionary[ingredient._id] = ingredient.image_large
        })
        return baseImageDictionary
    }, [ingredients])
    const priceIngredientsDictionary = useMemo(() => {
        const basePriceDictionary = {}
        ingredients.forEach(ingredient => {
            basePriceDictionary[ingredient._id] = ingredient.price
        })
        return basePriceDictionary
    }, [ingredients])
    const getIngredientImageFn = (ingredientId) => imageIngredientsDictionary[ingredientId]

    const calculatePrice = (ingredientsIdList) => ingredientsIdList.reduce((a,id) => id ? a + priceIngredientsDictionary[id] : a,0)


    useEffect(() => {
        if (!ingredients.length) {
            dispatch(getIngredientsThunk())
        }
        // eslint-disable-next-line
    },[ingredients])


    useEffect(() => {
        dispatch(webSocketOpenConnectionAction("wss://norma.nomoreparties.space/orders/all"))

        return () => {
            dispatch(webSocketCloseConnectionAction())
        }
        // eslint-disable-next-line
    },[])


    return (
        <>
            <AppHeader/>
            <div className={styles.content}>
                <h2 className={"text text_type_main-large text_color_primary mt-10 mb-5"}>Лента заказов</h2>
                <div className={styles.feedContainer}>
                    <div className={`${styles.feeds} pr-4`}>
                        {orders.map(order => <OrderCard key={order.number} id={`#${order.number}`} date={order.createAt} title={order.name} ingredients={order.ingredients} price={calculatePrice(order.ingredients)} getIngredientImageFn={getIngredientImageFn}/>)}
                    </div>
                    <div className={"ml-15"}>
                        <OrdersWorkInfo completeOrdersId={completeOrdersList} inWorkOrdersId={inWorkOrdersList}/>
                        <OrdersStat title={"Выполнено за все время:"} count={total} className={"mt-15"} key={"complete_all_time"}/>
                        <OrdersStat title={"Выполнено за сегодня:"} count={totalToday} className={"mt-15"} key={"complete_today"}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeedPage;