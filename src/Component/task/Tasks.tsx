import React, {JSX, useCallback, useContext, useEffect, useRef, useState} from "react";
import styles from "./tasks.module.scss"
// import styles from "../readyTaskBlock/readyTaskBlock.module.scss";
import ListReadyTaskBlock from "../listReadyTaskBlock/ListReadyTaskBlock";
import ListTask from "../listTask/ListTask";
import BtnTask from "../btnTask/BtnTask";
import {Task} from "../main/Main";
import {createMain} from "../main/Main";
import DropDownList from "../dropDownList/DropDownList";
import {ShowDropList} from "../showDropList/ShowDropList";
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
    const [btnSubmit, setBtnSubmit] = useState<boolean>(false);
    const pressBtn = (boolean: boolean) => {
        setBtnSubmit(boolean);
    };
    const [btn, setBtn] = useState<JSX.Element | null>(<BtnTask type={"button"} pressBtn={pressBtn} children={<span className="taskBlock__section_list_btn_text"><span className="taskBlock__section_list_btn_text_sp">+</span>Add card</span>}/>);
    useEffect(() => {
        if (!btnSubmit) {
            setBtn(<BtnTask type={"button"} pressBtn={pressBtn} children={<span className="taskBlock__section_list_btn_text"><span className="taskBlock__section_list_btn_text_sp">+</span>Add card</span>}/>);
        } else {
            if (name === "Backlog") {
                setBtn(<BtnTask type={"submit"} pressBtn={pressBtn} className={"task__btn_submit"} children={<span className="taskBlock__section_list_btn_text">Submit</span>}/>);
            } else {
                setBtn(null);
            }
        }
    }, [btnSubmit, name])
    const clickShowDropList = useCallback((e: boolean) => {
        setBtnSubmit(e);
    }, [])
    return (
        <div className={`taskBlock ${styles.taskBlock}`} id={name}>
            <div className={styles.taskBlock__section}>
                <h1 className={styles.taskBlock__section_title}>{name}</h1>
                <ListTask taskList={taskList}/>
                <div className="taskBlock__section_blockTask">
                    <ShowDropList isShown={btnSubmit} click={clickShowDropList} className={styles.section__list}/>
                    {btn === null &&
                        <div className="taskBlock__section_blockTask_dropDownList">
                            <DropDownList name={name}/>
                        </div>
                    }
                </div>

            </div>

            {/*<input id="taskIn" type="text" className={styles.taskBlock__section_list_input} onChange={pressKey} placeholder="________________________"/>*/}


            {/*{btnSubmit*/}
            {/*    ? <BtnTask type={"submit"} pressBtn={pressBtn} className={"task__btn_submit"} children={<span className="taskBlock__section_list_btn_text">Submit</span>}/>*/}
            {/*    : <BtnTask type={"button"} pressBtn={pressBtn} children={<span className="taskBlock__section_list_btn_text"><span className="taskBlock__section_list_btn_text_sp">+</span>Add card</span>}/>*/}
            {/*}*/}
            {btn}
        </div>
    );
}