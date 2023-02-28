import {
    USER_ORDERS_WEBSOCKET_CLOSE_CONNECT,
    USER_ORDERS_WEBSOCKET_START_CONNECT,
    userOrdersWebSocketConnectionCloseAction,
    userOrdersWebSocketConnectionErrorAction,
    userOrdersWebSocketConnectionStartAction,
    userOrdersWebSocketGetMessageAction
} from "../actions/userOrdersWebSocketActions";


export const userOrdersWebSocketMidleware = () => store => {
    let socket = null;
    return next => action => {
        const {dispatch} = store
        const {type, payload} = action

        if (type === USER_ORDERS_WEBSOCKET_START_CONNECT) {
            socket = new WebSocket(payload)
        }

        if (socket) {

            socket.onopen = event => dispatch(userOrdersWebSocketConnectionStartAction(event))
            socket.onclose = event => dispatch(userOrdersWebSocketConnectionCloseAction(event))
            socket.onerror = event => dispatch(userOrdersWebSocketConnectionErrorAction(event))
            socket.onmessage = event => dispatch(userOrdersWebSocketGetMessageAction(JSON.parse(event.data)))

            if (type === USER_ORDERS_WEBSOCKET_CLOSE_CONNECT && socket.readyState === 1) {
                socket.close(1000, "default")
                socket = null
            }
        }

        next(action)
    }
}