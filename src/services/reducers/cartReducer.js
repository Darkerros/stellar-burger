
const SET_CART = "SET_CART_ACTION"
const ADD_CART_ITEM = "ADD_CART__ITEM"
const DELETE_CART_ITEM = "DELETE_CART_ITEM"
const SET_BUN = "SET_BUN"
const SORT_ITEM = "SORT_ITEM"

const defaultState = {items : [],bun: null}

const cartReducer = (state = defaultState,action) => {
    switch (action.type) {
        case SET_CART:
            return {...state,items: action.payload}
        case ADD_CART_ITEM:
            return {...state,items: [...state.items, {cartId: Date.now(), ...action.payload}]}
        case DELETE_CART_ITEM:
            return {...state,items: state.items.filter(item => item.cartId !== action.payload)}
        case SET_BUN:
            return {...state,bun: action.payload}
        case SORT_ITEM:
            const items = [...state.items]
            const prevIndex = action.payload.prevIndex
            const nextIndex = action.payload.nextIndex
            items.splice(action.payload.prevIndex,1,state.items[nextIndex])
            items.splice(action.payload.nextIndex,1,state.items[prevIndex])

            return {...state,items: [...items]}
        default:
            return state
    }
}

export default cartReducer;


export const setCartAction = (cart) => ({type: SET_CART,payload: cart})
export const addCartItemAction = (ingredient) => ({type: ADD_CART_ITEM,payload: ingredient})
export const deleteCartItemAction = (cartId) => ({type: DELETE_CART_ITEM,payload: cartId})
export const setBunAction = (bun) => ({type: SET_BUN,payload: bun})
export const sortCartAction = (prevIndex,nextIndex) => ({type: SORT_ITEM,payload: {prevIndex: prevIndex,nextIndex:nextIndex}})