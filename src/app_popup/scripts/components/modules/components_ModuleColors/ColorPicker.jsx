import React, { useEffect, useState }    from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";
import { useDispatch, useSelector }      from "react-redux";
import {
    setCheckbox,
    setColorsDefaults, setColorsReset, setCurrentActiveColor, setNewColorValue,
} from "../../../../../store/actions/extensionStorageActions";

export default function ColorPicker(props) {

    const dispatch = useDispatch();
    const state    = useSelector(state => state.state);

    /* ======== Below is a bit of unreadable code .... I'll refactor this a little later =) ======== */

    let isSchemesInCurrentDomain = !!state.domains[state.currentDomain].schemes;

    let currentScheme            = state.currentDomain ? state.domains[state.currentDomain].currentScheme : false;
    let isCurrentSchemeInSchemes = isSchemesInCurrentDomain && !!state.domains[state.currentDomain].schemes[currentScheme];

    let isColorsInCurrentScheme = isCurrentSchemeInSchemes && !!state.domains[state.currentDomain].schemes[currentScheme].colors;

    let isActiveColor = isColorsInCurrentScheme && !!state.domains[state.currentDomain].schemes[currentScheme].colors.activeColor;
    let activeColor   = isActiveColor ? state.domains[state.currentDomain].schemes[currentScheme].colors.activeColor : 'color_1';

    let initColor = activeColor && isActiveColorValue ? state.domains[state.currentDomain].schemes[currentScheme].colors[activeColor].value : props.defaults.color_1.value;

    let isActiveColorValue = isColorsInCurrentScheme && !!state.domains[state.currentDomain].schemes[currentScheme].colors[activeColor].value;
    let activeColorValue   = isActiveColorValue ? state.domains[state.currentDomain].schemes[currentScheme].colors[activeColor].value : initColor;

    let colorsReset = isColorsInCurrentScheme && state.domains[state.currentDomain].schemes[currentScheme].colors.colorsReset;

    let isCheckboxOn = isCurrentSchemeInSchemes ? state.domains[state.currentDomain].schemes[currentScheme]['colors_on'] : false; // check if checkbox turn on

    /* ======================================================================================== */


    const [color, setColor] = useState(initColor);

    function changeColor(color) {
        setColor(color);
        dispatch(setNewColorValue(state.currentDomain, currentScheme, activeColor, color));

        if (!isCheckboxOn){
            dispatch(setCheckbox(state.currentDomain, currentScheme, 'colors_on', true));
        }
    }

    useEffect(() => {
        if (colorsReset) {
            let newValue = props.defaults.color_1.value;
            setColor(newValue);
            dispatch(setColorsReset(state.currentDomain, currentScheme, false));
            dispatch(setColorsDefaults(state.currentDomain, currentScheme));
            dispatch(setCurrentActiveColor(state.currentDomain, currentScheme, 'color_1'));
        }
    }, [colorsReset]);

    useEffect(() => {
        setColor(activeColorValue);
    }, [activeColor]);

    useEffect(() => {
        if (!activeColor) {
            dispatch(setCurrentActiveColor(state.currentDomain, currentScheme, 'color_1'));
        }
    }, []);

    return (
        <div className="colorPicker">

            <HexColorPicker
                color={color}
                onChange={changeColor}
            />

            <div className="colorPicker_input">
                <div className="colorPicker_input_center">
                    <span>#</span>

                    <HexColorInput
                        color={color}
                        onChange={changeColor}
                    />
                </div>
            </div>

        </div>
    );


}

