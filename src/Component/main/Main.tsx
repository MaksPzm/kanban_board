import React, {createContext, MouseEventHandler, useCallback, useState} from "react";
import TaskBlock from "../taskBlock/TaskBlock";
import ReadyTaskBlock from "../readyTaskBlock/ReadyTaskBlock";
import styles from "../taskBlock/taskBlock.module.scss";
import Tasks from "../task/Tasks";

export type Task = {id: number, name: string, description: string, task: string};
interface TypeDefaultValue {
    listTask: Task[];
    listReady: Task[];
    listProgress: Task[];
    listFinished: Task[];

}
const defaultValue: TypeDefaultValue = {
    listTask: [{id: 0, name: "", description: "", task: ""}],
    listReady: [{id: 0, name: "", description: "", task: ""}],
    listProgress: [{id: 0, name: "", description: "", task: ""}],
    listFinished: [{id: 0, name: "", description: "", task: ""}]
}

export const createMain = createContext<TypeDefaultValue>(defaultValue);

export default function Main(): React.JSX.Element {

    const [listTask, setListTask] = useState<[Task] | []>([]);
    const [newTask, setNewTask] = useState<[Task] | []>([]);
    const [listReady, setListReady] = useState<[Task] | []>([]);
    const [listProgress, setListProgress] = useState<[Task] | []>([]);
    const [listFinished, setListFinished] = useState<[Task] | []>([]);
    const value = {listTask, listReady, listProgress, listFinished};
    const changeTask = (change: Task) => {
        if (listTask == undefined) return;
        // @ts-ignore
        setListTask([...listTask, change]);
    }
    const arrayListReadyTask = (newList: any): any => {
        setNewTask(newList);
    };
    const arrayListReady = (newList: any): any => {
        setListReady(newList);
    };
    const arrayListProgress = (newList: any): any => {
        setListProgress(newList);
    };
    const arrayListFinished = (newList: any): any => {
        setListFinished(newList);
    };
    return (
        <createMain.Provider value={value}>
            <div className="main">
                <TaskBlock task={"Backlog"} name={"Backlog"} changeTask={changeTask} showBtnSubmit={true}
                    children={newTask.map((value: Task, index: number) =>
                       <li key={index} id={`${value.id}`} className={styles.taskBlock__section_list_item} onClick={(event: React.MouseEvent) => {
                           console.log(event)
                       }}>
                           {value.name}
                       </li>)
                    }
                />
                <Tasks name={"Ready"} taskList={listTask}/>
                <ReadyTaskBlock taskList={listTask} listReady={listReady} name={"Ready"} arrayListReadyTask={arrayListReadyTask} arrayListReady={arrayListReady}/>
                {/*<ReadyTaskBlock taskList={listTask} name={"In Progress"} arrayListProgress={arrayListProgress}/>*/}
                <ReadyTaskBlock taskList={listTask} name={"Finished"} arrayListFinished={arrayListFinished}/>
            </div>
        </createMain.Provider>
    )
}






// import TaskBlock from "../taskBlock/TaskBlock";
//
// type context = [{task: string, data: [{id: string, name: string, description: string}]}];
//
// const defaultValue: context = [
//     {
//         "task": "",
//         "data": [
//             {
//                 "id": "",
//                 "name": "",
//                 "description": ""
//             }
//         ]
//     }
// ];
//
// export const MainContext = createContext<context>(defaultValue);
// export default function Main(): React.JSX.Element {
//     const [data, setData] = useState<context>(defaultValue);
//     // const [taskBacklog, setTaskBacklog] = useState<context>(defaultValue);
//     // const [taskReady, setTaskReady] = useState<context>(defaultValue);
//     // const [progress, setProgress] = useState<context>(defaultValue);
//     // const [finished, setFinished] = useState<context>(defaultValue);
//     // const sectionBacklog = useCallback((dataBacklog: context) => {
//     // setTaskBacklog(dataBacklog);
//     // }, [setTaskBacklog]);
//     const dataTask = useCallback((form: any) => {
//     setData({...data}, form);
//     }, []);
//     return (
//         <MainContext.Provider value={data}>
//             <div className="main">
//                 <TaskBlock dataTask={dataTask} task={"Backlog"} id={"Backlog"}/>
//                 <TaskBlock dataTask={dataTask} task={"Ready"} id={"Ready"}/>
//                 <TaskBlock dataTask={dataTask} task={"In Progress"} id={"InProgress"}/>
//                 <TaskBlock dataTask={dataTask} task={"Finished"} id={"Finished"}/>
//             </div>
//         </MainContext.Provider>
//     );
// }

