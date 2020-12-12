import React, { useContext } from "react";
import Text                             from "../components/text/Text";
import { useDispatch }                                      from "react-redux";
import { setCurrentPage, setManualDone, setTopMenuOptions } from "../../../store/actions/extensionStorageActions";
import { LanguageContext }                                  from "../../../store/context/appContext";
import en                                                   from "../../../assets/locales/en/en";


export default function PageManualStart() {

    let languageContext = useContext(LanguageContext);
    let language = languageContext ? languageContext.pages.page_manual_start : en.pages.page_manual_start

    const dispatch = useDispatch();

    function startManual() {
        dispatch(setCurrentPage('manual'));
        dispatch(setManualDone(true));
    }

    function skipManual() {
        dispatch(setCurrentPage('home'));
        dispatch(setManualDone(true));
        dispatch(setTopMenuOptions(''));
    }

    return (
        <>

            <div id="chameltoneLogoNoFrame" className={`manual_chameltoneLogoNoFrame manualStart`}>
                <span />
            </div>

            <div className={`manualStart_textBlock`}>

                <Text
                    identifier={`manual_title manual_title_manualStart line_1`}
                    textData={language.textLine1}
                />

                <Text
                    identifier={`manual_title manual_title_manualStart line_2`}
                    textData={language.textLine2}
                />

                <Text
                    identifier={`manual_title manual_title_manualStart line_3`}
                    textData={language.textLine3}
                />

            </div>


            <button
                className={`manual button_big__stroke manualStart`}
                id="button"
                onClick={startManual}
            >{language.buttonText}</button>


            <button
                className={`manual button_big__noStroke manualStart show}`}
                id="button"
                onClick={skipManual}
            >{language.buttonSkipText}</button>


        </>

    );
}





