import styles from './ProfilePage.module.css'
import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";
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