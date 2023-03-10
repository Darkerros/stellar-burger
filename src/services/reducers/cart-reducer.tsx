import { CartActionTypes, TCartActions} from "../actions/cart-action-types";
import {ICartItem} from "../../types/data/cart-item-interface";
import {IIngredient} from "../../types/data/ingredient-type";


export interface ICartReducerState {
    items: ICartItem[];
    bun: IIngredient | null;
}

const defaultState:ICartReducerState = {items: [], bun: null}

const cartReducer = (state = defaultState, action:TCartActions):ICartReducerState => {
    switch (action.type) {
        case CartActionTypes.SET_CART:
            return {...state, items: action.payload}
        case CartActionTypes.ADD_CART_ITEM:
            return {...state, items: [...state.items, {cartId: Date.now(), ...action.payload}]}
        case CartActionTypes.DELETE_CART_ITEM:
            return {...state, items: state.items.filter(item => item.cartId !== action.payload)}
        case CartActionTypes.SET_BUN:
            return {...state, bun: action.payload}
        case CartActionTypes.SORT_ITEM:
            const items = [...state.items]
            const prevIndex = action.payload.prevIndex
            const nextIndex = action.payload.nextIndex
            items.splice(action.payload.prevIndex, 1, state.items[nextIndex])
            items.splice(action.payload.nextIndex, 1, state.items[prevIndex])
            return {...state, items: [...items]}
        default:
            return state
    }
}

export default cartReducer;

