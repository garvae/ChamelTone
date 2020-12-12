import React, { useContext, useEffect, useState } from "react";
import { setDarkMode }                            from "../../../../store/actions/extensionStorageActions";
import { useDispatch, useSelector }               from "react-redux";
import { LanguageContext }                        from "../../../../store/context/appContext";
import en                                         from "../../../../assets/locales/en/en";


export default function ModuleDarkMode() {

    let languageContext = useContext(LanguageContext);
    let language        = languageContext ? languageContext : en;

    const state    = useSelector(state => state.state);
    const dispatch = useDispatch();

    let currentScheme            = state.currentDomain ? state.domains[state.currentDomain].currentScheme : false;
    let isSchemesInCurrentDomain = !!state.domains[state.currentDomain].schemes;
    let isCurrentSchemeInSchemes = isSchemesInCurrentDomain && !!state.domains[state.currentDomain].schemes[currentScheme];

    const [isChecked, setIsChecked] = useState(false);

    const option = 'darkMode';

    function setChecked() {
        let newValue = !isChecked;
        setIsChecked(newValue);
        dispatch(setDarkMode(state.currentDomain, currentScheme, newValue));
    }

    useEffect(() => {
        let checked = isCurrentSchemeInSchemes ? state.domains[state.currentDomain].schemes[currentScheme][option] : false;
        setIsChecked(checked);
    }, [currentScheme]);

    return (
        <div className="darkMode">
            <div className="darkMode__title" id="title">{language.pages.page_home.titles.title_darkMode}</div>
            <label className="darkMode_toggle">
                <input
                    className="darkMode_toggle__checkbox"
                    type="checkbox"
                    checked={isChecked}
                    onClick={setChecked}
                />
                <span className="darkMode_toggle__slider" />
            </label>
        </div>
    );
}