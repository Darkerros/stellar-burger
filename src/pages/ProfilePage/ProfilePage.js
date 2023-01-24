import AppHeader from "../../components/AppHeader/AppHeader";
import styles from './ProfilePage.module.css'
import {EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {NavLink} from "react-router-dom";
const ProfilePage = () => {
    return (
        <>
            <AppHeader/>
            <div className={styles.container}>
                <div style={{display: "flex",flexDirection: "column"}}>
                    <NavLink  to={"/profile"} className={({isActive}) => isActive ? "text text_color_primary text_type_main-medium pt-4 pb-3" : "text text_color_inactive text_type_main-medium pt-4 pb-3"} >Профиль</NavLink>
                    <NavLink replace={true} to={"/profile/orders"} className={({isActive}) => isActive ? "text text_color_primary text_type_main-medium pt-4 pb-3 active" : "text text_color_inactive text_type_main-medium pt-4 pb-3"} >История заказов</NavLink>
                    <div className={"text text_color_inactive text_type_main-medium pt-4 pb-3"} >Выход</div>
                </div>
                <div>
                    <Input value={""} onChange={""} name={"name"} type={"text"} placeholder={"Имя"} size={undefined} />
                    <EmailInput value={""} onChange={""} name={"email"} type={"email"} placeholder={"Почта"} extraClass={'mt-6'} size={undefined}/>
                    <PasswordInput value={""} onChange={""} name={"password"} type={"password"} placeholder={"Пароль"} extraClass={'mt-6'} size={undefined}/>
                </div>
            </div>
        </>
    );
};

export default ProfilePage;