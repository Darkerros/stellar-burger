import React from 'react';
import './App.css';
import AppHeader from "../AppHeader/AppHeader";
import AppMain from "../AppMain/AppMain";
import Modal from "../Modal/Modal";

function App() {
    return (
        <div className="App">
            <AppHeader/>
            <Modal></Modal>
            {/*<AppMain />*/}
        </div>
    );
}

export default App;

