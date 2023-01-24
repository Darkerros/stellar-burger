import React, {useState} from 'react';
import universalStyles from '../../styles/UniversalStyles.module.css'
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setUserAction} from "../../services/actions/userAction";
import useUserController from "../../hooks/useUserController";

const RegisterForm = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const dispatch = useDispatch()
    const userController = useUserController()
    const navigate = useNavigate()
    const onEmailChange = event => setEmail(event.target.value)
    const onPasswordChange = event => setPassword(event.target.value)
    const onNameChange = event => setName(event.target.value)

    const onSubmit = (evt) => {
        evt.preventDefault()
        if (email && name && password) {
            userController.register(name,email,password)
                .then(user => {
                    dispatch(setUserAction(user))
                    navigate(-1)
                })

        }

    }


    return (
        <form className={universalStyles.form} onSubmit={onSubmit}>
            <h2 className={"text text_type_main-medium"}>Регистрация</h2>
            <Input value={name} onChange={onNameChange} extraClass={"mt-4"} placeholder={"Name"} name={"name"}/>
            <EmailInput value={email} onChange={onEmailChange} title={"Email"} extraClass={"mt-4"}/>
            <PasswordInput value={password} onChange={onPasswordChange} title={"Password"} extraClass={"mt-4"}/>
            <Button htmlType={"submit"} extraClass={"mt-4 mb-20"}>Зарегистрироваться</Button>
            <div className={universalStyles.additionalLine}>
                <p className={"text text_type_main-default text_color_inactive"}>Уже зарегистрированы?</p>
                <Link to={'/login'} className={`text text_type_main-default ${universalStyles.additional}`}>Войти</Link>
            </div>
        </form>
    );
};

export default RegisterForm;