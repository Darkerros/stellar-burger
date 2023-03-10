import React, {useEffect, useMemo} from 'react';
import styles from './feed-page.module.css'
import OrderCard from "../../components/order-card/order-card";
import OrdersWorkInfo from "../../components/orders-work-info/orders-work-info";
import OrdersStat from "../../components/order-stat/orders-stat";
import {superIngredientsSelector} from "../../services/selectors/ingredients-selectors";
import {websocketUrl} from "../../utils/websocketUrl";
import {Outlet} from "react-router-dom";
import {
    feedOrdersWebSocketCloseConnectAction,
    feedOrdersWebSocketStartConnectAction
} from "../../services/actions/feed-orders-websocket-actions";
import {superFeedOrdersWebSocketReducerSelector} from "../../services/selectors/feed-orders-websocket-selectors";
import Loading from "../../components/loading/loading";
import {useAppDispatch} from "../../hooks/use-app-dispatch";
import {useAppSelector} from "../../hooks/use-app-selector";
import {IOrderInfo} from "../../types/data/order-info-iterface";

const FeedPage = () => {
    const dispatch = useAppDispatch()
    const ingredients = useAppSelector(superIngredientsSelector)
    const orderReducerState = useAppSelector(superFeedOrdersWebSocketReducerSelector)

    const {completeOrdersList,inWorkOrdersList} = useMemo(() => orderReducerState.orders.reduce((prev:{completeOrdersList: [],inWorkOrdersList: []},order: IOrderInfo) => order.status === "done" ? {...prev, completeOrdersList: [...prev.completeOrdersList,order.number]} : {...prev, inWorkOrdersList: [...prev.inWorkOrdersList,order.number]},{completeOrdersList: [],inWorkOrdersList: []}),[orderReducerState.orders])

    useEffect(() => {
        dispatch(feedOrdersWebSocketStartConnectAction(websocketUrl.allFeedUrl))
        return () => {dispatch(feedOrdersWebSocketCloseConnectAction())}
        // eslint-disable-next-line
    },[])

    return (
        ingredients.length && orderReducerState.orders.length
            ?
            <div className={styles.content}>
                <h2 className={"text text_type_main-large text_color_primary mt-10 mb-5"}>Лента заказов</h2>
                <div className={styles.feedContainer}>
                    <div className={`${styles.feeds} pr-4`}>
                        {orderReducerState.orders.map((order: IOrderInfo) => <OrderCard elementPosition={"feed"} orderInfo={order} key={order._id}/>)}
                    </div>
                    <div className={"ml-15"}>
                        <OrdersWorkInfo completeOrdersId={completeOrdersList} inWorkOrdersId={inWorkOrdersList}/>
                        <OrdersStat title={"Выполнено за все время:"} count={orderReducerState.total} className={"mt-15"} key={"complete_all_time"}/>
                        <OrdersStat title={"Выполнено за сегодня:"} count={orderReducerState.totalToday} className={"mt-15"} key={"complete_today"}/>
                    </div>
                </div>
                <Outlet/>
            </div>
            :
            <Loading/>

    );
};

export default FeedPage;