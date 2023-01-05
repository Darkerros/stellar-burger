import {ADD_CART_ITEM, DELETE_CART_ITEM, SET_BUN, SET_CART, SORT_ITEM} from "../actions/cartActions";

const defaultState = {items: [], bun: null}

const cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_CART:
            return {...state, items: action.payload}
        case ADD_CART_ITEM:
            return {...state, items: [...state.items, {cartId: Date.now(), ...action.payload}]}
        case DELETE_CART_ITEM:
            return {...state, items: state.items.filter(item => item.cartId !== action.payload)}
        case SET_BUN:
            return {...state, bun: action.payload}
        case SORT_ITEM:
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

