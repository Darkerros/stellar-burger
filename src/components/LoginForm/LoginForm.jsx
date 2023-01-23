import universalStyles from '../../styles/UniversalStyles.module.css'
import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useState} from "react";
import {Link} from "react-router-dom";
const LoginForm = () => {
    const [password,setPassword] = useState('')
    const [email,setEmail] = useState('')

    const onEmailChange = event => setEmail(event.target.value)
    const onPasswordChange = event => setPassword(event.target.value)


    return (
        <form className={universalStyles.form}>
            <h2 className={"text text_type_main-medium"}>Вход</h2>
            <EmailInput value={email} onChange={onEmailChange} title={"Email"} extraClass={"mt-4"}/>
            <PasswordInput value={password} onChange={onPasswordChange} title={"Password"} extraClass={"mt-4"}/>
            <Button htmlType={"submit"} extraClass={"mt-4 mb-20"}>Войти</Button>
            <div className={universalStyles.additionalLine}>
                <p className={"text text_type_main-default"}>Вы - новый пользователь?</p>
                <Link to={"/register"} className={`text text_type_main-default ${universalStyles.additional}`}>Зарегистрироваться</Link>
            </div>
            <div className={universalStyles.additionalLine}>
                <p className={`text text_type_main-default text_color_inactive`}>Забыли пароль?</p>
                <Link to={"/forgot"} className={`text text_type_main-default ${universalStyles.additional}`}>Востановить пароль</Link>
            </div>
        </form>
    );
};

export default LoginForm;