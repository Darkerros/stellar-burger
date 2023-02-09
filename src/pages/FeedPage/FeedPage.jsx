import React, {useEffect, useMemo} from 'react';
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
import {useIngredientsData} from "../../hooks/useIngredientsData";
import {superIngredientsSelector} from "../../services/selectors/ingredientsSelectors";

const FeedPage = () => {
    const dispatch = useDispatch()
    const ingredients = useSelector(superIngredientsSelector)
    const {total,totalToday,orders} = useSelector(state => state.orderWebSocketReducer)
    const {getIngredientImage,getIngredientPrice} = useIngredientsData()

    const {completeOrdersList,inWorkOrdersList} = useMemo(() => {
        const ordersStates = {done: [], inWork : []}
        orders.forEach(order => order.status === "done" ? ordersStates.done.push(order.number) : ordersStates.inWork.push(order.number))
        return {completeOrdersList: ordersStates.done, inWorkOrdersList: ordersStates.inWork}
    },[orders])

    const calculatePrice = (ingredientsIdList) => ingredientsIdList.reduce((a,ingredientId) => ingredientId ? a + getIngredientPrice(ingredientId) : a,0)

    useEffect(() => {
        if (!ingredients.length) dispatch(getIngredientsThunk())
        // eslint-disable-next-line
    },[ingredients])


    useEffect(() => {
        dispatch(webSocketOpenConnectionAction("wss://norma.nomoreparties.space/orders/all"))
        return () => {dispatch(webSocketCloseConnectionAction())}
        // eslint-disable-next-line
    },[])


    return (
        <div className={styles.content}>
            <h2 className={"text text_type_main-large text_color_primary mt-10 mb-5"}>Лента заказов</h2>
            <div className={styles.feedContainer}>
                <div className={`${styles.feeds} pr-4`}>
                            {orders.map(order => <OrderCard elementPosition={"feed"} number={`#${order.number}`} key={order.number} id={order._id} date={order.createAt} title={order.name} ingredients={order.ingredients} price={calculatePrice(order.ingredients)} getIngredientImageFn={getIngredientImage}/>)}
                </div>
                <div className={"ml-15"}>
                    <OrdersWorkInfo completeOrdersId={completeOrdersList} inWorkOrdersId={inWorkOrdersList}/>
                    <OrdersStat title={"Выполнено за все время:"} count={total} className={"mt-15"} key={"complete_all_time"}/>
                    <OrdersStat title={"Выполнено за сегодня:"} count={totalToday} className={"mt-15"} key={"complete_today"}/>
                </div>
            </div>
        </div>
    );
};

export default FeedPage;