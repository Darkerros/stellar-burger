import universalStyles from '../../styles/universal-styles.module.css'
import RegisterForm from "../../components/register-form/register-form";

const RegisterPage = () => {
    return (
        <div className={universalStyles.flexContainer}>
            <RegisterForm/>
        </div>
    );
};

export default RegisterPage;