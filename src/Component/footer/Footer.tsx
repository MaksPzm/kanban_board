import React from "react";
import styles from "./footer.module.scss"

export default function Footer(): React.JSX.Element {
    return (
        <div className="footer">
            <div className={styles.footer__wrap}>
                <div className={styles.footer__wrap_block}>
                    <span>Active tasks: M</span>
                    <span>Finished tasks: M</span>
                </div>
                <div className={styles.footer__wrap_block + " " + styles.footer__wrap_createName}>
                    <span>Kanban board by NAME, YEAR</span>
                </div>
            </div>

        </div>
    );
}