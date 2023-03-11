import universalStyles from '../../styles/universal-styles.module.css'
import React, {ChangeEvent, FormEvent, useState} from "react";
import {Button, EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import useUserController from "../../hooks/use-user-controller";

const ForgotPasswordForm = () => {
    const [email, setEmail] = useState('')
    const navigation = useNavigate()
    const userController = useUserController()
    const onEmailChange = (event:ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)
    const onSubmit = (evt:FormEvent) => {
        evt.preventDefault()
        if (email) {
            userController.resetPassword(email).then(() => navigation("/reset-password", {state: {from: "/forgot"}}))
        }
    }

    return (
        <form className={universalStyles.form} onSubmit={onSubmit}>
            <h2 className={"text text_type_main-medium"}>Восстановление пароля</h2>
            <EmailInput value={email} onChange={onEmailChange} title={"Email"} extraClass={"mt-4"}/>
            <Button htmlType={"submit"} extraClass={"mt-4 mb-20"}>Восстановить</Button>
            <div className={universalStyles.additionalLine}>
                <p className={"text text_type_main-default text_color_inactive"}>Вспомнили пароль?</p>
                <Link to={'/login'} className={`text text_type_main-default ${universalStyles.additional}`}>Войти</Link>
            </div>
        </form>
    );
};

export default ForgotPasswordForm;