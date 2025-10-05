import React, {JSX, useCallback, useEffect, useState} from "react";
import styles from "./readyTaskBlock.module.scss";
import {Task} from "../main/Main";

interface ComponentProps {
    taskList: Task[];
    name: string;
}
export default function ReadyTaskBlock({taskList, name}: ComponentProps): JSX.Element {
    const [showList, setShowList] = useState(false);
    const [showDropList, setShowDropList] = useState(false);
    const [showBtn, setShowBtn] = useState(true);
    const [newTaskList, setNewTaskList] = useState<Task[] | []>([]);
    useEffect(() => {setNewTaskList([...taskList])}, [taskList]);
        const clickBtn = useCallback(() => {
            setShowBtn(false);
            setShowDropList(true)
    }, [])
    return (
        <div className={styles.taskBlock} id={name}>
            <div className={styles.taskBlock__section}>
                <h1 className={styles.taskBlock__section_title}>{name}</h1>

                <ul className={styles.taskBlock__section_list}>
                    {showDropList && <div className={styles.section__list} onClick={() => {setShowDropList(showDropList => !showDropList); setShowBtn(true)} }></div>}
                    {showList && newTaskList.map((value: Task, index: number) =>
                    <li key={index} id={`${value.id}`} className={styles.taskBlock__section_list_item_ready} onClick={(event: React.MouseEvent) => {
                        console.log(event)
                    }}>
                        {value.name}
                    </li>)
                }
                    {showBtn &&
                        <button type="button" className={styles.taskBlock__section_list_btn} onClick={clickBtn}>
                            <span className={styles.taskBlock__section_list_btn_sp}>+</span> Add card
                        </button>}
                </ul>
            </div>
        </div>
    );
}