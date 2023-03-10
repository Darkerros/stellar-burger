import {checkResponse} from "../utils/utils";
import {IUserInfo} from "../types/data/user-info-interface";
import {METHODS} from "../types/api/methods";
import {UpdateTokenResponse} from "../types/api/response/update-token-response";
import {RegisterResponse} from "../types/api/response/register-response";
import {LoginResponse} from "../types/api/response/login-response";
import {GetIngredientsResponse} from "../types/api/response/get-ingredients-response";
import {LogoutResponse} from "../types/api/response/logout-response";
import {GetUserResponse} from "../types/api/response/get-user-response";
import {ResetPasswordResponse} from "../types/api/response/reset-password-response";
import {ResetPasswordAcceptResponse} from "../types/api/response/reset-password-accept-response";
import {CreateOrderResponse} from "../types/api/response/create-order-response";
import {UpdateUserInfoResponse} from "../types/api/response/update-user-info-response";


class Api {
    private readonly baseUrl:string

    constructor(baseUrl = 'https://norma.nomoreparties.space') {
        this.baseUrl =  baseUrl
    }

    createRequest(endpoint: string, method: METHODS, body: null | any = null, authorization: null | string = null) {
        const settings: any = {
            method: method,
            headers: {
                "Content-type": 'application/json',
            },
        }

        if (authorization)
            settings.headers["Authorization"] = authorization

        if (body)
            settings.body = JSON.stringify(body)

        return fetch(endpoint,settings).then(checkResponse)
    }
    getIngredients = ():Promise<GetIngredientsResponse> => this.createRequest(`${this.baseUrl}/api/ingredients`,METHODS.GET)
    createOrder = (ingredientsList: string[],token: string):Promise<CreateOrderResponse> => this.createRequest(`${this.baseUrl}/api/orders`,METHODS.POST,{ingredients: ingredientsList},token)
    registrateUser = (name:string,email:string,password:string):Promise<RegisterResponse> => this.createRequest(`${this.baseUrl}/api/auth/register`, METHODS.POST,{name, password, email})
    login = (email:string,password: string):Promise<LoginResponse> => this.createRequest(`${this.baseUrl}/api/auth/login`, METHODS.POST,{password, email})
    updateToken = (refreshToken:string):Promise<UpdateTokenResponse> => this.createRequest(`${this.baseUrl}/api/auth/token`, METHODS.POST,{token: refreshToken})
    logout = (refreshToken:string):Promise<LogoutResponse> => this.createRequest(`${this.baseUrl}/api/auth/logout`, METHODS.POST,{token: refreshToken})
    getUser = (token:string):Promise<GetUserResponse> => this.createRequest(`${this.baseUrl}/api/auth/user`, METHODS.GET,null,token)
    resetPassword = (email:string):Promise<ResetPasswordResponse> => this.createRequest(`${this.baseUrl}/api/password-reset`, METHODS.POST,{email})
    resetPasswordAccept = (password:string,code:string):Promise<ResetPasswordAcceptResponse> => this.createRequest(`${this.baseUrl}/api/password-reset/reset`, METHODS.POST,{password,token: code})
    updateUserInfo = (updateUserInfo: IUserInfo, token:string):Promise<UpdateUserInfoResponse> => this.createRequest(`${this.baseUrl}/api/auth/user`, METHODS.PATCH,updateUserInfo,token)
}

export default new Api();