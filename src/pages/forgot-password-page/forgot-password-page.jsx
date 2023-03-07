import universalStyles from "../../styles/UniversalStyles.module.css";
import ForgotPasswordForm from "../../components/forgot-paassword-form/forgot-password-form";

const ForgotPasswordPage = () => {
    return (
        <div className={universalStyles.flexContainer}>
            <ForgotPasswordForm/>
        </div>
    );
};

export default ForgotPasswordPage;