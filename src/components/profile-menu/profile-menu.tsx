import React from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import styles from './profile-menu.module.css'
import useUserController from "../../hooks/use-user-controller";
import {resetUserAction} from "../../services/actions/user-actions";
import {useAppDispatch} from "../../hooks/use-app-dispatch";

const ProfileMenu = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const userController = useUserController()

    const logout = () => userController.logout().then(() => dispatch(resetUserAction())).then(() => navigate('/login'))

    return (
        <div style={{display: "flex",flexDirection: "column"}}>
            <Link replace={true} to={"/profile"} aria-activedescendant={"/profile "} className={location.pathname === '/profile' ? `text text_color_primary text_type_main-medium pt-4 pb-3 ${styles.link}` : `text text_color_inactive text_type_main-medium pt-4 pb-3 ${styles.link}`} >Профиль</Link>
            <Link replace={true} to={"/profile/orders"} className={location.pathname === '/profile/orders' ? `text text_color_primary text_type_main-medium pt-4 pb-3 active ${styles.link}` : `text text_color_inactive text_type_main-medium pt-4 pb-3 ${styles.link}`} >История заказов</Link>
            <div className={`text text_color_inactive text_type_main-medium pt-4 pb-3 ${styles.logoutBtn}`} onClick={logout}>Выход</div>
        </div>
    );
};

export default ProfileMenu;