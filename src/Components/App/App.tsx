import React from 'react';
import appStyles from'./App.module.css';
import AppHeader from "../AppHeader/AppHeader";
import AppMain from "../AppMain/AppMain";


function App() {
    return (
        <div className={appStyles.App}>
            <AppHeader/>
            <AppMain />
        </div>
    );
}

export default App;

