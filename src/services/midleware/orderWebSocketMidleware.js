import {
    WEBSOCKET_CLOSE_CONNECTION,
    WEBSOCKET_OPEN_CONNECTION, WEBSOCKET_SEND_MESSAGE,
    webSocketCloseConnectionAction,
    webSocketConnectionErrorAction,
    webSocketConnectionStartAction, webSocketGetMessageAction
} from "../actions/webSocketActions";

export const orderWebSocketMidleware = () => store => {
    let socket = null;
    return next => action => {
        const {dispatch} = store
        const {type, payload} = action

        if (type === WEBSOCKET_OPEN_CONNECTION) {
            socket = new WebSocket(payload)
        }

        if (socket) {

            socket.onopen = event => dispatch(webSocketConnectionStartAction(event))
            socket.onclose = event => dispatch(webSocketCloseConnectionAction(event))
            socket.onerror = event => dispatch(webSocketConnectionErrorAction(event))
            socket.onmessage = event => dispatch(webSocketGetMessageAction(JSON.parse(event.data)))

            if (type === WEBSOCKET_SEND_MESSAGE) {
                socket.send(JSON.stringify(payload))
            }

            if (type === WEBSOCKET_CLOSE_CONNECTION && socket.readyState === 1) {
                socket.close(1000, "default")
                socket = null
            }
        }

        next(action)
    }
}