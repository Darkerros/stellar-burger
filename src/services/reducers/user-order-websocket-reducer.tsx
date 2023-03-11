import {TUserWebsocketOrdersActions, UserWebsocketOrdersActionTypes} from "../actions/userOrdersWebSocketActions";
import {IOrderInfo} from "../../types/data/order-info-iterface";

interface IUserWebsocketOrdersReducerState {
    orders: IOrderInfo[];
    isConnectionOpen: boolean;
    isError: boolean;
    errorMessage: null | string;
}

const defaultState:IUserWebsocketOrdersReducerState = {
    orders: [],
    isConnectionOpen: false,
    isError: false,
    errorMessage: null,
}


export const userOrderWebsocketReducer = (state = defaultState, action: TUserWebsocketOrdersActions):IUserWebsocketOrdersReducerState => {
    switch (action.type) {

        case UserWebsocketOrdersActionTypes.USER_ORDERS_WEBSOCKET_CONNECTION_START:
            return {
                ...state,
                isConnectionOpen: true,
                isError: false,
                errorMessage: null,
            }

        case UserWebsocketOrdersActionTypes.USER_ORDERS_WEBSOCKET_CONNECTION_CLOSE:
            return {
                ...state,
                isConnectionOpen: false,
                isError: false,
                errorMessage: null,
            }

        case UserWebsocketOrdersActionTypes.USER_ORDERS_WEBSOCKET_CONNECTION_ERROR:
            return {
                ...state,
                isConnectionOpen: false,
                isError: true,
                errorMessage: action.payload,
            }

        case UserWebsocketOrdersActionTypes.USER_ORDERS_WEBSOCKET_GET_MESSAGE:
            return {
                isConnectionOpen: true,
                isError: false,
                errorMessage: null,
                orders: action.payload.orders.reverse(),
            }

        default:
            return state
    }
}

