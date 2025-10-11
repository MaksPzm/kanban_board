import React, {useEffect, useState} from "react";
import {Task} from "../main/Main";
import styles from "./listReadyTaskBlock.module.scss";
interface Props {
    listReadyTask: Task[] | [];
}
export default function ListReadyTaskBlock({listReadyTask}: Props): React.JSX.Element {
    const [showList, setShowList] = useState(false);
    useEffect(() => {
        if (listReadyTask.length === 0) return;
        setShowList(true);
    })
    return (
        <>
            {showList && listReadyTask.map((value, index) =>
            <li key={index} id={`${value.id}`} className={styles.taskBlock__section_list_item_ready}>{value.name}</li>)}

        </>
    );
}