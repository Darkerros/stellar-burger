import {FeedWebsocketOrderActionTypes, TFeedWebsocketOrderActions} from "../actions/feed-orders-websocket-actions";
import {IOrderInfo} from "../../types/data/order-info-iterface";


export interface IFeedOrderWebsocketReducerState {
    orders: IOrderInfo[];
    total: number;
    totalToday: number;
    isConnectionOpen: boolean;
    isError: boolean;
    errorMessage: null | string;
}

const defaultState:IFeedOrderWebsocketReducerState = {
    orders: [],
    total: 0,
    totalToday: 0,
    isConnectionOpen: false,
    isError: false,
    errorMessage: null,
}


export const feedOrderWebsocketReducer = (state = defaultState, action: TFeedWebsocketOrderActions) => {
    switch (action.type) {

        case FeedWebsocketOrderActionTypes.FEED_ORDERS_WEBSOCKET_CONNECTION_START:
            return {
                ...state,
                isConnectionOpen: true,
                isError: false,
                errorMessage: null,
            }

        case FeedWebsocketOrderActionTypes.FEED_ORDERS_WEBSOCKET_CONNECTION_CLOSE:
            return {
                ...state,
                isConnectionOpen: false,
                isError: false,
                errorMessage: null,
            }

        case FeedWebsocketOrderActionTypes.FEED_ORDERS_WEBSOCKET_CONNECTION_ERROR:
            return {
                ...state,
                isConnectionOpen: false,
                isError: true,
                errorMessage: action.payload,
            }

        case FeedWebsocketOrderActionTypes.FEED_ORDERS_WEBSOCKET_GET_MESSAGE:
            return {
                isConnectionOpen: true,
                isError: false,
                errorMessage: null,
                orders: action.payload.orders,
                total: action.payload.total,
                totalToday: action.payload.totalToday,
            }

        default:
            return state
    }
}
