import React from "react";
import Profile from "../profile/Profile";
export default function Header(): React.JSX.Element {
    return (
        <div className='header'>
            <h1 className="header__title">Awesome Kanban Board</h1>
            <Profile />
        </div>
    );
}