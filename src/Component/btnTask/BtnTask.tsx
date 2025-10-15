import React, {JSX, ReactNode, useEffect, useState} from "react";

interface ComponentProps {
    type: "button" | "submit";
    pressBtn: Function
    className?: string;
    children?: string | ReactNode;
}
export default function BtnTask(props: ComponentProps): JSX.Element {
    const {
        type = "button",
        pressBtn,
        className = "",
        children
    } = props;
    const [btnSubmit, setBtnSubmit] = useState<boolean>(false);
    useEffect(() => {
        pressBtn(btnSubmit)
    }, [btnSubmit]);
    return (
        <button type={type} onClick={() => {setBtnSubmit(!btnSubmit)}} className={`task__btn ${className}`}>{children}</button>
    );
}