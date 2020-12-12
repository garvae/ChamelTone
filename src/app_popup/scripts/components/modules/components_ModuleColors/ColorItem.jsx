import React, { useEffect, useState } from "react";
import { setCurrentActiveColor }      from "../../../../../store/actions/extensionStorageActions";
import { useDispatch, useSelector }   from "react-redux";


export function ColorItem({props, names}) {

    const dispatch = useDispatch();
    const state    = useSelector(state => state.state);

    /* ======== Below is a bit of unreadable code .... I'll refactor this a little later =) ======== */

    let currentScheme            = state.currentDomain ? state.domains[state.currentDomain].currentScheme : false;
    let isSchemesInCurrentDomain = !!state.domains[state.currentDomain].schemes;
    let isCurrentSchemeInSchemes = isSchemesInCurrentDomain && !!state.domains[state.currentDomain].schemes[currentScheme];
    let isColorsInCurrentScheme  = isCurrentSchemeInSchemes && !!state.domains[state.currentDomain].schemes[currentScheme].colors;
    let currentActiveColor       = isColorsInCurrentScheme && state.domains[state.currentDomain].schemes[currentScheme].colors.activeColor;
    let isInitColor              = isColorsInCurrentScheme && state.domains[state.currentDomain].schemes[currentScheme].colors[props.identifier].value;
    let initColor                = isInitColor ? isInitColor : props.value;

    let colorsReset = isColorsInCurrentScheme && state.domains[state.currentDomain].schemes[currentScheme].colors.colorsReset;

    let isCurrentActive = currentActiveColor === props.identifier;

    /* ======================================================================================== */

    const [color, setColor] = useState(initColor);

    function setActive() {
        if (!isCurrentActive) {
            dispatch(setCurrentActiveColor(state.currentDomain, currentScheme, props.identifier));
        }
    }

    useEffect(() => {
        if (colorsReset) {
            let newValue = props.value;
            setColor(newValue);
        }
    }, [colorsReset]);

    useEffect(() => {
        setColor(initColor);
    }, [isInitColor]);

    return (
        <div
            className={`colorsModule_colorsContainer_item ${props.identifier}`}
            onClick={setActive}
        >
            <div className={`colorsModule_colorsContainer_item__itemButton  ${isCurrentActive && 'active' }`}>
                <span style={{backgroundColor: color}} />
            </div>
            <p id='colorName'>{names.name}</p>
        </div>
    );
}

