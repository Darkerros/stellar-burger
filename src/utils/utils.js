export const checkResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`)
}
export const createRequest = (endpoint, method, body = null) => {
    const settings = {
        method: method,
        headers: {"Content-type": 'application/json'},
    }
    // eslint-disable-next-line no-unused-expressions
    body ? settings.body = JSON.stringify(body) : false
    return fetch(endpoint,settings)
}