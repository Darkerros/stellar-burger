const ENDPOINT = 'https://norma.nomoreparties.space/api/ingredients '

const api = {getrIngredients : () => {return fetch(ENDPOINT).then(resp => resp.json())}}
export default api;