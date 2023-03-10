import universalStyles from '../../styles/universal-styles.module.css'
import ResetPasswordForm from "../../components/reset-password-form/reset-password-form";
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