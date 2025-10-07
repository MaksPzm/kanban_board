import React, {JSX, useCallback, useEffect, useRef, useState} from "react";
import styles from "./readyTaskBlock.module.scss";
import {Task} from "../main/Main";

interface ComponentProps {
    taskList: Task[];
    name: string;
}
type elRefUL = React.RefObject<HTMLUListElement>
export default function ReadyTaskBlock({taskList, name}: ComponentProps): JSX.Element {
    const [showList, setShowList] = useState(false);
    const [showDropList, setShowDropList] = useState(false);
    const [showBtn, setShowBtn] = useState(true);
    const [newTaskList, setNewTaskList] = useState<Task[] | []>([]);
    const ListElRef = useRef<unknown>(null) as elRefUL;
    const [listReadyTask, setListReadyTask] = useState<Task[] | []>([]);
    useEffect(() => {setNewTaskList([...taskList])}, [taskList]);
        const clickBtn = useCallback(() => {
            setShowBtn(false);
            setShowDropList(true);
    }, [])

    const taskListClick = useCallback((e: React.MouseEvent<HTMLLIElement>) => {
        const target = e.target as Element;
        console.log("target", target.id);
        const dataSelectedItem = newTaskList.find((newTaskList) => newTaskList.id === +target.id);
        console.log("dataSelectedItem", dataSelectedItem);
        if (dataSelectedItem !== undefined) setListReadyTask([...listReadyTask, dataSelectedItem]);
    }, [newTaskList, listReadyTask]);
    console.log("listReadyTask", listReadyTask);
    return (
        <div className={styles.taskBlock} id={name}>
            <div className={styles.taskBlock__section}>
                <h1 className={styles.taskBlock__section_title}>{name}</h1>

                <ul className={styles.taskBlock__section_list} ref={ListElRef}>
                    {/*{listReadyTask.map((task: Task, index: number) => {*/}
                    {/*    <li key={index} id={`${task.id}`} className={styles.taskBlock__section_list_item_ready}>*/}
                    {/*        {task.name}*/}
                    {/*    </li>*/}
                    {/*})}*/}
                    {showDropList && <div className={styles.section__list} onClick={() => {setShowDropList(showDropList => !showDropList); setShowBtn(true)} }></div>}
                    {showDropList &&
                        (<div className={styles.dropList}>
                            {newTaskList.map((value: Task, index: number) =>
                                <li key={index} id={`${value.id}`} className={styles.taskBlock__section_list_item_ready} onClick={taskListClick}>
                                    {value.name}
                                </li>)}
                        </div>)
                    }
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