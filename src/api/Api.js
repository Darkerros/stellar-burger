import {checkResponse} from "../utils/utils";

class Api {
    constructor(props) {
        this.baseUrl =  'https://norma.nomoreparties.space'
    }

    createRequest = (endpoint, method, body = null,authorization = null) => {
        const settings = {
            method: method,
            headers: {
                "Content-type": 'application/json',
            },
        }
        // eslint-disable-next-line no-unused-expressions
        authorization ? settings.headers.Authorization = authorization : false
        // eslint-disable-next-line no-unused-expressions
        body ? settings.body = JSON.stringify(body) : false
        return fetch(endpoint,settings).then(checkResponse)
    }
    getIngredients = () => this.createRequest(`${this.baseUrl}/api/ingredients`,"GET")
    createOrder = (ingredientsList) => this.createRequest(`${this.baseUrl}/api/orders`,"POST",{ingredients: ingredientsList})
    registrateUser = (name,email,password) => this.createRequest(`${this.baseUrl}/api/auth/register`,"POST",{name, password, email})
    login = (email,password) => this.createRequest(`${this.baseUrl}/api/auth/login`,"POST",{password, email})
    updateToken = (refreshToken) => this.createRequest(`${this.baseUrl}/api/auth/token`,"POST",{refreshToken})
    logout = (refreshToken) => this.createRequest(`${this.baseUrl}/api/auth/logout`,"POST",{refreshToken})

    getUser = (token) => this.createRequest(`${this.baseUrl}/api/auth/user`,"GET",null,token)

}

export default new Api();