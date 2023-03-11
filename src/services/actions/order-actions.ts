import {IOrderInfo} from "../../types/data/order-info-iterface";

export enum OrderActionTypes {
    ORDER_LOADING = "ORDER_LOADING",
    ORDER_GET = "ORDER_GET",
    ORDER_FAIL = "ORDER_FAIL"
}

export type TOrderActions = IOrderGetAction | IOrderLoadingAction | IOrderLoadingFailAction

interface IOrderLoadingAction {
    type: OrderActionTypes.ORDER_LOADING;
}

interface IOrderGetAction {
    type: OrderActionTypes.ORDER_GET;
    payload: any;
}

interface IOrderLoadingFailAction {
    type: OrderActionTypes.ORDER_FAIL;
    payload: string;
}

export const orderLoadingAction = ():TOrderActions => ({type: OrderActionTypes.ORDER_LOADING})
export const orderLoadingFailAction = (errorMessage:string):TOrderActions => ({type: OrderActionTypes.ORDER_FAIL, payload: errorMessage})
export const orderGetAction = (order:IOrderInfo):TOrderActions => ({type: OrderActionTypes.ORDER_GET, payload: order})
