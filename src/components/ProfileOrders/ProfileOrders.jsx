import styles from './ProfileOrders.module.css'
import OrderCard from "../OrderCard/OrderCard";
import {useDispatch, useSelector} from "react-redux";
import {useIngredientsData} from "../../hooks/useIngredientsData";
import {useEffect} from "react";
import {getIngredientsThunk} from "../../services/actions/getIngredientsThunk";
import {webSocketCloseConnectionAction, webSocketOpenConnectionAction} from "../../services/actions/webSocketActions";
import useTokenStorage from "../../hooks/useTokenStorage";
import {websocketUrl} from "../../utils/websocketUrl";


const ProfileOrders = () => {
    const dispatch = useDispatch()
    const tokenStorage = useTokenStorage()

    const {getIngredientPrice,getIngredientImage} = useIngredientsData()
    const orders = useSelector(state => state.orderWebSocketReducer.orders)
    const ingredients = useSelector(state => state.ingredientsReducer.ingredients)

    const calculatePrice = (ingredientsIdList) => ingredientsIdList.reduce((a,id) => id ? a + getIngredientPrice(id) : a,0)


    useEffect(() => {
        if (!ingredients.length) dispatch(getIngredientsThunk())
        // eslint-disable-next-line
    },[ingredients])

    useEffect(() => {
        dispatch(webSocketOpenConnectionAction(websocketUrl.userFeed(tokenStorage.getToken().split(" ")[1])))

        return () => {
            dispatch(webSocketCloseConnectionAction())
        }
        // eslint-disable-next-line
    },[])

    return (
        <div className={styles.feed + " pr-4"}>
            {orders.map(order => <OrderCard status={order.status} key={order.number} number={`#${order.number}`} id={order._id} date={order.createAt} title={order.name} ingredients={order.ingredients} price={calculatePrice(order.ingredients)} getIngredientImageFn={getIngredientImage} elementPosition={"profileΩ"}/>)}
        </div>
    );
};

export default ProfileOrders;