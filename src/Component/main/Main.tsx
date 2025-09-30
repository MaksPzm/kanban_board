import React from "react";
import TaskBlock from "../taskBlock/TaskBlock";

export default function Main(): React.JSX.Element {
    return (
        <div className="main">
            <TaskBlock task={"Backlog"}/>
            <TaskBlock task={"Ready"}/>
            <TaskBlock task={"In Progress"}/>
            <TaskBlock task={"Finished"}/>
        </div>
    );
}