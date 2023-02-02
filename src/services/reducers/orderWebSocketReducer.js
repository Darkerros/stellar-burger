import {
    WEBSOCKET_CONNECTION_CLOSED,
    WEBSOCKET_CONNECTION_START, WEBSOCKET_GET_MESSAGE, WEBSOCKET_OPEN_CONNECTION,
} from "../actions/webSocketActions";


const defaultState = {
    orders: [],
    total: 0,
    totalToday: 0,
    isSucess: false,
    isError: false,
    errorMessage: null,
    isConnectionOpen: false,
}


const orderWebSocketReducer = (state = defaultState,action) => {
    switch (action.type) {
        case WEBSOCKET_OPEN_CONNECTION:
            return {
                isError: false,
                errorMessage: null,
                isConnectionOpen: false,
                isSucess: false,
                orders: [],
                total: 0,
                totalToday: 0,
                ...state
            }

        case WEBSOCKET_CONNECTION_START:
            return {
                isError: false,
                errorMessage: null,
                isConnectionOpen: true,
                isSucess: true,
                orders: [],
                total: 0,
                totalToday: 0,
                ...state
            }

        case WEBSOCKET_CONNECTION_CLOSED:
            return {
            isError: false,
            errorMessage: null,
            isConnectionOpen: false,
            isSucess: true,
            ...state
        }

        case WEBSOCKET_GET_MESSAGE:
            return {
                isError: false,
                errorMessage: null,
                isConnectionOpen: true,
                isSucess: true,
                orders: action.payload.orders.reverse(),
                total: action.payload.total,
                totalToday: action.payload.totalToday
            }

        default:
            return state
    }
}

export default orderWebSocketReducer;