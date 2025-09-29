import React, {useState} from "react";
import styles from "./profile.module.scss";
import avatar from "./user-avatar.svg"
import ProfileNavigation from "../profileNavigation/ProfileNavigation";
export default function Profile(): React.JSX.Element {
    const [pressProfile, setPressProfile] = useState<boolean>(false);
    return (
        <div className={`${styles.profile} profile`} onClick={() => {setPressProfile(!pressProfile)}}>
            <img className={styles.profile__img} src={avatar} alt="avatar" />
            {!pressProfile ?
                <div className={styles.vector__bottom}></div>
                : <div className={styles.vector__top}></div>
            }
            {pressProfile &&
                <div className={styles.profile__menu}>
                    <ProfileNavigation/>
                </div>}
        </div>
    );
}