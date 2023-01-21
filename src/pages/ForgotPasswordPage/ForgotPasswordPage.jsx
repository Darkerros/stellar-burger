import AppHeader from "../../components/AppHeader/AppHeader";
import universalStyles from "../../styles/UniversalStyles.module.css";
import ForgotPasswordForm from "../../components/ForgotPasswordForm/ForgotPasswordForm";

const ForgotPasswordPage = () => {
    return (
        <>
            <AppHeader/>
            <div className={universalStyles.flexContainer}>
                <ForgotPasswordForm/>
            </div>
        </>
    );
};

export default ForgotPasswordPage;