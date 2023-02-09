import styles from './ProfileOrders.module.css'
import OrderCard from "../OrderCard/OrderCard";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getIngredientsThunk} from "../../services/actions/getIngredientsThunk";
import {webSocketCloseConnectionAction, webSocketOpenConnectionAction} from "../../services/actions/webSocketActions";
import useTokenStorage from "../../hooks/useTokenStorage";
import {websocketUrl} from "../../utils/websocketUrl";
import {superOrderWebSocketOrdersSelector} from "../../services/selectors/orderWebSocketSelectors";
import {superIngredientsSelector} from "../../services/selectors/ingredientsSelectors";


const ProfileOrders = () => {
    const dispatch = useDispatch()
    const tokenStorage = useTokenStorage()
    const orders = useSelector(superOrderWebSocketOrdersSelector)
    const ingredients = useSelector(superIngredientsSelector)

    // eslint-disable-next-line
    useEffect(() => {!ingredients.length && dispatch(getIngredientsThunk())},[ingredients])

    useEffect(() => {
        dispatch(webSocketOpenConnectionAction(websocketUrl.userFeed(tokenStorage.getToken().split(" ")[1])))

        return () => {
            dispatch(webSocketCloseConnectionAction())
        }
        // eslint-disable-next-line
    },[])

    return (
        <div className={styles.feed + " pr-4"}>
            {orders.map(order => <OrderCard elementPosition={"profile"} orderInfo={order} key={order._id}/> )}
        </div>
    );
};

export default ProfileOrders;