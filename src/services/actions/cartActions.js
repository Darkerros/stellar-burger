export const SET_CART = "SET_CART_ACTION"
export const ADD_CART_ITEM = "ADD_CART__ITEM"
export const DELETE_CART_ITEM = "DELETE_CART_ITEM"
export const SET_BUN = "SET_BUN"
export const SORT_ITEM = "SORT_ITEM"

export const setCartAction = (cart) => ({type: SET_CART, payload: cart})
export const addCartItemAction = (ingredient) => ({type: ADD_CART_ITEM, payload: ingredient})
export const deleteCartItemAction = (cartId) => ({type: DELETE_CART_ITEM, payload: cartId})
export const setBunAction = (bun) => ({type: SET_BUN, payload: bun})
export const sortCartAction = (prevIndex, nextIndex) => ({
    type: SORT_ITEM,
    payload: {prevIndex: prevIndex, nextIndex: nextIndex}
})
