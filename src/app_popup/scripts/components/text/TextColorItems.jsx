import React, { useContext } from "react";
import {  LanguageContext }             from "../../../../store/context/appContext";
import en                               from "../../../../assets/locales/en/en";

function TextColor(data) {
    if (data.data !== '') {
        return (
            <span>{data.data}</span>
        );
    }
    else {
        return null;
    }
}

export default function TextColorItems(props) {

    let languageContext = useContext(LanguageContext);
    let language = languageContext ? languageContext : en

    let classNameProp = '';

    if (props.className !== '' && props.className !== undefined) {
        classNameProp = props.className;
    }

    let manualItem = 'manual_' + props.current;
    let text       = language.pages.page_manual[manualItem];

    let text_1,
        text_2,
        textColor_1,
        textColor_2;

    if (text.text_1 !== undefined) {
        text_1 = text.text_1;
    }

    if (text.text_2 !== undefined) {
        text_2 = text.text_2;
    }


    if (text.textColor_1 !== undefined) {
        textColor_1 = text.textColor_1;
    }

    if (text.textColor_2 !== undefined) {
        textColor_2 = text.textColor_2;
    }

    return (
        <div id='easeIn' className={`${classNameProp}`}>
                    {text_1}
                    <TextColor data={textColor_1} />
                    {text_2}
                    <TextColor data={textColor_2} />
        </div>
    );
}



