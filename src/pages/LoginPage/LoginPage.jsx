import universalStyles from '../../styles/UniversalStyles.module.css'
import AppHeader from "../../components/AppHeader/AppHeader";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
    return (
        <>
             <AppHeader/>
             <div className={universalStyles.flexContainer}>
                <LoginForm/>
             </div>
        </>
    );
};

export default LoginPage;