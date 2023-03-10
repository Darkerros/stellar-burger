import {IIngredient} from "../../types/data/ingredient-type";
import {ICartItem} from "../../types/data/cart-item-interface";

export enum CartActionTypes {
    SET_CART = "SET_CART_ACTION",
    ADD_CART_ITEM = "ADD_CART__ITEM",
    DELETE_CART_ITEM = "DELETE_CART_ITEM",
    SET_BUN = "SET_BUN",
    SORT_ITEM = "SORT_ITEM"
}

export type TCartActions = ISetCartAction | ISetBunAction | IAddCartItemAction | IDeleteCartItemAction | ISortCartAction
interface ISetCartAction {
    type: CartActionTypes.SET_CART
    payload: ICartItem[]
}

interface ISetBunAction {
    type: CartActionTypes.SET_BUN
    payload: IIngredient | null
}

interface IAddCartItemAction {
    type: CartActionTypes.ADD_CART_ITEM
    payload: IIngredient
}

interface IDeleteCartItemAction {
    type: CartActionTypes.DELETE_CART_ITEM
    payload: number
}

interface ISortCartAction {
    type: CartActionTypes.SORT_ITEM
    payload: {prevIndex: number, nextIndex: number}
}

export const setCartAction = (cart:ICartItem[]):TCartActions => ({type: CartActionTypes.SET_CART, payload: cart})
export const addCartItemAction = (ingredient:IIngredient):TCartActions => ({type: CartActionTypes.ADD_CART_ITEM, payload: ingredient})
export const deleteCartItemAction = (cartId:number):TCartActions => ({type: CartActionTypes.DELETE_CART_ITEM, payload: cartId})
export const setBunAction = (bun:IIngredient | null):TCartActions => ({type: CartActionTypes.SET_BUN, payload: bun})
export const sortCartAction = (prevIndex:number, nextIndex:number):TCartActions => ({
    type: CartActionTypes.SORT_ITEM,
    payload: {prevIndex: prevIndex, nextIndex: nextIndex}
})
