/**************************************************************************************
 **************************************************************************************

  The library "csstree-validator" uses the heavyweight "MDN data" library
 (https://github.com/mdn/data), which is why it has a lot of weight.
 I will try to replace this library in the future. A candidate for
 replacement is the "css-validator" library (https://github.com/twolfson/css-validator),
 but this is a little outdated and needs some work.


 **************************************************************************************
 **************************************************************************************/




import React, { useContext }             from "react";
import { ModuleCssStyles }                          from "../components/modules/ModuleCssStyles";
import { setCheckbox, setCssReset, setCurrentPage } from "../../../store/actions/extensionStorageActions";
import { useDispatch, useSelector }                 from "react-redux";
import {  LanguageContext }                         from "../../../store/context/appContext";
import en                                           from "../../../assets/locales/en/en";


export default function PageCssStyles() {

    let languageContext = useContext(LanguageContext);
    let language = languageContext ? languageContext.pages.page_css_styles : en.pages.page_css_styles

    const dispatch    = useDispatch();
    const state       = useSelector(state => state.state);
    let currentScheme = state.currentDomain ? state.domains[state.currentDomain].currentScheme : false;

    function setReset() {
        dispatch(setCssReset(state.currentDomain, currentScheme, true));
        dispatch(setCheckbox(state.currentDomain, currentScheme, 'css_on', false));
    }

    function goHome() {
        dispatch(setCurrentPage('home'));
    }

    return (
        <>
            <ModuleCssStyles />

            <div className={`mainMenu cssStylesMenu`}>
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


