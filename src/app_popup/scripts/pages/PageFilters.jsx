import React, { useContext } from "react";
import { ModuleFilters }                from "../components/modules/ModuleFilters";
import { useDispatch, useSelector }     from "react-redux";
import {
    setCheckbox,
    setCurrentPage, setFiltersDefaults
}                                       from "../../../store/actions/extensionStorageActions";
import { LanguageContext }    from "../../../store/context/appContext";
import en                               from "../../../assets/locales/en/en";

export default function PageFilters() {

    let languageContext = useContext(LanguageContext);
    let language = languageContext ? languageContext.pages.page_filters : en.pages.page_filters

    const dispatch = useDispatch();
    const state    = useSelector(state => state.state);

    let currentScheme = state.currentDomain ? state.domains[state.currentDomain].currentScheme : false;

    function applyAction(e) {

        if (e.target.className.includes('filtersMenu_left')) {
            // dispatch(setDefaultFiltersValues(state.currentDomain, currentScheme));
            dispatch(setFiltersDefaults(state.currentDomain, currentScheme, true));
            setTimeout(() => {
                dispatch(setFiltersDefaults(state.currentDomain, currentScheme, false));
            }, 200);
            dispatch(setCheckbox(state.currentDomain, currentScheme, 'filters_on', false));
        }
        if (e.target.className.includes('filtersMenu_right')) {
            dispatch(setCurrentPage('home'));
        }
    }

    return (
        <>
            <ModuleFilters />

            <div className={`mainMenu filtersMenu `}>

                <div className={`mainMenu__item  left filtersMenu_left`} id="item"
                     onClick={applyAction}>{language.menu.left}</div>

                <div className={`mainMenu__item  right filtersMenu_right`} id="item"
                     onClick={applyAction}>{language.menu.right}</div>

            </div>
        </>
    );
}


