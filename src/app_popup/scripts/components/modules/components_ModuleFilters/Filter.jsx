import React, { useEffect, useState }     from "react";
import { useDispatch, useSelector }       from "react-redux";
import { setCheckbox, setNewFilterValue } from "../../../../../store/actions/extensionStorageActions";


export function Filter(data) {

    const state    = useSelector(state => state.state);
    const dispatch = useDispatch();
    let props      = data.props;

   /* ======== Below is a bit of unreadable code .... I'll refactor this a little later =) ======== */

    let currentScheme            = state.currentDomain ? state.domains[state.currentDomain].currentScheme : false;
    let isSchemesInCurrentDomain = !!state.domains[state.currentDomain].schemes;
    let isCurrentSchemeInSchemes = isSchemesInCurrentDomain && !!state.domains[state.currentDomain].schemes[currentScheme];
    let isFiltersInCurrentScheme = isCurrentSchemeInSchemes && !!state.domains[state.currentDomain].schemes[currentScheme].filters;
    let initRangeValueFromStore  = isFiltersInCurrentScheme ? state.domains[state.currentDomain].schemes[currentScheme].filters[props.identifier].value : false;

    let filtersReset = isFiltersInCurrentScheme && state.domains[state.currentDomain].schemes[currentScheme].filters.filtersReset

    let initRangeValue = initRangeValueFromStore ? initRangeValueFromStore : props.value;

    let isCheckboxOn = isCurrentSchemeInSchemes ? state.domains[state.currentDomain].schemes[currentScheme]['filters_on'] : false; // check if checkbox turn on


    /* ======================================================================================== */


    const [rangeValue, setRangeValue] = useState(initRangeValue);

    function setValue(e) {
        let newValue = e.target.value;
        setRangeValue(newValue);
        dispatch(setNewFilterValue(state.currentDomain, currentScheme, props.identifier, newValue));

        if (!isCheckboxOn){
            dispatch(setCheckbox(state.currentDomain, currentScheme, 'filters_on', true));
        }
    }

    useEffect(() => {
        if (filtersReset){
            let newValue = props.value;
            setRangeValue(newValue);
            dispatch(setNewFilterValue(state.currentDomain, currentScheme, props.identifier, newValue));
        }
    }, [filtersReset]);

    return (
        <div className={`filters__item ${props.identifier}`} id={props.identifier}>
            <span id='filterName'>{data.filterName.name}</span>
            <input
                type="range"
                value={rangeValue}
                min={props.min}
                max={props.max}
                step={props.step}
                onChange={setValue}
            />
            <span id='filterValue'>{`${Math.round(rangeValue * 100)}%`}</span>
        </div>
    );
}