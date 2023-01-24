import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";
import {Navigate} from "react-router-dom";

const AuthRoute = ({children}) => {
    const {isAuth} = useAuth()

    return (
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