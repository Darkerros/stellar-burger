import OrderInfo from "../../components/OrderInfo/OrderInfo";
import {useLocation, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import useTokenStorage from "../../hooks/useTokenStorage";
import {superIngredientsSelector} from "../../services/selectors/ingredientsSelectors";
import {superUserOrdersWebSocketOrdersSelector} from "../../services/selectors/userOrdersWebSocketSelectors";
import {superFeedOrdersWebSocketOrdersSelector} from "../../services/selectors/feedOrdersWebSocketSelectors";
import {useEffect} from "react";
import {getIngredientsThunk} from "../../services/actions/getIngredientsThunk";
import {websocketUrl} from "../../utils/websocketUrl";
import {
    userOrdersWebSocketCloseConnectAction,
    userOrdersWebSocketStartConnectAction
} from "../../services/actions/userOrdersWebSocketActions";
import {
    feedOrdersWebSocketCloseConnectAction,
    feedOrdersWebSocketStartConnectAction
} from "../../services/actions/feedOrdersWebSocketActions";
import Loading from "../../components/Loading/Loading";
import FeedPage from "../FeedPage/FeedPage";
import ProfilePage from "../ProfilePage/ProfilePage";

const OrderDetailsPage = () => {
    const {id} = useParams()
    const location = useLocation()
    const dispatch = useDispatch()
    const tokenStorage = useTokenStorage()
    const ingredients = useSelector(superIngredientsSelector)
    const orders = useSelector(location.pathname.includes("feed") ? superFeedOrdersWebSocketOrdersSelector : superUserOrdersWebSocketOrdersSelector)

    const order = location.state?.order || orders.find(order => order._id === id)

    useEffect(() => {
        if (!ingredients.length) dispatch(getIngredientsThunk())
    }, [dispatch, ingredients])
    useEffect(() => {
        if (!orders.length) {
            if (location.pathname.includes("feed")) {
                dispatch(feedOrdersWebSocketStartConnectAction(websocketUrl.allFeedUrl))
            } else {
                dispatch(userOrdersWebSocketStartConnectAction(websocketUrl.userFeed(tokenStorage.getToken().replace("Bearer ",""))))
            }

            if (location.pathname.includes("feed")) {
                return () => dispatch(feedOrdersWebSocketCloseConnectAction())
            } else {
                return () => dispatch(userOrdersWebSocketCloseConnectAction())
            }
        }
    }, [dispatch, location, orders, tokenStorage])


    return (
        location.state?.from === "feed"
            ?
            <FeedPage/>
            :
            location.state?.from === "profile"
                ?
                <ProfilePage/>
                :
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