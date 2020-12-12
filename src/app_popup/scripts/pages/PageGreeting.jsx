import React, { useContext, useEffect }                       from "react";
import Text                                                   from "../components/text/Text";
import ModuleDropDown                                         from "../components/modules/ModuleDropDown";
import { useDispatch, useSelector }                           from "react-redux";
import { languages }                                          from "../../../assets/locales";
import { setCurrentPage, initFirstLaunch, setTopMenuOptions } from "../../../store/actions/extensionStorageActions";
import { LanguageContext }                                    from "../../../store/context/appContext";
import en                                                     from "../../../assets/locales/en/en";

export default function PageGreeting() {


    let languagesList = languages;

    let languageContext = useContext(LanguageContext);
    let language = languageContext ? languageContext.pages.page_greeting : en.pages.page_greeting


    const state    = useSelector(state => state.state);
    const dispatch = useDispatch();

    let currentLang  = '';
    let userLanguage = languages[state.userLanguage];
    if (!userLanguage) {
        currentLang = 'English';
    }
    else {
        currentLang = userLanguage;
    }

    let nextPage = '';

    function changeCurrentPage() {

        if (state.userManualDone === '' || !state.userManualDone) {
            nextPage = 'manualStart';
        }
        else {
            nextPage = 'home';
        }

        dispatch(initFirstLaunch(false));

        if (nextPage === 'manualStart') {
            dispatch(setTopMenuOptions('currentManual_1 topMenu_manual'));
        }

        dispatch(setCurrentPage(nextPage));
    }

    function updateLanguage(update){
        language = update
    }

    useEffect(() => {
        languageContext && updateLanguage(languageContext)
    }, [languageContext]);

    return (
        <>
            <div className="greeting_langLogo" />

            <Text
                identifier="greeting_title_en"
                textData={language.title_en}
            />

            <Text
                identifier="greeting_title_ru"
                textData={language.title_ru}
            />

            <ModuleDropDown
                className="greeting_dropDownLang"
                items={languagesList}
                initItem={currentLang}
                itemsType={`languages`}
            />

            <button
                className={`button_big__noStroke greeting greeting_button_continue`}
                id="button"
                onClick={changeCurrentPage}
            >{language.button_continue}</button>
        </>
    );
}




