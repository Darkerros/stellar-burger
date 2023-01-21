import React, {useState} from 'react';
import styles from "./RegisterForm.module.css";
import universalStyles from '../../styles/UniversalStyles.module.css'
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";

const RegisterForm = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const onEmailChange = event => setEmail(event.target.value)
    const onPasswordChange = event => setPassword(event.target.value)
    const onNameChange = event => setName(event.target.value)


    return (
        <form className={universalStyles.form}>
            <h2 className={"text text_type_main-medium"}>Регистрация</h2>
            <Input value={name} onChange={onNameChange} extraClass={"mt-4"} placeholder={"Name"} name={"name"}/>
            <EmailInput value={email} onChange={onEmailChange} title={"Email"} extraClass={"mt-4"}/>
            <PasswordInput value={password} onChange={onPasswordChange} title={"Password"} extraClass={"mt-4"}/>
            <Button htmlType={"submit"} extraClass={"mt-4 mb-20"}>Зарегистрироваться</Button>
            <div className={styles.flexContainer}>
                <p className={"text text_type_main-default"}>Уже зарегистрированы?</p>
                <p className={`text text_type_main-default ${universalStyles.additional}`}>Войти</p>
            </div>
        </form>
    );
};

export default RegisterForm;