import React, {JSX, useContext, useRef} from "react";
import {createMain, Task} from "../main/Main";
type elRefUL = React.RefObject<HTMLUListElement>;
interface ComponentProps {
    taskList: Task[] | [];
}
export default function ListTask(props: ComponentProps): JSX.Element {
    const {taskList} = props;
    const ListElRef = useRef<unknown>(null) as elRefUL;
    const { listTask } = useContext(createMain);
    console.log("listTask!!!!!", listTask);
    return (
        <ul className="task__section_list" ref={ListElRef}>

        </ul>
    );
}