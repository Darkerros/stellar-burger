import styles from './profile-page.module.css'
import ProfileMenu from "../../components/profile-menu/profile-menu";
import {Outlet} from "react-router-dom";

const ProfilePage = () => {
    return (
        <div className={styles.container}>
            <ProfileMenu/>
            <Outlet/>
        </div>
    );
};

export default ProfilePage;