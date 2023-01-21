import universalStyles from '../../styles/UniversalStyles.module.css'
import AppHeader from "../../components/AppHeader/AppHeader";
import ResetPasswordForm from "../../components/ResetPasswordForm/ResetPasswordForm";
const ResetPasswordPage = () => {
    return (
        <>
            <AppHeader/>
            <div className={universalStyles.flexContainer}>
                <ResetPasswordForm/>
            </div>
        </>
    );
};

export default ResetPasswordPage;