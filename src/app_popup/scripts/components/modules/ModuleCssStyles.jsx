import React, { useContext, useEffect, useState } from "react";
import { validateString }                         from 'csstree-validator/lib/validate';
import { useDispatch, useSelector }   from "react-redux";
import {
    setCheckbox, setCssReset, setCurrentCssCode
}                                     from "../../../../store/actions/extensionStorageActions";

import {  LanguageContext } from "../../../../store/context/appContext";
import en                            from "../../../../assets/locales/en/en";


export function ModuleCssStyles() {


    let languageContext = useContext(LanguageContext);
    let language = languageContext ? languageContext.pages.page_css_styles : en.pages.page_css_styles


    const dispatch = useDispatch();
    const state    = useSelector(state => state.state);


    /* ======== Below is a bit of unreadable code .... I'll refactor this a little later =) ======== */

    let isSchemesInCurrentDomain = !!state.domains[state.currentDomain].schemes;

    let currentScheme            = state.currentDomain ? state.domains[state.currentDomain].currentScheme : false;
    let isCurrentSchemeInSchemes = isSchemesInCurrentDomain && !!state.domains[state.currentDomain].schemes[currentScheme];

    let isCssInCurrentScheme = isCurrentSchemeInSchemes && !!state.domains[state.currentDomain].schemes[currentScheme].css;
    let cssCodeValue         = isCssInCurrentScheme ? state.domains[state.currentDomain].schemes[currentScheme].css.value : '';

    let cssReset = isCssInCurrentScheme && state.domains[state.currentDomain].schemes[currentScheme].css.cssReset;

    let isCheckboxOn = isCurrentSchemeInSchemes ? state.domains[state.currentDomain].schemes[currentScheme]['css_on'] : false; // check if checkbox turn on

    /* ======================================================================================== */


    const [code, setCode]         = useState(cssCodeValue);
    const [showCode, setShowCode] = useState(true);

    function isValid(statusValid, errorMessage, validMessage) {
        if (!statusValid) {
            errorMessage.classList.add('invalid');
            validMessage.classList.remove('valid');
        }
        else {
            errorMessage.classList.remove('invalid');
            validMessage.classList.add('valid');
        }
    }


    function checkString(e) {

        let userCss      = e.target.value;
        let statusValid  = validateString(userCss, 'userCss').userCss[0] === undefined;
        let errorMessage = document.getElementById('errorMessage');
        let validMessage = document.getElementById('validMessage');

        setCode(userCss);

        dispatch(setCurrentCssCode(state.currentDomain, currentScheme, userCss));

        setTimeout(isValid, 600, statusValid, errorMessage, validMessage);

        if (!isCheckboxOn) {
            dispatch(setCheckbox(state.currentDomain, currentScheme, 'css_on', true));
        }
    }

    useEffect(() => {
        setCode(cssCodeValue);

    }, []);

    useEffect(() => {
        if (cssReset) {
            let newValue = '';
            setCode(newValue);
            setShowCode(false);
            dispatch(setCssReset(state.currentDomain, currentScheme, false));

        }
    }, [cssReset]);

    useEffect(() => { // for immediately re-render... I'll refactor this a bit later
        if (!showCode) {
            setShowCode(true);
        }
    }, [showCode]);

    return (
        <>
            {
                showCode ? <textarea
                    className="cssStylesModule_scrollWrap__textArea"
                    id="textArea"
                    placeholder=''
                    onChange={checkString}
                    spellCheck='false'
                >
                 {code}
             </textarea> : null
            }

            <div className="cssStylesModule__placeholder">{language.modules.module_css_styles.inputPlaceholder}</div>

            <div id="errorMessage" className="cssStylesModule__errorMessage">{language.modules.module_css_styles.errorMessage}</div>
            <div id="validMessage" className="cssStylesModule__validMessage">{language.modules.module_css_styles.validMessage}</div>

        </>
    );
}

