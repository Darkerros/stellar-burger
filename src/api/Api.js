const ENDPOINT = 'https://norma.nomoreparties.space/api/ingredients '

const api = {getrIngredients : () => fetch(ENDPOINT).then(res => res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`))}

export default api;