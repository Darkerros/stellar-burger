import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";
import {Navigate} from "react-router-dom";
import Loading from "../Loading/Loading";

const AuthRoute = ({children}) => {
    const {isAuth,isSuccess} = useAuth()

    return (
        !isSuccess
            ?
            <Loading/>
            :
            isAuth
                ?
                children
                :
                <Navigate to={'/login'} />
    );
};

AuthRoute.propTypes = {
    children: PropTypes.element.isRequired
}

export default AuthRoute;