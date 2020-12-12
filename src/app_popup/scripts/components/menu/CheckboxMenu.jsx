import React      from "react";
import {Checkbox} from "../buttons/Checkbox";

export function CheckboxMenu(props) {

    let classNameProp = ''

    if (props.className !== '' && props.className !== undefined) {
        classNameProp = props.className
    }

    return (
        <div className={`bottomCheckboxes ${classNameProp}`}>

            <Checkbox identifier="left" />
            <Checkbox identifier="middle" />
            <Checkbox identifier="right" />

        </div>
    );
}

