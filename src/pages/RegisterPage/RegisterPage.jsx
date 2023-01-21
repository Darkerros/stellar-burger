import universalStyles from '../../styles/UniversalStyles.module.css'
import AppHeader from "../../components/AppHeader/AppHeader";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const RegisterPage = () => {
    return (
        <>
            <AppHeader/>
            <div className={universalStyles.flexContainer}>
                <RegisterForm/>
            </div>
        </>
    );
};

export default RegisterPage;