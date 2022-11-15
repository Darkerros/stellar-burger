import React from 'react';
import './App.css';
import AppHeader from "../AppHeader/AppHeader";
import AppMain from "../AppMain/AppMain";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import OrderDetails from "../OrderDetails/OrderDetails";

function App() {
    return (
        <div className="App">
            <AppHeader/>
            <AppMain />
        </div>
    );
}

export default App;

