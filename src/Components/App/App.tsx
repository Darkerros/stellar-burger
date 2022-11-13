import React, {useEffect, useState} from 'react';
import './App.css';
import AppHeader from "../AppHeader/AppHeader";
import AppMain from "../AppMain/AppMain";
import api from "../../api/Api";

function App() {
    return (
        <div className="App">
            <AppHeader/>
            <AppMain/>
        </div>
    );
}

export default App;

