import React from 'react';
import PropTypes from 'prop-types';
import navigationItemStyles from './NavigationItem.module.css'
import {BurgerIcon, ListIcon, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";

const NavigationItem = ({children, iconComponentName, active,to}) => {

    const getICon = () => {
        if (iconComponentName === 'BurgerIcon') {
            return <BurgerIcon type={active ? "primary" : "secondary"}/>
        }
        if (iconComponentName === 'ListIcon') {
            return <ListIcon type={active ? "primary" : "secondary"}/>
        }
        if (iconComponentName === 'ProfileIcon') {
            return <ProfileIcon type={active ? "primary" : "secondary"}/>
        }
    }

    return (
        <Link to={to} className={navigationItemStyles.NavigationItem + " pt-4 pb-4 pl-5 pr-5"}>
            {iconComponentName && getICon()}
            <p className={(active ? "text text_type_main-default ml-2 " : "text text_type_main-default text_color_inactive ml-2 ")}>
                {children}
            </p>
        </Link>
    );
};

NavigationItem.PropsTypes = {
    children: PropTypes.string.string,
    iconComponentName: PropTypes.oneOf(['BurgerIcon', 'ListIcon', 'ProfileIcon']).isRequired,
    active: PropTypes.bool.isRequired,
    to: PropTypes.string.isRequired
}

export default NavigationItem;
