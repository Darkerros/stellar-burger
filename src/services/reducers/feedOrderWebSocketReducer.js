import {
    FEED_ORDERS_WEBSOCKET_CONNECTION_CLOSE,
    FEED_ORDERS_WEBSOCKET_CONNECTION_ERROR,
    FEED_ORDERS_WEBSOCKET_CONNECTION_START, FEED_ORDERS_WEBSOCKET_GET_MESSAGE
} from "../actions/feedOrdersWebSocketActions";

const defaultState = {
    orders: [],
    total: 0,
    totalToday: 0,
    isConnectionOpen: false,
    isError: false,
    errorMessage: null,
}


const feedOrderWebSocketReducer = (state = defaultState,action) => {
    switch (action.type) {

        case FEED_ORDERS_WEBSOCKET_CONNECTION_START:
            return {
                ...state,
                isConnectionOpen: true,
                isError: false,
                errorMessage: null,
            }

        case FEED_ORDERS_WEBSOCKET_CONNECTION_CLOSE:
            return {
                ...state,
                isConnectionOpen: false,
                isError: false,
                errorMessage: null,
            }

        case FEED_ORDERS_WEBSOCKET_CONNECTION_ERROR:
            return {
                ...state,
                isConnectionOpen: false,
                isError: true,
                errorMessage: action.payload,
            }

        case FEED_ORDERS_WEBSOCKET_GET_MESSAGE:
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

export default feedOrderWebSocketReducer;