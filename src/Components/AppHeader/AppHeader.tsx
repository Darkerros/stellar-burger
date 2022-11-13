import React from 'react';
import headerStyles from './AppHeader.module.css'
import Navigation from "../Navigation/Navigation";

const AppHeader = () => {
    return (
        <header className={headerStyles.AppHeader + " pt-4 pb-4"}>
            <Navigation/>
        </header>
    );
};

export default AppHeader;