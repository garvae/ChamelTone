import React, { useContext, useState } from "react";
import ButtonDonate                               from "../buttons/ButtonDonate";
import {useDispatch}                              from "react-redux";
import { showBackDark, showModalDonate }          from "../../../../store/actions/extensionStorageActions";
import {  LanguageContext }              from "../../../../store/context/appContext";
import en                                         from "../../../../assets/locales/en/en";

export default function ModalDonate() {

    let languageContext = useContext(LanguageContext);
    let language = languageContext ? languageContext.modals.modal_donate : en.modals.modal_donate

    const dispatch                            = useDispatch();
    const [hideModalDonate, setHideModalDonate] = useState(false);

    function closeModalDonate() {

        setHideModalDonate(true);
        dispatch(showBackDark(false));
        setTimeout(() => {
            setHideModalDonate(false);
            dispatch(showModalDonate(false));
        }, 400);

    }

    return (

        <div className={`modalDonate showModalDonate  ${hideModalDonate ? 'hideModalDonate' : null}`}>

            <div className="modalDonate_description">

                <span className="modalDonate_description__first_line">
                    {language.descriptions.description_first}
                </span>

                <span className="modalDonate_description__middle_line">
                    {language.descriptions.description_middle}
                </span>

            </div>

            <ButtonDonate
                identifier="modalDonate"
                buttonText={language.buttons.button_redirect}
            />

                <div className={`mainMenu modalDonate_centerSingleButton`}>
                    <div
                        className={`mainMenu__item middle`}
                        id="item"
                        onClick={closeModalDonate}
                    >
                        {language.buttons.button_cancel}
                    </div>
                </div>

        </div>
    );
}
