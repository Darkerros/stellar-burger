import {IOrderInfo} from "../../types/data/order-info-iterface";
import {OrderActionTypes, TOrderActions} from "../actions/order-actions";


export interface IOrderReducerState {
    isLoading: boolean;
    isFail: boolean;
    isSuccess: boolean;
    failMessage: null | string
    order: null | IOrderInfo
}

const defaultState:IOrderReducerState = {
    isLoading: false,
    isFail: false,
    isSuccess: false,
    failMessage: null,
    order: null
}

const orderReducer = (state = defaultState, action:TOrderActions):IOrderReducerState => {
    switch (action.type) {
        case OrderActionTypes.ORDER_LOADING:
            return {isLoading: true, isFail: false, isSuccess: false, failMessage: null, order: null,}
        case OrderActionTypes.ORDER_GET:
            return {isLoading: false, isFail: false, isSuccess: true, failMessage: null, order: action.payload}
        case OrderActionTypes.ORDER_FAIL:
            return {isLoading: false, isFail: true, isSuccess: false, order: null, failMessage: action.payload}
        default:
            return state
    }
}

export default orderReducer;

