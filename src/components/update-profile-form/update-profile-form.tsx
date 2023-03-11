import {useEffect, useState} from 'react';
import styles from './update-profile-form.module.css'
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import useUserController from "../../hooks/use-user-controller";
import {FormEvent} from "react";
import {ChangeEvent} from "react";

const UpdateProfileForm = () => {
    const [defaultUserInfo,setDefaultUserInfo] = useState<{name: string, email: string} | null>(null)

    const [name,setName] = useState(defaultUserInfo?.name ? defaultUserInfo.name : "")
    const [email,setEmail] = useState(defaultUserInfo?.email ? defaultUserInfo.email : "")
    const [password,setPassword] = useState("")
    const isEdit = defaultUserInfo === null ? false : defaultUserInfo?.name !== name || defaultUserInfo?.email !== email || password !== ""

    const onNameChange = (evt:ChangeEvent<HTMLInputElement>) => setName(evt.target.value)
    const onEmailChange = (evt:ChangeEvent<HTMLInputElement>) => setEmail(evt.target.value)
    const onPasswordChange = (evt:ChangeEvent<HTMLInputElement>) => setPassword(evt.target.value)

    const userController = useUserController()

    const resetForm = () => {
        if (defaultUserInfo) {
            setName(defaultUserInfo.name)
            setEmail(defaultUserInfo.email)
            setPassword('')
        }
    }

    const onSubmit = (evt:FormEvent) => {
        evt.preventDefault()
        if (isEdit) {
            userController.updateProfileInfo(email,password,name)
                .then(user => {
                    setDefaultUserInfo(user)
                })
                .then(() => resetForm())
        }
    }

    useEffect(() => {
        userController.getUser().then(user => setDefaultUserInfo(user))
        // eslint-disable-next-line
    },[])

    useEffect(() => {
        if (defaultUserInfo) {
            setName(defaultUserInfo.name)
            setEmail(defaultUserInfo.email)
        }
    },[defaultUserInfo])

    return (
        <form onReset={resetForm} onSubmit={onSubmit} className={styles.form}>
            <Input value={name} onChange={onNameChange} name={"name"} type={"text"} placeholder={"Имя"} size={undefined} />
            <EmailInput value={email} onChange={onEmailChange} name={"email"} placeholder={"Почта"} extraClass={'mt-6'} size={undefined}/>
            <PasswordInput value={password} onChange={onPasswordChange} name={"password"} placeholder={"Пароль"} extraClass={'mt-6'} size={undefined}/>
            {isEdit
                &&
                <div className={styles.buttonContainer + " mt-5"}>
                <Button htmlType={"reset"}>Сбросить</Button>
                <Button htmlType={"submit"}>Подтвердить</Button>
                </div>
            }
        </form>
    );
};

export default UpdateProfileForm;