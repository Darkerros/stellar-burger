import React, {useEffect, useMemo} from 'react';
import styles from './feed-page.module.css'
import OrderCard from "../../components/order-card/order-card";
import OrdersWorkInfo from "../../components/orders-work-info/orders-work-info";
import OrdersStat from "../../components/order-stat/orders-stat";
import {useDispatch, useSelector} from "react-redux";
import {getIngredientsThunk} from "../../services/actions/getIngredientsThunk";
import {superIngredientsSelector} from "../../services/selectors/ingredientsSelectors";
import {websocketUrl} from "../../utils/websocketUrl";
import {Outlet} from "react-router-dom";
import {
    feedOrdersWebSocketCloseConnectAction,
    feedOrdersWebSocketStartConnectAction
} from "../../services/actions/feedOrdersWebSocketActions";
import {superFeedOrdersWebSocketReducerSelector} from "../../services/selectors/feedOrdersWebSocketSelectors";
import Loading from "../../components/loading/loading";

const FeedPage = () => {
    const dispatch = useDispatch()
    const ingredients = useSelector(superIngredientsSelector)
    const {total,totalToday,orders} = useSelector(superFeedOrdersWebSocketReducerSelector)

    const {completeOrdersList,inWorkOrdersList} = useMemo(() => orders.reduce((prev,order) => order.status === "done" ? {...prev, completeOrdersList: [...prev.completeOrdersList,order.number]} : {...prev, inWorkOrdersList: [...prev.inWorkOrdersList,order.number]},{completeOrdersList: [],inWorkOrdersList: []}),[orders])

    useEffect(() => {
        if (!ingredients.length) dispatch(getIngredientsThunk())
        // eslint-disable-next-line
    },[ingredients])

    useEffect(() => {
        dispatch(feedOrdersWebSocketStartConnectAction(websocketUrl.allFeedUrl))
        return () => {dispatch(feedOrdersWebSocketCloseConnectAction())}
        // eslint-disable-next-line
    },[])

    return (
        ingredients.length && orders.length
            ?
            <div className={styles.content}>
                <h2 className={"text text_type_main-large text_color_primary mt-10 mb-5"}>Лента заказов</h2>
                <div className={styles.feedContainer}>
                    <div className={`${styles.feeds} pr-4`}>
                        {orders.map(order => <OrderCard elementPosition={"feed"} orderInfo={order} key={order._id}/>)}
                    </div>
                    <div className={"ml-15"}>
                        <OrdersWorkInfo completeOrdersId={completeOrdersList} inWorkOrdersId={inWorkOrdersList}/>
                        <OrdersStat title={"Выполнено за все время:"} count={total} className={"mt-15"} key={"complete_all_time"}/>
                        <OrdersStat title={"Выполнено за сегодня:"} count={totalToday} className={"mt-15"} key={"complete_today"}/>
                    </div>
                </div>
                <Outlet/>
            </div>
            :
            <Loading/>

    );
};

export default FeedPage;