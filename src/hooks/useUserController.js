import useTokenStorage from "./useTokenStorage";
import Api from "../api/Api";

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

  return {checkAuth,login}
}

export default useUserController;