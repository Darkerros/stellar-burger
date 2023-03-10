import Api from "../../api/api";
import {
    orderGetAction,
    orderLoadingAction,
    orderLoadingFailAction,
    TOrderActions
} from "../actions/order-actions";
import {setBunAction, setCartAction, TCartActions} from "../actions/cart-action-types";
import {ICartReducerState} from "../reducers/cart-reducer";
import {TAppThunk} from "./app-thunk-type";

export const createOrderThunk = (cart: ICartReducerState, handleOpenOrderModal: () => void, token: string): TAppThunk<TOrderActions | TCartActions> => (dispatch) => {
    const cartItemId = cart.bun ? [cart.bun._id, ...cart.items.map(item => item._id), cart.bun._id] : []
    dispatch(orderLoadingAction())
    Api.createOrder(cartItemId, token)
        .then(data => {
            dispatch(orderGetAction(data.order))
            dispatch(setBunAction(null))
            dispatch(setCartAction([]))
        })
        .then(() => handleOpenOrderModal())
        .catch((error) => dispatch(orderLoadingFailAction(error)))
}
