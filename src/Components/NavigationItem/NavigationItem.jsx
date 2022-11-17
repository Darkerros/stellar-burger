import React from 'react';
import PropTypes from 'prop-types';
import navigationItemStyles from './NavigationItem.module.css'
import {BurgerIcon, ListIcon, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const NavigationItem = ({children, iconComponentName, active}) => {

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
        <div className={navigationItemStyles.NavigationItem + " pt-4 pb-4 pl-5 pr-5"}>
            {iconComponentName && getICon()}
            <p className={(active ? "text text_type_main-default ml-2 " : "text text_type_main-default text_color_inactive ml-2 ")}>
                {children}
            </p>
        </div>
    );
};

NavigationItem.PropsTypes = {
    children: PropTypes.string,
    iconComponentName: PropTypes.oneOf(['BurgerIcon', 'ListIcon', 'ProfileIcon']),
    active: PropTypes.bool
}

export default NavigationItem;