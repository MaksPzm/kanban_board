import React, {JSX, useCallback, useContext, useEffect, useState} from "react";
import {createMain, Task} from "../main/Main";
import styles from "./dropDownList.module.scss";
import Tasks from "../task/Tasks";

interface ComponentProps {
    name: string;
    taskList: Task[] | [];
    newList: Function;
    setList: Function
}
export default function DropDownList(props: ComponentProps): JSX.Element {
    const {name, taskList, newList, setList} = props;
    // const { listTask,  listReady, listProgress, setListReady, setListTask, setNewTask, newTask } = useContext(createMain);
    const [newTaskList, setNewTaskList] = useState<Task[] | []>(taskList);
    const [newReadyList, setNewReadyList] = useState<Task[]>([]);
    const [newProgressList, setNewProgressList] = useState<Task[]>([]);
    const [newFinishedList, setNewFinishedList] = useState<Task[]>([]);
    const [dataReady, setDataReady] = useState<Task[] | []>([]);
    const clickReadyList = useCallback((e: React.MouseEvent<HTMLLIElement>) => {
        const target = e.target as Element;
        let id = +target.id;
        const dataSelectedItem = taskList.find((e) => e.id === +target.id);
        // if (dataSelectedItem !== undefined)
        // if (dataSelectedItem !== undefined) setDataReady([dataSelectedItem]);
        // setListReady([...listReady, dataSelectedItem]);
        if (dataSelectedItem !== undefined) setDataReady([...dataReady, dataSelectedItem])
        let newArray = taskList.filter((e) => e.id !== +id);
        // setNewTaskList(taskList.filter(el => el.id !== +id));
        setNewTaskList(newArray);
        // if (newTaskList.length !== 0) setNewTask(newArray);
        console.log('newArray' ,newArray);


        // if (newTaskList.length !== 0) {setListTask(newTaskList)}
    }, [taskList, dataReady]);
    useEffect(() => {
        console.log("datadatatatat", dataReady)
        console.log('newttttttttask', newTaskList)
       // setListTask(newTaskList)
        if (dataReady.length !== 0) newList(dataReady);
        localStorage.setItem('task', JSON.stringify(newTaskList));
        if (newTaskList !== undefined) setList(newTaskList)
        // setListReady(dataReady);
    }, [dataReady]);
    return (
        <div className="dropList">
            <ul className={styles.dropList__list}>
                {name === "Ready" && newTaskList.map((value: Task, index: number) =>
                    <li key={index} id={`${value.id}`} className={styles.taskBlock__section_list_item_ready} onClick={clickReadyList}>
                        {value.name}
                    </li>)}
                {/*{name === "In Progress" && listReady.map((value: Task, index: number) =>*/}
                {/*    <li key={index} id={`${value.id}`} className={styles.taskBlock__section_list_item_ready}>*/}
                {/*        {value.name}*/}
                {/*    </li>)}*/}
                {/*{name === "Finished" && listProgress.map((value: Task, index: number) =>*/}
                {/*    <li key={index} id={`${value.id}`} className={styles.taskBlock__section_list_item_ready}>*/}
                {/*        {value.name}*/}
                {/*    </li>)}*/}
            </ul>

        </div>
    );
}