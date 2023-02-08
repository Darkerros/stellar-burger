import AppHeader from "../../components/AppHeader/AppHeader";
import styles from './ProfilePage.module.css'
import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";
import UpdateProfileForm from "../../components/UpdateProfileForm/UpdateProfileForm";
import {useLocation} from "react-router-dom";
import ProfileOrders from "../../components/ProfileOrders/ProfileOrders";

const ProfilePage = () => {
    const location = useLocation()


    return (
        <>
            <AppHeader/>
            <div className={styles.container}>
                <ProfileMenu/>
                {location.pathname === "/profile"
                    ?
                    <UpdateProfileForm/>
                    :
                    <ProfileOrders/>
                }
            </div>
        </>
    );
};

export default ProfilePage;