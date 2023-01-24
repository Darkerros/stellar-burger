import useTokenStorage from "./useTokenStorage";
import Api from "../api/Api";

const useUserController = () => {
  const tokenStorage = useTokenStorage()
  const updateRefreshToken = () => Api.updateToken(tokenStorage.getRefreshToken())
      .then(data => {
          const {user,accessToken,refreshToken} = data
          tokenStorage.setRefreshToken(refreshToken)
          tokenStorage.setToken(accessToken)
          return user
      })
      .catch((err) => {
          tokenStorage.setToken(null)
          tokenStorage.setRefreshToken(null)
          return Promise.reject(err)
      })

  const getUser = () => Api.getUser(tokenStorage.getToken()).then(data => data.user)

  const checkAuth = () => getUser().catch(() => updateRefreshToken().then(() => getUser()))

  const login = (email,password) => Api.login(email,password).then(data => {
      const {user,accessToken,refreshToken} = data
      tokenStorage.setRefreshToken(refreshToken)
      tokenStorage.setToken(accessToken)
      return user
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