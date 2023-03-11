import React from 'react';
import headerStyles from './app-header.module.css'
import Navigation from "../navigation/navigation";

const AppHeader = () => {
    return (
        <header className={headerStyles.AppHeader + " pt-4 pb-4"}>
            <Navigation/>
        </header>
    );
};

export default AppHeader;
