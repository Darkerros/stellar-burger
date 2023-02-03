import {useSelector} from "react-redux";


const useAuth = () => {
    const user = useSelector(state => state.userReducer)

    return {name: user.name,email: user.email, isAuth: !!user.email, isSuccess: user.isSuccess, isLoading: user.isLoading}
}

export default useAuth