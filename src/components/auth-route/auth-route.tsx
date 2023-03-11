import useAuth from "../../hooks/use-auth";
import {Navigate} from "react-router-dom";
import Loading from "../loading/loading";
import {FC, ReactElement, ReactNode} from "react";

interface IProps {
    children: ReactNode
}


const AuthRoute:FC<IProps> = ({children}) => {
    const {isAuth,isSuccess, isError} = useAuth()

    if (isError)
        return <Navigate to={'/login'} />

    if (isSuccess)
        return isAuth ? children as ReactElement : <Navigate to={'/login'} />

    return <Loading/>
};

export default AuthRoute;