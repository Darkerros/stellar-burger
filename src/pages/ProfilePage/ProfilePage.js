import AppHeader from "../../components/AppHeader/AppHeader";
import styles from './ProfilePage.module.css'
import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";
import UpdateProfileForm from "../../components/UpdateProfileForm/UpdateProfileForm";

const ProfilePage = () => {
    return (
        <>
            <AppHeader/>
            <div className={styles.container}>
                <ProfileMenu/>
                <UpdateProfileForm/>
            </div>
        </>
    );
};

export default ProfilePage;