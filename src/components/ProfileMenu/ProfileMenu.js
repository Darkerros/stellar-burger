import React from 'react';
import {NavLink} from "react-router-dom";

const ProfileMenu = () => {
    return (
        <div style={{display: "flex",flexDirection: "column"}}>
            <NavLink  to={"/profile"} className={({isActive}) => isActive ? "text text_color_primary text_type_main-medium pt-4 pb-3" : "text text_color_inactive text_type_main-medium pt-4 pb-3"} >Профиль</NavLink>
            <NavLink replace={true} to={"/profile/orders"} className={({isActive}) => isActive ? "text text_color_primary text_type_main-medium pt-4 pb-3 active" : "text text_color_inactive text_type_main-medium pt-4 pb-3"} >История заказов</NavLink>
            <div className={"text text_color_inactive text_type_main-medium pt-4 pb-3"} >Выход</div>
        </div>
    );
};

export default ProfileMenu;