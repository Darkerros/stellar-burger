import React from 'react';
import appStyles from './App.module.css';
import AppHeader from "../AppHeader/AppHeader";
import AppMain from "../AppMain/AppMain";
import {Provider} from "react-redux";
import store from "../../services/store/store";


function App() {
    return (
        <Provider store={store}>
            <div className={appStyles.App}>
                <AppHeader/>
                <AppMain/>
            </div>
        </Provider>
    );
}

export default App;
