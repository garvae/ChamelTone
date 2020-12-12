import React, { useContext, useEffect } from "react";
import ModuleDropDown                   from "../components/modules/ModuleDropDown";
import ModuleDarkMode                   from "../components/modules/ModuleDarkMode";
import Text                             from "../components/text/Text";
import { CheckboxMenu }                 from "../components/menu/CheckboxMenu";
import MenuHomeBottom                   from "../components/menu/MenuHomeBottom";
import { useDispatch, useSelector }     from "react-redux";
import {
    addNewDomain, addNewScheme, removeCurrentScheme, setCurrentScheme, setDarkModeDefaults,
}                                       from "../../../store/actions/extensionStorageActions";

import { LanguageContext } from "../../../store/context/appContext";
import en                  from "../../../assets/locales/en/en";

export default function PageHome() {

    let languageContext = useContext(LanguageContext);
    let isLanguage      = !!languageContext;
    let language        = isLanguage ? languageContext : en;

    const state    = useSelector(state => state.state);
    const dispatch = useDispatch();

    let isDomain = !!state.domains[state.currentDomain];

    let currentScheme    = '';
    let schemesNames     = [];
    let hideDelete       = '';
    let defaultSchemeKey = 'default';


    if (isDomain) {
        let schemeInState = state.domains[state.currentDomain].currentScheme;
        currentScheme     = schemeInState && schemeInState;

        schemesNames = state.domains[state.currentDomain].schemesNames;
        hideDelete   = currentScheme === 'default';
    }


    let showDrop = currentScheme !== '';

    let newSchemeName = language.pages.page_home.modules.module_dropDown.newScheme;
    let newSchemeKey  = Date.now()
                            .toString();

    function createScheme() {
        let count = 2;
        while (Object.values(schemesNames)
                     .includes(newSchemeName)) {
            newSchemeName = language.pages.page_home.modules.module_dropDown.newScheme + count++;
            if (!Object.values(schemesNames)
                       .includes(newSchemeName)) {
                break;
            }
        }

        if (!Object.values(schemesNames)
                   .includes(newSchemeName)) {
            dispatch(addNewScheme(newSchemeKey, newSchemeName, state.currentDomain));
            dispatch(setCurrentScheme(newSchemeKey, state.currentDomain));
            dispatch(setDarkModeDefaults(newSchemeKey, state.currentDomain));
        }
    }

    function deleteScheme() {
        dispatch(removeCurrentScheme(currentScheme, defaultSchemeKey, state.currentDomain));
    }

    useEffect(() => {
        !isDomain && dispatch(addNewDomain(state.currentDomain));
    }, []);

    return (
        <>
            <ModuleDarkMode />

            <Text
                identifier="dropDownTitle"
                textData={language.pages.page_home.titles.title_dropDown}

            />

            {showDrop &&
            <ModuleDropDown
                className="home_dropDownTheme"
                items={schemesNames}
                initItem={currentScheme}
                itemsType={'schemes'}
            />
            }

            <button
                className={`button_big__noStroke home_button__createTheme`}
                id="button"
                onClick={createScheme}
            >{language.pages.page_home.buttons.createTheme}</button>

            <button
                className={`button_medium__noStroke home_button__deleteTheme ${hideDelete && 'hideDelete'}`}
                id="button"
                onClick={deleteScheme}
            >{language.pages.page_home.buttons.resetTheme}</button>

            <CheckboxMenu />

            <MenuHomeBottom />

        </>

    );
}




