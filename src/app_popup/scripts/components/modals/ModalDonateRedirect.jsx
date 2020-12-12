import React, { useState, useContext } from "react";
import Text                            from "../text/Text";
import LogoWithHeart                   from "../icons/LogoWithHeart";
import {
    showBackDark, showModalDonateRedirect, showModalSupport
}                                      from "../../../../store/actions/extensionStorageActions";
import { useDispatch }                 from "react-redux";

import { LanguageContext } from "../../../../store/context/appContext";
import en                  from "../../../../assets/locales/en/en";

export default function ModalDonateRedirect() {

    let languageContext = useContext(LanguageContext);
    let language        = languageContext ? languageContext.modals.modal_donate_redirect : en.modals.modal_donate_redirect;
    const dispatch      = useDispatch();


    const [hideModalDonateRedirect, setHideModalDonateRedirect] = useState(false);

    function closeModalDonateRedirect() {

        setHideModalDonateRedirect(true);
        dispatch(showBackDark(false));
        dispatch(showModalSupport(false));
        setTimeout(() => {
            setHideModalDonateRedirect(false);
            dispatch(showModalDonateRedirect(false));
            window.close();
        }, 400);

    }

    setTimeout(() => {
        closeModalDonateRedirect();
    }, 2500);


    return (

        <div
            className={`modalDonateRedirect showModalDonateRedirect  ${hideModalDonateRedirect ? 'hideModalDonateRedirect' : null}`}>

            <LogoWithHeart classNameProp='modalDonateRedirect__logo' />


            <div className="modalDonateRedirect_description">

                <span className="modalDonateRedirect_description__first_line">
                    {language.descriptions.description_first}
                </span>
                <span className="modalDonateRedirect_description__middle_line">
                    {language.descriptions.description_middle}
                </span>
                <div className="modalDonateRedirect_description__last_line">
                    <span className="modalDonateRedirect_description__last_line_first">
                    {language.descriptions.description_last_1}
                </span>
                    <span className="modalDonateRedirect_description__last_line_last">
                    {language.descriptions.description_last_2}
                </span>
                </div>

            </div>


            <Text
                textData={language.descriptions.description_bottom}
                identifier="modalDonateRedirect__bottomDescription"
            />


        </div>

    );
}
