import useAuth from "../../hooks/use-auth";
import {Navigate} from "react-router-dom";
import {FC, ReactElement, ReactNode} from "react";
import Loading from "../loading/loading";

interface IProps {
    children: ReactNode
}

const UnAuthRoute:FC<IProps> = ({children}) => {
    const {isAuth,isSuccess, isError} = useAuth()

    if (isError)
        return children as ReactElement

    if (isSuccess)
        return !isAuth ? children as ReactElement : <Navigate to={'/'} />

    return <Loading/>
};

export default UnAuthRoute;