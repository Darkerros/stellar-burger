import AppHeader from "../../components/AppHeader/AppHeader";
import styles from './ProfilePage.module.css'
import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";
import UpdateProfileForm from "../../components/UpdateProfileForm/UpdateProfileForm";
import {useLocation} from "react-router-dom";

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
                    <div></div>
                }
            </div>
        </>
    );
};

export default ProfilePage;