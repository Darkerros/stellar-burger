import OrderInfo from "../../components/order-info/order-info";
import {useLocation, useParams} from "react-router-dom";
import {superIngredientsSelector} from "../../services/selectors/ingredients-selectors";
import {superUserOrdersWebSocketOrdersSelector} from "../../services/selectors/user-orders-websocket-selectors";
import {superFeedOrdersWebSocketOrdersSelector} from "../../services/selectors/feed-orders-websocket-selectors";
import {useEffect} from "react";
import {getIngredientsThunk} from "../../services/thunks/get-ingredients-thunk";
import {websocketUrl} from "../../utils/websocketUrl";
import {
    userOrdersWebSocketCloseConnectAction,
    userOrdersWebSocketStartConnectAction
} from "../../services/actions/userOrdersWebSocketActions";
import {
    feedOrdersWebSocketCloseConnectAction,
    feedOrdersWebSocketStartConnectAction
} from "../../services/actions/feed-orders-websocket-actions";
import Loading from "../../components/loading/loading";
import {tokenStorage} from "../../utils/utils";
import {useAppDispatch} from "../../hooks/use-app-dispatch";
import {useAppSelector} from "../../hooks/use-app-selector";
import {IOrderInfo} from "../../types/data/order-info-iterface";

const OrderDetailsPage = () => {
    const {id} = useParams()
    const location = useLocation()
    const dispatch = useAppDispatch()
    const ingredients = useAppSelector(superIngredientsSelector)
    const orders = useAppSelector(location.pathname.includes("feed") ? superFeedOrdersWebSocketOrdersSelector : superUserOrdersWebSocketOrdersSelector)

    const order = location.state?.order || orders.find((order: IOrderInfo) => order._id === id)

    useEffect(() => {
        if (!ingredients.length) dispatch(getIngredientsThunk())
    }, [dispatch, ingredients])

    useEffect(() => {
        if (!orders.length) {
            const isFromFeed = location.pathname.includes("feed")
            const action = isFromFeed ? feedOrdersWebSocketStartConnectAction(websocketUrl.allFeedUrl) : userOrdersWebSocketStartConnectAction(websocketUrl.userFeed(tokenStorage.getToken().replace("Bearer ", "")))
            const destructAction = isFromFeed ? feedOrdersWebSocketCloseConnectAction() : userOrdersWebSocketCloseConnectAction()

            dispatch(action)
            return () => {
                dispatch(destructAction)
            }
        }
    }, [dispatch, location, orders])


    return (
        order
            ?
            <div className={"mt-10"}>
                <OrderInfo orderInfo={order}/>
            </div>
            :
            <Loading/>
    );
};

export default OrderDetailsPage;