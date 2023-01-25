import React from 'react';
import {Link, useLocation} from "react-router-dom";
import styles from './ProfileMenu.module.css'

const ProfileMenu = () => {
    const location = useLocation()

    return (
        <div style={{display: "flex",flexDirection: "column"}}>
            <Link replace={true} to={"/profile"} aria-activedescendant={"/profile "} className={location.pathname === '/profile' ? `text text_color_primary text_type_main-medium pt-4 pb-3 ${styles.link}` : `text text_color_inactive text_type_main-medium pt-4 pb-3 ${styles.link}`} >Профиль</Link>
            <Link replace={true} to={"/profile/orders"} className={location.pathname === '/profile/orders' ? `text text_color_primary text_type_main-medium pt-4 pb-3 active ${styles.link}` : `text text_color_inactive text_type_main-medium pt-4 pb-3 ${styles.link}`} >История заказов</Link>
            <div className={"text text_color_inactive text_type_main-medium pt-4 pb-3"} >Выход</div>
        </div>
    );
};

export default ProfileMenu;