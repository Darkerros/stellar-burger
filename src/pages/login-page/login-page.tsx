import universalStyles from '../../styles/universal-styles.module.css'
import LoginForm from "../../components/login-form/login-form";

const LoginPage = () => {
    return (
        <div className={universalStyles.flexContainer}>
            <LoginForm/>
        </div>
    );
};

export default LoginPage;