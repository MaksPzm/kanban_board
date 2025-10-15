import React, {JSX, useContext} from "react";
import {createMain, Task} from "../main/Main";
import styles from "./dropDownList.module.scss";

interface ComponentProps {
    name: string;
}
export default function DropDownList(props: ComponentProps): JSX.Element {
    const {name} = props;
    const { listTask, listReady, listProgress } = useContext(createMain);
    return (
        <div className="dropList">
            <ul className={styles.dropList__list}>
                {name === "Ready" && listTask.map((value: Task, index: number) =>
                    <li key={index} id={`${value.id}`} className={styles.taskBlock__section_list_item_ready}>
                        {value.name}
                    </li>)}
                {name === "In Progress" && listReady.map((value: Task, index: number) =>
                    <li key={index} id={`${value.id}`} className={styles.taskBlock__section_list_item_ready}>
                        {value.name}
                    </li>)}
                {name === "Finished" && listProgress.map((value: Task, index: number) =>
                    <li key={index} id={`${value.id}`} className={styles.taskBlock__section_list_item_ready}>
                        {value.name}
                    </li>)}
            </ul>

        </div>
    );
}