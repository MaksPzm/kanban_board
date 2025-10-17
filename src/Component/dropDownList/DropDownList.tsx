import React, {JSX, useCallback, useContext, useEffect, useState} from "react";
import {createMain, Task} from "../main/Main";
import styles from "./dropDownList.module.scss";
import Tasks from "../task/Tasks";

interface ComponentProps {
    name: string;
}
export default function DropDownList(props: ComponentProps): JSX.Element {
    const {name} = props;
    const { listTask,  listReady, listProgress, setListReady, setListTask } = useContext(createMain);
    const [newTaskList, setNewTaskList] = useState<Task[] | []>([]);
    const [newReadyList, setNewReadyList] = useState<Task[]>([]);
    const [newProgressList, setNewProgressList] = useState<Task[]>([]);
    const [newFinishedList, setNewFinishedList] = useState<Task[]>([]);
    // const taskListClick = useCallback((e: React.MouseEvent<HTMLLIElement>) => {
    //     const target = e.target as Element;
    //     let id = +target.id;
    //     const dataSelectedItem = newTaskList.find((newTaskList) => newTaskList.id === +target.id);
    //     if (dataSelectedItem !== undefined) setListReadyTask([...listReadyTask, dataSelectedItem]);
    //     setNewTaskList(newTaskList => newTaskList.filter(el => el.id !== id));
    // }, [newTaskList, listReadyTask]);
    // const clickReadyList = useCallback((e: React.MouseEvent<HTMLLIElement>) => {
    //     const target = e.target as Element;
    //     let id = +target.id;
    //     const
    // })
    const clickReadyList = useCallback((e: React.MouseEvent<HTMLLIElement>) => {
        const target = e.target as Element;
        let id = +target.id;
        const dataSelectedItem = listTask.find((e) => e.id === +target.id);
        if (dataSelectedItem !== undefined) setListReady([...listReady, dataSelectedItem]);
        setNewTaskList(listTask.filter(el => el.id !== +target.id));
        // if (newTaskList.length !== 0) {setListTask(newTaskList)}
    }, [listTask, listReady, setListReady])
    // useEffect(() => {
    //     console.log("listRRR", listReady)
    //     console.log("listNewTTTT", newTaskList)
    //     setListTask(newTaskList);
    // }, [newTaskList])

    return (
        <div className="dropList">
            <ul className={styles.dropList__list}>
                {name === "Ready" && listTask.map((value: Task, index: number) =>
                    <li key={index} id={`${value.id}`} className={styles.taskBlock__section_list_item_ready} onClick={clickReadyList}>
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