import React, { useState, useEffect } from "react";
import { useDispatch, useSelector }   from "react-redux";
import { setCheckbox }                from "../../../../store/actions/extensionStorageActions";

export function Checkbox(props) {

    let option;

    if (props.identifier === 'left') {
        option = 'filters_on';
    }
    else if (props.identifier === 'middle') {
        option = 'colors_on';
    }
    else if (props.identifier === 'right') {
        option = 'css_on';
    }

    const state    = useSelector(state => state.state);
    const dispatch = useDispatch();

    let currentScheme            = state.currentDomain ? state.domains[state.currentDomain].currentScheme : false;
    let isSchemesInCurrentDomain = !!state.domains[state.currentDomain].schemes;
    let isCurrentSchemeInSchemes = isSchemesInCurrentDomain && !!state.domains[state.currentDomain].schemes[currentScheme];

    const [isChecked, setIsChecked] = useState(false);

    function setChecked() {
        let newValue = !isChecked;
        setIsChecked(newValue);
        dispatch(setCheckbox(state.currentDomain, currentScheme, option, newValue));
    }

    useEffect(() => {
        let checked = isCurrentSchemeInSchemes ? state.domains[state.currentDomain].schemes[currentScheme][option] : false;
        setIsChecked(checked);
    }, [currentScheme]);


    return (
        <div
            className={`checkbox_round ${props.identifier}`}
        >
            <input
                type="checkbox"
                id={`checkbox_${props.identifier}`}
                checked={isChecked}
                onClick={setChecked}
            />
            <label htmlFor={`checkbox_${props.identifier}`} />
        </div>
    );
}