

const useTokenStorage = () => {
    const getRefreshToken = () => localStorage.getItem("acessToken")
    const getToken = () => localStorage.getItem("token")

    const resetRefreshToken = () => localStorage.setItem("acessToken", null)
    const resetToken = () => localStorage.setItem("token", null)

    const setRefreshToken = (acessToken) => localStorage.setItem("acessToken", acessToken)
    const setToken = (token) => localStorage.setItem("token", token)


    return {getRefreshToken, getToken, resetRefreshToken, resetToken, setToken,setRefreshToken}
}

export default useTokenStorage;