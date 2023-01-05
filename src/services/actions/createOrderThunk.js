import api from "../../api/api";
import {orderGetAction, orderLoadingAction, orderLoadingFailAction} from "./orderActions";
import {setBunAction, setCartAction} from "./cartActions";

export const createOrderThunk = (cart,handleOpenOrderModal) => (dispatch) => {
    const cartItemId = cart.bun ? [cart.bun._id,...cart.items.map(item => item._id)] : []
    dispatch(orderLoadingAction())
    api.createOrder(cartItemId)
        .then(data => {
            dispatch(orderGetAction(data.order))
            dispatch(setBunAction(null))
            dispatch(setCartAction([]))
        })
        .then(() => handleOpenOrderModal())
        .catch((error) => dispatch(orderLoadingFailAction(error)))
}
