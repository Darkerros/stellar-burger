import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import NavigationItem from "../NavigationItem/NavigationItem";
import navigationStyles from './Navigation.module.css'

const Navigation = () => {
    return (
        <nav className={navigationStyles.Navigation}>
            <NavigationItem iconComponentName="BurgerIcon" active={true}>Конструктор</NavigationItem>
            <NavigationItem iconComponentName="ListIcon" active={false}>Лента заказов</NavigationItem>
            <div className={navigationStyles.Navigation__logo}><Logo /></div>
            <NavigationItem iconComponentName="ProfileIcon" active={false}>Личный кабинет</NavigationItem>
        </nav>
    );
};

export default Navigation;
