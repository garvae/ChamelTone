import React from "react";


export default function IconPointer(props) {

    let classNameProp = '';

    if (props.className !== '' && props.className !== undefined) {
        classNameProp = props.className;
    }

    return (

        <div className={`${classNameProp}`}>
            <span />
        </div>

    );
}











