import universalStyles from '../../styles/UniversalStyles.module.css'
import RegisterForm from "../../components/register-form/register-form";

const RegisterPage = () => {
    return (
        <div className={universalStyles.flexContainer}>
            <RegisterForm/>
        </div>
    );
};

export default RegisterPage;