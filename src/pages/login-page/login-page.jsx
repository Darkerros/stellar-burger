import universalStyles from '../../styles/UniversalStyles.module.css'
import LoginForm from "../../components/login-form/login-form";

const LoginPage = () => {
    return (
        <div className={universalStyles.flexContainer}>
            <LoginForm/>
        </div>
    );
};

export default LoginPage;