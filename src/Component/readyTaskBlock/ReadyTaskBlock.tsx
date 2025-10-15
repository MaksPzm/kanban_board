import React, {JSX, useCallback, useEffect, useRef, useState} from "react";
import styles from "./readyTaskBlock.module.scss";
import {Task} from "../main/Main";
import ListReadyTaskBlock from "../listReadyTaskBlock/ListReadyTaskBlock";

interface ComponentProps {
    taskList: Task[];
    name: string;
    listReady?: Task[]
    arrayListReadyTask?: Function;
    arrayListReady?: Function;
    arrayListProgress?: Function;
    arrayListFinished?: Function;
}
type elRefUL = React.RefObject<HTMLUListElement>
export default function ReadyTaskBlock({taskList, name, listReady, arrayListReadyTask, arrayListReady, arrayListProgress, arrayListFinished}: ComponentProps): JSX.Element {
    const [showList, setShowList] = useState(false);
    const [showDropList, setShowDropList] = useState(false);
    const [showBtn, setShowBtn] = useState(true);
    const [newTaskList, setNewTaskList] = useState<Task[] | []>([]);
    const ListElRef = useRef<unknown>(null) as elRefUL;
    const [listReadyTask, setListReadyTask] = useState<Task[] | []>([]);
    const [newArrayTask, setNewArrayTask] = useState<Task[] | []>([]);
    useEffect(() => {setNewTaskList([...taskList])}, [taskList]);
        const clickBtn = useCallback(() => {
            setShowBtn(false);
            setShowDropList(true);
    }, [])

    const taskListClick = useCallback((e: React.MouseEvent<HTMLLIElement>) => {
        const target = e.target as Element;
        let id = +target.id;
        const dataSelectedItem = newTaskList.find((newTaskList) => newTaskList.id === +target.id);
        if (dataSelectedItem !== undefined) setListReadyTask([...listReadyTask, dataSelectedItem]);
        setNewTaskList(newTaskList => newTaskList.filter(el => el.id !== id));
    }, [newTaskList, listReadyTask]);

    useEffect(() => {
        setNewArrayTask(newTaskList);
    }, [newTaskList]);
    useEffect(() => {
        if (arrayListReadyTask !== undefined) arrayListReadyTask(newArrayTask);
        if (arrayListReady !== undefined) arrayListReady(listReadyTask);
        if (arrayListProgress !== undefined) arrayListProgress(newArrayTask);
        if (arrayListFinished !== undefined) arrayListFinished(newArrayTask);
    }, [newArrayTask]);
    return (
        <div className={styles.taskBlock} id={name}>
            <div className={styles.taskBlock__section}>
                <h1 className={styles.taskBlock__section_title}>{name}</h1>

                <ul className={styles.taskBlock__section_list} ref={ListElRef}>
                    <ListReadyTaskBlock listReadyTask={listReadyTask}/>
                    {showDropList && <div className={styles.section__list} onClick={() => {setShowDropList(showDropList => !showDropList); setShowBtn(true)} }>
                        {showDropList &&
                            (<div className={styles.dropList}>
                                {newTaskList.map((value: Task, index: number) =>
                                    <li key={index} id={`${value.id}`} className={styles.taskBlock__section_list_item_ready} onClick={taskListClick}>
                                        {value.name}
                                    </li>)}
                            </div>)
                        }
                    </div>}

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

function arrayListProgress(newArrayTask: unknown) {
    throw new Error("Function not implemented.");
}
function arrayListFinished(newArrayTask: unknown) {
    throw new Error("Function not implemented.");
}

// Нужно переделать так чтобы принимал массив от предыдущего
