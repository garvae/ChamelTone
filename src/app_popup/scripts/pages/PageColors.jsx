import React, { useContext, useEffect } from "react";
import { ModuleColors }                 from "../components/modules/ModuleColors";
import {
    setCheckbox, setColorsReset, setCurrentActiveColor, setCurrentPage
}                                       from "../../../store/actions/extensionStorageActions";
import { useDispatch, useSelector }     from "react-redux";
import {  LanguageContext }    from "../../../store/context/appContext";
import en                               from "../../../assets/locales/en/en";

export default function PageColors() {

    let languageContext = useContext(LanguageContext);
    let language = languageContext ? languageContext.pages.page_colors : en.pages.page_colors

    const dispatch    = useDispatch();
    const state       = useSelector(state => state.state);
    let currentScheme = state.currentDomain ? state.domains[state.currentDomain].currentScheme : false;

    function setReset() {
        dispatch(setColorsReset(state.currentDomain, currentScheme, true));
        dispatch(setCheckbox(state.currentDomain, currentScheme, 'colors_on', false));
    }

    function goHome() {
        dispatch(setCurrentPage('home'));
    }

    useEffect(() => {
        dispatch(setCurrentActiveColor(state.currentDomain, currentScheme, 'color_1'));
    }, []);

    return (
        <>
            <ModuleColors />

            <div className={`mainMenu colorsMenu`}>
                <div
                    className={`mainMenu__item left`}
                    id="item"
                    onClick={setReset}
                >{language.menu.left}</div>
                <div
                    className={`mainMenu__item right`}
                    id="item"
                    onClick={goHome}
                >{language.menu.right}</div>
            </div>

        </>
    );
}


