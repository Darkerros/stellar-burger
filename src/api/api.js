import {checkResponse, createRequest} from "../utils/utils";

const BASE_URL = 'https://norma.nomoreparties.space'

const api = {
    getrIngredients: () => createRequest(`${BASE_URL}/api/ingredients`,"GET").then(checkResponse),
    createOrder: (ingredientsList) => createRequest(`${BASE_URL}/api/orders`,"POST",{ingredients: ingredientsList}).then(checkResponse)
}

export default api;