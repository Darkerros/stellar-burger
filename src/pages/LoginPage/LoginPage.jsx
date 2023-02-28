import universalStyles from '../../styles/UniversalStyles.module.css'
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
    return (
        <div className={universalStyles.flexContainer}>
            <LoginForm/>
        </div>
    );
};

export default LoginPage;