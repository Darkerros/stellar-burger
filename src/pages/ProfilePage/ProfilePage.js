import AppHeader from "../../components/AppHeader/AppHeader";
import styles from './ProfilePage.module.css'
import {EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
const ProfilePage = () => {
    return (
        <>
            <AppHeader/>
            <div className={styles.container}>
                <div>
                    <div className={"text text_color_primary text_type_main-medium pt-4 pb-3"} >Профиль</div>
                    <div className={"text text_color_inactive text_type_main-medium pt-4 pb-3"} >История заказов</div>
                    <div className={"text text_color_inactive text_type_main-medium pt-4 pb-3"} >Выход</div>
                </div>
                <div>
                    <Input value={""} onChange={""} name={"name"} type={"text"} placeholder={"Имя"} size={"small"}/>
                    <EmailInput value={""} onChange={""} name={"email"} type={"email"} placeholder={"Почта"} extraClass={'mt-6'} size={"small"}/>
                    <PasswordInput value={""} onChange={""} name={"password"} type={"password"} placeholder={"Пароль"} extraClass={'mt-6'} size={"small"}/>
                </div>
            </div>
        </>
    );
};

export default ProfilePage;