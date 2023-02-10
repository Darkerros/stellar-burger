import {
    USER_ORDERS_WEBSOCKET_CONNECTION_CLOSE, USER_ORDERS_WEBSOCKET_CONNECTION_ERROR,
    USER_ORDERS_WEBSOCKET_CONNECTION_START, USER_ORDERS_WEBSOCKET_GET_MESSAGE
} from "../actions/userOrdersWebSocketActions";

const defaultState = {
    orders: [],
    isConnectionOpen: false,
    isError: false,
    errorMessage: null,
}


const userOrderWebSocketReducer = (state = defaultState,action) => {
    switch (action.type) {

        case USER_ORDERS_WEBSOCKET_CONNECTION_START:
            return {
                ...state,
                isConnectionOpen: true,
                isError: false,
                errorMessage: null,
            }

        case USER_ORDERS_WEBSOCKET_CONNECTION_CLOSE:
            return {
                ...state,
                isConnectionOpen: false,
                isError: false,
                errorMessage: null,
            }

        case USER_ORDERS_WEBSOCKET_CONNECTION_ERROR:
            return {
                ...state,
                isConnectionOpen: false,
                isError: true,
                errorMessage: action.payload,
            }

        case USER_ORDERS_WEBSOCKET_GET_MESSAGE:
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

export default userOrderWebSocketReducer;