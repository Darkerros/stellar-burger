export enum UserWebsocketOrdersActionTypes {
    USER_ORDERS_WEBSOCKET_START_CONNECT = "USER_ORDERS_WEBSOCKET_START_CONNECT",
    USER_ORDERS_WEBSOCKET_CLOSE_CONNECT = "USER_ORDERS_WEBSOCKET_CLOSE_CONNECT",
    USER_ORDERS_WEBSOCKET_CONNECTION_START = "USER_ORDERS_WEBSOCKET_CONNECTION_START",
    USER_ORDERS_WEBSOCKET_CONNECTION_ERROR = "USER_ORDERS_WEBSOCKET_CONNECTION_ERROR",
    USER_ORDERS_WEBSOCKET_CONNECTION_CLOSE = "USER_ORDERS_WEBSOCKET_CONNECTION_CLOSE",
    USER_ORDERS_WEBSOCKET_GET_MESSAGE = "USER_ORDERS_WEBSOCKET_GET_MESSAGE"
}

export type TUserWebsocketOrdersActions =
    IUserOrdersWebsocketStartConnectAction
    | IUserOrdersWebsocketCloseConnectAction
    | IUserOrdersWebsocketConnectionStartAction
    | IUserOrdersWebsocketConnectionErrorAction
    | IUserOrdersWebsocketConnectionCloseAction
    | IUserOrdersWebsocketGetMessageAction

interface IUserOrdersWebsocketStartConnectAction {
    type: UserWebsocketOrdersActionTypes.USER_ORDERS_WEBSOCKET_START_CONNECT

    payload: any
}
interface IUserOrdersWebsocketCloseConnectAction {
    type: UserWebsocketOrdersActionTypes.USER_ORDERS_WEBSOCKET_CLOSE_CONNECT
}
interface IUserOrdersWebsocketConnectionStartAction {
    type: UserWebsocketOrdersActionTypes.USER_ORDERS_WEBSOCKET_CONNECTION_START

    payload: any
}
interface IUserOrdersWebsocketConnectionErrorAction {
    type: UserWebsocketOrdersActionTypes.USER_ORDERS_WEBSOCKET_CONNECTION_ERROR

    payload: any
}
interface IUserOrdersWebsocketConnectionCloseAction {
    type: UserWebsocketOrdersActionTypes.USER_ORDERS_WEBSOCKET_CONNECTION_CLOSE

    payload: any
}
interface IUserOrdersWebsocketGetMessageAction {
    type: UserWebsocketOrdersActionTypes.USER_ORDERS_WEBSOCKET_GET_MESSAGE

    payload: any
}

export type TUserOrdersWebSocketStartConnectAction = (url: string) => TUserWebsocketOrdersActions
export type TUserOrdersWebSocketCloseConnectAction = () => TUserWebsocketOrdersActions
export type TUserOrdersWebSocketConnectionStartAction = (event: Event) => TUserWebsocketOrdersActions
export type TUserOrdersWebSocketConnectionErrorAction = (event: Event) => TUserWebsocketOrdersActions
export type TUserOrdersWebSocketConnectionCloseAction = (event: Event) => TUserWebsocketOrdersActions
export type TUserOrdersWebSocketGetMessageAction = (data: object) => TUserWebsocketOrdersActions

export const userOrdersWebSocketStartConnectAction:TUserOrdersWebSocketStartConnectAction = (url: string) => ({
    type: UserWebsocketOrdersActionTypes.USER_ORDERS_WEBSOCKET_START_CONNECT,
    payload: url
})
export const userOrdersWebSocketCloseConnectAction:TUserOrdersWebSocketCloseConnectAction = () => ({type: UserWebsocketOrdersActionTypes.USER_ORDERS_WEBSOCKET_CLOSE_CONNECT})
export const userOrdersWebSocketConnectionStartAction:TUserOrdersWebSocketConnectionStartAction = (event) => ({
    type: UserWebsocketOrdersActionTypes.USER_ORDERS_WEBSOCKET_CONNECTION_START,
    payload: event
})
export const userOrdersWebSocketConnectionErrorAction:TUserOrdersWebSocketConnectionErrorAction = (event) => ({
    type: UserWebsocketOrdersActionTypes.USER_ORDERS_WEBSOCKET_CONNECTION_ERROR,
    payload: event
})
export const userOrdersWebSocketConnectionCloseAction:TUserOrdersWebSocketConnectionCloseAction = (event) => ({
    type: UserWebsocketOrdersActionTypes.USER_ORDERS_WEBSOCKET_CONNECTION_CLOSE,
    payload: event
})
export const userOrdersWebSocketGetMessageAction:TUserOrdersWebSocketGetMessageAction = (data) => ({
    type: UserWebsocketOrdersActionTypes.USER_ORDERS_WEBSOCKET_GET_MESSAGE,
    payload: data
})
