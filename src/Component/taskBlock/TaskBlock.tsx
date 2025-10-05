import React, {useCallback, useState} from "react";
import styles from "./taskBlock.module.scss";
interface ITask {
    task: string;
    name: string;
    showBtnSubmit: boolean;
    children?: React.ReactNode;
    changeTask?: Function | undefined;
}

export default function TaskBlock({task, name, showBtnSubmit, children, changeTask}: ITask) {
    const [showSubmitBtn, setShowSubmitBtn] = useState<boolean>(false);
    const [change, setChange] = useState<string>("");
    const [results, setResults] = useState<{}>({});
    const [id, setId] = useState<number>(0);
    const [showList, setShowList] = useState<boolean>(showBtnSubmit);
    const [showDropList, setShowDropList] = useState(true);
    const clickBtn = useCallback(() => {
        setShowSubmitBtn(true);
    }, []);
    const pressKey = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChange(e.currentTarget.value)
    }
    const clickSubmit = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        setShowSubmitBtn(false);
        setId(id => id + 1);
        type result = {id: number, name: string, description: string, task: string};
        let res: result = {id: id, name: change, description: "This task has no description", task: "backlog"};
        if (changeTask !== undefined) changeTask(res);
        setResults(res);
    }, [change, id])
    return  (
        <div className={styles.taskBlock} id={task}>
            <div className={styles.taskBlock__section}>
                <h1 className={styles.taskBlock__section_title}>{name}</h1>
                <ul className={styles.taskBlock__section_list}>
                    {showList && children}
                    {showSubmitBtn ? (showList ? <input id="taskIn" type="text" className={styles.taskBlock__section_list_input} onChange={pressKey} placeholder="________________________"/>
                            : <div className={styles.section__list} onClick={() => setShowDropList(showDropList => !showDropList) }></div>)
                    : ""}
                    {showSubmitBtn
                        ? (showList ? <button type="submit" className={styles.taskBlock__section_list_btn} onClick={clickSubmit}>Submit</button>
                            : (showDropList ? <div className={styles.dropList}>{children}</div> : "")  )
                        : <button type="button" className={styles.taskBlock__section_list_btn} onClick={clickBtn}>
                            <span className={styles.taskBlock__section_list_btn_sp}>+</span> Add card
                        </button>}
                </ul>
            </div>
        </div>
    )
}