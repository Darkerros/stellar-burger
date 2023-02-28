export const websocketUrl = {
    allFeedUrl: "wss://norma.nomoreparties.space/orders/all",
    userFeed: (token) => `wss://norma.nomoreparties.space/orders?token=${token}`
}