import React from 'react';
import NavigationItem from "../NavigationItem/NavigationItem";
import {BurgerIcon, ListIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import navigationStyles from './Navigation.module.css'

const Navigation = () => {
    return (
        <nav className={navigationStyles.Navigation}>
            <NavigationItem iconComponentName="BurgerIcon" active={true}>Конструктор</NavigationItem>
            <NavigationItem iconComponentName="ListIcon" active={false}>Лента заказов</NavigationItem>
        </nav>
    );
};

export default Navigation;