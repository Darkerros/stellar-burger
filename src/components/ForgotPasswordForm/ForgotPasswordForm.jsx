import universalStyles from '../../styles/UniversalStyles.module.css'
import React, {useState} from "react";
import {Button, EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";

const ForgotPasswordForm = () => {
    const [email, setEmail] = useState('')

    const onEmailChange = event => setEmail(event.target.value)

    return (
        <form className={universalStyles.form}>
            <h2 className={"text text_type_main-medium"}>Восстановление пароля</h2>
            <EmailInput value={email} onChange={onEmailChange} title={"Email"} extraClass={"mt-4"}/>
            <Button htmlType={"submit"} extraClass={"mt-4 mb-20"}>Восстановить</Button>
            <div className={universalStyles.additionalLine}>
                <p className={"text text_type_main-default text_color_inactive"}>Вспомнили пароль?</p>
                <p className={`text text_type_main-default ${universalStyles.additional}`}>Войти</p>
            </div>
        </form>
    );
};

export default ForgotPasswordForm;