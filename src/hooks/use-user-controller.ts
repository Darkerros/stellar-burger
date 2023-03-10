import Api from "../api/api";
import {IUserInfo} from "../types/data/user-info-interface";
import {tokenStorage} from "../utils/utils";

const useUserController = () => {
  const updateRefreshToken = () => Api.updateToken(tokenStorage.getRefreshToken())
      .then(data => {
          const {accessToken,refreshToken} = data
          tokenStorage.setTokens(refreshToken, accessToken)
      })
      .catch((err) => {
          tokenStorage.setTokens(null, null)
          return Promise.reject(err)
      })

  const catchTokenExpires = (error: any) => {
      console.log(error)
      return error.message.includes("jwt expired") ? updateRefreshToken() : Promise.reject(error)
  }

  const getUser = ():Promise<IUserInfo> => Api.getUser(tokenStorage.getToken()).then(data => data.user).catch((err) => catchTokenExpires(err).then(() => getUser()))

  const checkAuth = () => getUser()

  const login = (email:string,password:string) => Api.login(email,password).then(data => {
      const {user,accessToken,refreshToken} = data
      tokenStorage.setTokens(refreshToken, accessToken)
      return user
  })
  const logout = () => Api.logout(tokenStorage.getRefreshToken()).then(() => tokenStorage.setTokens(null, null))
  const register = (name:string,email:string,password:string) => Api.registrateUser(name,email,password)
      .then(data => {
        const {user,accessToken,refreshToken} = data
        tokenStorage.setTokens(refreshToken, accessToken)
        return user
      })

  const resetPassword = (email:string) => Api.resetPassword(email)

  const resetPasswordAccept = (password:string,code:string) => Api.resetPasswordAccept(password,code)

  const updateProfileInfo = (email:string,password:string | null,name:string):Promise<IUserInfo> => {
      const userInfo:IUserInfo = {email,name}
      // eslint-disable-next-line no-unused-expressions
      if (password)
        userInfo.password = password
      return Api.updateUserInfo(userInfo,tokenStorage.getToken()).then(data => data.user)
          .catch((err) => catchTokenExpires(err).then(() => updateProfileInfo(email,password,name)))
  }

  return {checkAuth,login,logout,register,resetPassword,resetPasswordAccept,getUser,updateProfileInfo}
}

export default useUserController;