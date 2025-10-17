import React, {JSX, useContext, useRef} from "react";
import {createMain, Task} from "../main/Main";
import styles from "../listReadyTaskBlock/listReadyTaskBlock.module.scss";
type elRefUL = React.RefObject<HTMLUListElement>;
interface ComponentProps {
    taskList: Task[] | [];
}
export default function ListTask(props: ComponentProps): JSX.Element {
    const {taskList} = props;
    const ListElRef = useRef<unknown>(null) as elRefUL;
    const { listReady } = useContext(createMain);
    return (
        <ul className="task__section_list" ref={ListElRef}>
            {listReady.map((task: Task, index: number) => <li  key={index} id={`${task.id}`} className={styles.taskBlock__section_list_item_ready}>{task.name}</li>)}
        </ul>
    );
}