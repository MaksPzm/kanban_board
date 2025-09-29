import React from "react";
import styles from "./profileNavigation.module.scss";

export default function ProfileNavigation(): React.JSX.Element {
    return (
        <menu className={styles.menu}>
            <ul className={styles.menu_list}>
                <li className={styles.menu_list_item}>
                    <a className={styles.menu_list_item_link} href="#">Profile</a>
                </li>
                <li className={styles.menu_list_item}>
                    <a className={styles.menu_list_item_link} href="#">Log Out</a>
                </li>
            </ul>
        </menu>
    );
}