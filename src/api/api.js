import {checkResponse} from "../utils/utils";

const BASE_URL = 'https://norma.nomoreparties.space'

const createRequest = (endpoint, method, body = null) => {
    const settings = {
        method: method,
        headers: {"Content-type": 'application/json'},
    }
    // eslint-disable-next-line no-unused-expressions
    body ? settings.body = JSON.stringify(body) : false
    return fetch(endpoint,settings)
}


const api = {
    getrIngredients: () => createRequest(`${BASE_URL}/api/ingredients`,"GET").then(checkResponse),
    createOrder: (ingredientsList) => createRequest(`${BASE_URL}/api/orders`,"POST",{ingredients: ingredientsList}).then(checkResponse)
}

export default api;