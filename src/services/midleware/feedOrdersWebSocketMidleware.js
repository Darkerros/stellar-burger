import {
    FEED_ORDERS_WEBSOCKET_CLOSE_CONNECT,
    FEED_ORDERS_WEBSOCKET_START_CONNECT,
    feedOrdersWebSocketConnectionCloseAction,
    feedOrdersWebSocketConnectionErrorAction,
    feedOrdersWebSocketConnectionStartAction, feedOrdersWebSocketGetMessageAction
} from "../actions/feedOrdersWebSocketActions";

export const feedOrdersWebSocketMidleware = () => store => {
    let socket = null;
    return next => action => {
        const {dispatch} = store
        const {type, payload} = action

        if (type === FEED_ORDERS_WEBSOCKET_START_CONNECT) {
            socket = new WebSocket(payload)
        }

        if (socket) {

            socket.onopen = event => dispatch(feedOrdersWebSocketConnectionStartAction(event))
            socket.onclose = event => dispatch(feedOrdersWebSocketConnectionCloseAction(event))
            socket.onerror = event => dispatch(feedOrdersWebSocketConnectionErrorAction(event))
            socket.onmessage = event => dispatch(feedOrdersWebSocketGetMessageAction(JSON.parse(event.data)))

            if (type === FEED_ORDERS_WEBSOCKET_CLOSE_CONNECT && socket.readyState === 1) {
                socket.close(1000, "default")
                socket = null
            }
        }

        next(action)
    }
}