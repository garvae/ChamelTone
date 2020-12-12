import React  from "react";

export default function Text(props){
    return(
        <div className={`title ${props.identifier}`}>
                <span>
                    {props.textData}
                </span>
        </div>
    )
}

