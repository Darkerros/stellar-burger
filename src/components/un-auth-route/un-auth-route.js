import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";
import {Navigate} from "react-router-dom";

const UnAuthRoute = ({children}) => {
    const {isAuth} = useAuth()

    return (
        !isAuth
            ?
            children
            :
            <Navigate to={'/'} />
    );
};

UnAuthRoute.propTypes = {
    children: PropTypes.element.isRequired
}

export default UnAuthRoute;