
const SET_CART = "SET_CART_ACTION"
const ADD_CART_ITEM = "ADD_CART__ITEM"
const DELETE_CART_ITEM = "DELETE_CART_ITEM"
const SET_BUN = "SET_BUN"

const defaultState = {items : [],bun: undefined}

const cartReducer = (state = defaultState,action) => {
    switch (action.type) {
        case SET_CART:
            return {...state,items: action.payload}
        case ADD_CART_ITEM:
            return {...state,items: [...state.items,action.payload]}
        case DELETE_CART_ITEM:
            return {...state,items: state.items.filter(item => item.cartId !== action.payload)}
        case SET_BUN:
            return {...state,bun: action.payload}
        default:
            return state
    }
}

export default cartReducer;


export const setCartAction = (cart) => ({type: SET_CART,payload: cart})
export const addCartItemAction = (ingredient) => ({type: ADD_CART_ITEM,payload: ingredient})
export const deleteCartItemAction = (cartId) => ({type: DELETE_CART_ITEM,payload: cartId})
export const setBunAction = (bun) => ({type: SET_BUN,payload: bun})