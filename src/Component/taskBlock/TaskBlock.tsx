import React from "react";
import styles from "./taskBlock.module.scss"

interface ContainerProps {
    task: string;
}
export default function TaskBlock({task}: ContainerProps): React.JSX.Element {
    return (
        <div className={styles.taskBlock}>
            <div className={styles.taskBlock__section}>
                <h1 className={styles.taskBlock__section_title}>{task}</h1>
                <ul className={styles.taskBlock__section_list}>
                    <li className={styles.taskBlock__section_list_item}>
                        <p className={styles.taskBlock__section_list_item_text}>fgdfgfdg</p>
                    </li>
                    <li className={styles.taskBlock__section_list_item}>
                        <p className={styles.taskBlock__section_list_item_text}>fgdfgfgghjgjgjghjgjhsd ggfsdfsdfsggggghfghfdg</p>
                    </li>
                    <button className={styles.taskBlock__section_list_btn}>
                        <span className={styles.taskBlock__section_list_btn_sp}>+</span> Add card
                    </button>
                </ul>
            </div>

        </div>
    );
}