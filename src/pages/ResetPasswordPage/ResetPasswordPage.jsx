import universalStyles from '../../styles/UniversalStyles.module.css'
import ResetPasswordForm from "../../components/ResetPasswordForm/ResetPasswordForm";
import {Navigate, useLocation} from "react-router-dom";

const ResetPasswordPage = () => {
    const location = useLocation()

    return (
        location.state?.from === "/forgot"
            ?
            <div className={universalStyles.flexContainer}>
                <ResetPasswordForm/>
            </div>
            :
            <Navigate to={"/"}/>
    );
};

export default ResetPasswordPage;