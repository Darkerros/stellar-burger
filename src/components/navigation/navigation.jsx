import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import NavigationItem from "../navigation-item/navigation-item";
import navigationStyles from './navigation.module.css'

const Navigation = () => {
    return (
        <nav className={navigationStyles.Navigation}>
            <NavigationItem iconComponentName="BurgerIcon" to={'/'}>Конструктор</NavigationItem>
            <NavigationItem iconComponentName="ListIcon" to={'/feed'} >Лента заказов</NavigationItem>
            <div className={navigationStyles.Navigation__logo} ><Logo /></div>
            <NavigationItem iconComponentName="ProfileIcon" to={'/profile'}>Личный кабинет</NavigationItem>
        </nav>
    );
};

export default Navigation;
