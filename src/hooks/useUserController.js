import useTokenStorage from "./useTokenStorage";
import Api from "../api/Api";
import {setUserAction} from "../services/actions/userAction";

const useUserController = () => {
  const tokenStorage = useTokenStorage()
  const updateRefreshToken = () => Api.updateToken(tokenStorage.getRefreshToken())
  const checkAuth = () => Api.getUser(tokenStorage.getToken()).then(data => data.user).catch(() => updateRefreshToken().catch((err) => {
    tokenStorage.setToken(null)
    tokenStorage.setRefreshToken(null)
    return Promise.reject(err)
  }))

  const login = (email,password) => Api.login(email,password).then(data => {
    tokenStorage.setToken(data.accessToken)
    tokenStorage.setRefreshToken(data.refreshToken)
    return data.user
  })

  const logout = () => Api.logout(tokenStorage.getRefreshToken()).then(() => {
    tokenStorage.setToken(null)
    tokenStorage.setRefreshToken(null)
    return null
  })

  const register = (name,email,password) => Api.registrateUser(name,email,password)
      .then(data => {
        const {user,accessToken,refreshToken} = data
        tokenStorage.setRefreshToken(refreshToken)
        tokenStorage.setToken(accessToken)
        return user
      })

  return {checkAuth,login,logout,register}
}

export default useUserController;