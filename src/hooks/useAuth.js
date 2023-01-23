import {useSelector} from "react-redux";


const useAuth = () => {
    const user = useSelector(state => state.userReducer)

    return {name: user.name,email: user.email, isAuth: !!user.email}
}

export default useAuth