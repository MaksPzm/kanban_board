import React, {JSX, useCallback, useContext, useRef, useState} from "react";
import styles from "../readyTaskBlock/readyTaskBlock.module.scss";
import ListReadyTaskBlock from "../listReadyTaskBlock/ListReadyTaskBlock";
import ListTask from "../listTask/ListTask";
import BtnTask from "../btnTask/BtnTask";
import {Task} from "../main/Main";
import {createMain} from "../main/Main";
import DropDownList from "../dropDownList/DropDownList";
interface ComponentProps {
    name: string;
    taskList: Task[] | [];
}
export default function Tasks(props: ComponentProps): JSX.Element {
    const {
        name = "",
        taskList,

    } = props;
    const { listTask } = useContext(createMain);
    console.log("value", listTask);
    const [btnSubmit, setBtnSubmit] = useState<boolean>(false);
    const pressBtn = (boolean: boolean) => {
        setBtnSubmit(boolean);
    };
    return (
        <div className={`taskBlock ${styles.taskBlock}`} id={name}>
            <div className={styles.taskBlock__section}>
                <h1 className={styles.taskBlock__section_title}>{name}</h1>
                <ListTask taskList={taskList}/>
            </div>
            <div className="taskBlock__dropDownList">
                <DropDownList name={name}/>
            </div>

            {btnSubmit
                ? <BtnTask type={"submit"} pressBtn={pressBtn} className={"task__btn_submit"} children={<span className="taskBlock__section_list_btn_text">Submit</span>}/>
                : <BtnTask type={"button"} pressBtn={pressBtn} children={<span className="taskBlock__section_list_btn_text"><span className="taskBlock__section_list_btn_text_sp">+</span>Add card</span>}/>
            }
        </div>
    );
}