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

  const catchTokenExpires = error => error.then(error => error.message.includes("jwt expired") ? updateRefreshToken() : Promise.reject(error))//

  const getUser = () => Api.getUser(tokenStorage.getToken()).then(data => data.user).catch((err) => catchTokenExpires(err).then(() => getUser()))

  const checkAuth = () => getUser()

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

  const resetPassword = (email) => Api.resetPassword(email)
  const resetPasswordAccept = (password,code) => Api.resetPasswordAccept(password,code)

  const updateProfileInfo = (email,password,name) => {
      const userInfo = {email,name}
      // eslint-disable-next-line no-unused-expressions
      password !== "" ? userInfo.password = password : false
      return Api.updateUserInfo(userInfo,tokenStorage.getToken()).then(data => data.user).catch((err) => catchTokenExpires(err).then(() => Api.updateUserInfo(userInfo,tokenStorage.getToken())))
  }

  return {checkAuth,login,logout,register,resetPassword,resetPasswordAccept,getUser,updateProfileInfo}
}

export default useUserController;