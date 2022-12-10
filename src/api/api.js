const GET_INGREDIENTS_ENDPOINT = 'https://norma.nomoreparties.space/api/ingredients'
const CREATE_ORDER_ENDPOINT = 'https://norma.nomoreparties.space/api/orders'

const api = {
    getrIngredients : () => fetch(GET_INGREDIENTS_ENDPOINT).then(res => res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`)),
    createOrder : (ingredientsList) => fetch(CREATE_ORDER_ENDPOINT,
        {method: "POST",
                headers: {"Content-type": 'application/json'},
                body: JSON.stringify({ingredients: ingredientsList})}).then(res => res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`))
    }

export default api;