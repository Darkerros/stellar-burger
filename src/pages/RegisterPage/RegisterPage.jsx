import styles from './RegisterPage.module.css'
import AppHeader from "../../components/AppHeader/AppHeader";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const RegisterPage = () => {
    return (
        <>
            <AppHeader/>
            <div className={styles.formContainer}>
                <RegisterForm/>
            </div>
        </>
    );
};

export default RegisterPage;