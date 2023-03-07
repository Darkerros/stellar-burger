import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import navigationItemStyles from './navigation-item.module.css'
import {BurgerIcon, ListIcon, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useLocation} from "react-router-dom";

const NavigationItem = ({children, iconComponentName, active,to}) => {
    const location = useLocation()
    const [isActive,setIsActive] = useState(false)

    useEffect(() => {
        const locList = location.pathname.split("/")
        const toList = to.split("/")

        const isActive = toList.every((to,index) => {
            let haveInPath = to === locList[index]
            if (!haveInPath) {
                haveInPath = toList === undefined
            }
            return haveInPath
        })
        setIsActive(isActive)

    },[location, to])
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
            <p className={(isActive ? "text text_type_main-default text_color_primary ml-2 " : "text text_type_main-default text_color_inactive ml-2 ")}>
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
