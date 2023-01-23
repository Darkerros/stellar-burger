import React, {useState} from 'react';
import universalStyles from "../../styles/UniversalStyles.module.css";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";

const ResetPasswordForm = () => {
    const [password,setPassword] = useState('')
    const [code,setCode] = useState('')

    const onCodeChange = event => setCode(event.target.value)
    const onPasswordChange = event => setPassword(event.target.value)


    return (
        <form className={universalStyles.form}>
            <h2 className={"text text_type_main-medium"}>Востановление пароля</h2>
            <PasswordInput value={password} onChange={onPasswordChange} placeholder={"Введите новый пароль"} extraClass={"mt-4"}/>
            <Input value={code} onChange={onCodeChange} placeholder={"Введите код из письма"} extraClass={"mt-4"}/>
            <Button htmlType={"submit"} extraClass={"mt-4 mb-20"}>Сохранить</Button>
            <div className={universalStyles.additionalLine}>
                <p className={"text text_type_main-default text_color_inactive"}>Вспомнили пароль?</p>
                <Link to={'/login'} className={`text text_type_main-default ${universalStyles.additional}`}>Войти</Link>
            </div>
        </form>
    );
};

export default ResetPasswordForm;