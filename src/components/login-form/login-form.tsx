import universalStyles from '../../styles/universal-styles.module.css'
import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {ChangeEvent, FormEvent, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import useUserController from "../../hooks/use-user-controller";
import {useDispatch} from "react-redux";
import {setUserAction} from "../../services/actions/user-actions";
const LoginForm = () => {
    const [password,setPassword] = useState('')
    const [email,setEmail] = useState('')
    const userController = useUserController()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onEmailChange = (event:ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)
    const onPasswordChange = (event:ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)

    const onSubmit = (evt:FormEvent) => {
        evt.preventDefault()
        if (email && password) {
            userController.login(email,password)
                .then(user => {
                    dispatch(setUserAction(user))
                    navigate(-1)
                })
        }
    }


    return (
        <form className={universalStyles.form} onSubmit={onSubmit}>
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
                <Link to={"/forgot-password"} className={`text text_type_main-default ${universalStyles.additional}`}>Востановить пароль</Link>
            </div>
        </form>
    );
};

export default LoginForm;