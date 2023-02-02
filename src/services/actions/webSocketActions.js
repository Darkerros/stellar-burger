export const WEBSOCKET_CONNECTION_START = "WEBSOCKET_CONNECTION_START"
export const WEBSOCKET_CONNECTION_ERROR = "WEBSOCKET_CONNECTION_ERROR"
export const WEBSOCKET_CONNECTION_CLOSED = "WEBSOCKET_CONNECTION_CLOSED"
export const WEBSOCKET_CLOSE_CONNECTION = "WEBSOCKET_CLOSE_CONNECTION"
export const WEBSOCKET_OPEN_CONNECTION = "WEBSOCKET_OPEN_CONNECTION"
export const WEBSOCKET_GET_MESSAGE = "WEBSOCKET_GET_MESSAGE"
export const WEBSOCKET_SEND_MESSAGE = "WEBSOCKET_SEND_MESSAGE"

export const webSocketConnectionStartAction = (event) => ({type: WEBSOCKET_CONNECTION_START, payload: event})
export const webSocketOpenConnectionAction = (webSocketUrl) => ({type: WEBSOCKET_OPEN_CONNECTION, payload: webSocketUrl})
export const webSocketConnectionClosedAction = (event) => ({type: WEBSOCKET_CONNECTION_CLOSED, payload: event})
export const webSocketCloseConnectionAction = () => ({type: WEBSOCKET_CLOSE_CONNECTION})
export const webSocketConnectionErrorAction= (event) => ({type: WEBSOCKET_CONNECTION_ERROR, payload: event})
export const webSocketGetMessageAction= (data) => ({type: WEBSOCKET_GET_MESSAGE, payload: data})
export const webSocketSendMessageAction= (data) => ({type: WEBSOCKET_SEND_MESSAGE, payload: data})