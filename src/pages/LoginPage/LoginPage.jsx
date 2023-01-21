import styles from './LoginPage.module.css'
import AppHeader from "../../components/AppHeader/AppHeader";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
    return (
        <>
             <AppHeader/>
             <div className={styles.formContainer}>
                <LoginForm/>
             </div>
        </>
    );
};

export default LoginPage;