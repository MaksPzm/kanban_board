import React, {MouseEventHandler, useState} from "react";
import TaskBlock from "../taskBlock/TaskBlock";
import ReadyTaskBlock from "../readyTaskBlock/ReadyTaskBlock";
import styles from "../taskBlock/taskBlock.module.scss";

export type Task = {id: number, name: string, description: string, task: string};

export default function Main(): React.JSX.Element {
    const [task, setTask] = useState<[Task] | []>([]);
    const changeTask = (change: Task) => {
        if (task == undefined) return;
        // @ts-ignore
        setTask([...task, change]);
    }
    return (
        <div className="main">
            <TaskBlock task={"Backlog"} name={"Backlog"} changeTask={changeTask} showBtnSubmit={true}
                children={task.map((value: Task, index: number) =>
                   <li key={index} id={`${value.id}`} className={styles.taskBlock__section_list_item} onClick={(event: React.MouseEvent) => {
                       console.log(event)
                   }}>
                       {value.name}
                   </li>)
                }
            />
            {/*<TaskBlock task={"Ready"} name={"Ready"} showBtnSubmit={false}*/}
            {/*           children={task.map((value: Task, index: number) =>*/}
            {/*               <li key={index} id={`${value.id}`} className={styles.taskBlock__section_list_item_ready} onClick={(event: React.MouseEvent) => {*/}
            {/*                   console.log(event)*/}
            {/*               }}>*/}
            {/*                   {value.name}*/}
            {/*               </li>)*/}
            {/*           }*/}
            {/*/>*/}
            <ReadyTaskBlock taskList={task} name={"Ready"}/>
        </div>
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

