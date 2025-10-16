import React, {JSX, useEffect, useState} from "react";
import DropDownList from "../dropDownList/DropDownList";

interface ComponentProps {
    className: string;
    isShown: boolean;
    click: Function;
}
export const ShowDropList = (props: ComponentProps): JSX.Element => {

    const {
        className,
        isShown,
        click
    } = props;
    const [show, setShow] = useState<boolean>(isShown);
    useEffect(() => {
        setShow(isShown);
    }, [isShown]);
    useEffect(() => {
        click(show)
    }, [show]);
    return (
        <>
            {show && <div className={className} onClick={() => {setShow(!show)}}></div>}
        </>

    );
};