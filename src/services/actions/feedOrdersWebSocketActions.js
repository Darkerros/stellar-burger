export const FEED_ORDERS_WEBSOCKET_START_CONNECT = "FEED_ORDERS_WEBSOCKET_START_CONNECT"
export const FEED_ORDERS_WEBSOCKET_CLOSE_CONNECT = "FEED_ORDERS_WEBSOCKET_CLOSE_CONNECT"
export const FEED_ORDERS_WEBSOCKET_CONNECTION_START = "FEED_ORDERS_WEBSOCKET_CONNECTION_START"
export const FEED_ORDERS_WEBSOCKET_CONNECTION_ERROR = "FEED_ORDERS_WEBSOCKET_CONNECTION_ERROR"
export const FEED_ORDERS_WEBSOCKET_CONNECTION_CLOSE = "FEED_ORDERS_WEBSOCKET_CONNECTION_CLOSE"
export const FEED_ORDERS_WEBSOCKET_GET_MESSAGE = "FEED_ORDERS_WEBSOCKET_GET_MESSAGE"


export const feedOrdersWebSocketStartConnectAction = url => ({type: FEED_ORDERS_WEBSOCKET_START_CONNECT, payload: url})
export const feedOrdersWebSocketCloseConnectAction = () => ({type: FEED_ORDERS_WEBSOCKET_CLOSE_CONNECT})


export const feedOrdersWebSocketConnectionStartAction = event => ({type: FEED_ORDERS_WEBSOCKET_CONNECTION_START, payload: event})
export const feedOrdersWebSocketConnectionErrorAction = event => ({type: FEED_ORDERS_WEBSOCKET_CONNECTION_ERROR, payload: event})
export const feedOrdersWebSocketConnectionCloseAction = event => ({type: FEED_ORDERS_WEBSOCKET_CONNECTION_CLOSE, payload: event})
export const feedOrdersWebSocketGetMessageAction = data => ({type: FEED_ORDERS_WEBSOCKET_GET_MESSAGE, payload: data})