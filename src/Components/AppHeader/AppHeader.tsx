import React from 'react';
import headerStyles from './AppHeader.module.css'
import Navigation from "../Navigation/Navigation";

const AppHeader = () => {
    return (
        <header className={headerStyles.AppHeader + " mt-4 mb-4"}>
            <Navigation/>
        </header>
    );
};

export default AppHeader;