

const useTokenStorage = () => {
    const getAccesToken = () => localStorage.getItem("acessToken")
    const getToken = () => localStorage.getItem("token")

    const resetAcessToken = () => localStorage.setItem("acessToken", null)
    const resetToken = () => localStorage.setItem("token", null)

    const setAcessToken = (acessToken) => localStorage.setItem("acessToken", acessToken)
    const setToken = (token) => localStorage.setItem("token", token)


    return {getAccesToken, getToken, resetAcessToken, resetToken, setToken,setAcessToken}
}

export default useTokenStorage;