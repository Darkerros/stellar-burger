import appStyles from './App.module.css';
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import LoginPage from "../../pages/LoginPage/LoginPage";


function App() {
    return (
        <div className={appStyles.App}>
            <RegisterPage/>
        </div>
    );
}

export default App;
