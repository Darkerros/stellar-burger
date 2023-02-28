export const USER_ORDERS_WEBSOCKET_START_CONNECT = "USER_ORDERS_WEBSOCKET_START_CONNECT"
export const USER_ORDERS_WEBSOCKET_CLOSE_CONNECT = "USER_ORDERS_WEBSOCKET_CLOSE_CONNECT"
export const USER_ORDERS_WEBSOCKET_CONNECTION_START = "USER_ORDERS_WEBSOCKET_CONNECTION_START"
export const USER_ORDERS_WEBSOCKET_CONNECTION_ERROR = "USER_ORDERS_WEBSOCKET_CONNECTION_ERROR"
export const USER_ORDERS_WEBSOCKET_CONNECTION_CLOSE = "USER_ORDERS_WEBSOCKET_CONNECTION_CLOSE"
export const USER_ORDERS_WEBSOCKET_GET_MESSAGE = "USER_ORDERS_WEBSOCKET_GET_MESSAGE"


export const userOrdersWebSocketStartConnectAction = url => ({type: USER_ORDERS_WEBSOCKET_START_CONNECT, payload: url})
export const userOrdersWebSocketCloseConnectAction = () => ({type: USER_ORDERS_WEBSOCKET_CLOSE_CONNECT})


export const userOrdersWebSocketConnectionStartAction = event => ({type: USER_ORDERS_WEBSOCKET_CONNECTION_START, payload: event})
export const userOrdersWebSocketConnectionErrorAction = event => ({type: USER_ORDERS_WEBSOCKET_CONNECTION_ERROR, payload: event})
export const userOrdersWebSocketConnectionCloseAction = event => ({type: USER_ORDERS_WEBSOCKET_CONNECTION_CLOSE, payload: event})
export const userOrdersWebSocketGetMessageAction = data => ({type: USER_ORDERS_WEBSOCKET_GET_MESSAGE, payload: data})
