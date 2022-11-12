import React from 'react';
import headerStyles from './AppHeader.module.css'
import Navigation from "../Navigation/Navigation";
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';

const AppHeader = () => {
    return (
        <header className={headerStyles.AppHeader + " mt-4 mb-4"}>
            <Navigation/>
            <Logo/>
        </header>
    );
};

export default AppHeader;