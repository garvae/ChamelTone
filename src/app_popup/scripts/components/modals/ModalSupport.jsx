import React, { useContext, useState } from "react";
import { IconChameltone }                         from "../icons/IconChameltone";
import Text                                       from "../text/Text";
import SocialsSupport                             from "./components_ModalSupport/Support_Socials";
import ButtonDonate                       from "../buttons/ButtonDonate";
import { useDispatch }       from "react-redux";
import { showBackDark, showModalSupport } from "../../../../store/actions/extensionStorageActions";
import {  LanguageContext }              from "../../../../store/context/appContext";
import en                                         from "../../../../assets/locales/en/en";

export default function ModalSupport() {

    let languageContext = useContext(LanguageContext);
    let language = languageContext ? languageContext.modals.modal_support : en.modals.modal_support


    const dispatch                                = useDispatch();
    const [hideModalSupport, setHideModalSupport] = useState(false);

    function closeModalSupport() {

        setHideModalSupport(true);
        dispatch(showBackDark(false));
        setTimeout(() => {
            setHideModalSupport(false);
            dispatch(showModalSupport(false));
        }, 400);
    }

    function linkAction(){
        window.open("https://www.garvae.com/portfolio/extensions/chameltone", "_blank")
        window.close()
    }

    return (
        <div className={`modalSupport showModalSupport  ${hideModalSupport ? 'hideModalSupport' : null}`}>

            <div className="modalSupport_icon">
                <IconChameltone classNameProp="icon_chameltone_blue_40" />
            </div>
            <div className="modalSupport_description">

                <span className="modalSupport_description__first_line">
                    {language.descriptions.description_title}
                </span>
                <span className="modalSupport_description__middle_line">
                    {language.descriptions.description_middle}
                </span>
                <span className="modalSupport_description__last_line">
                    {language.descriptions.description_last}
                </span>

            </div>


            <div className="modalSupport__link" id="site">
                <span />
                <a onClick={linkAction} href="">
                    ChamelTone on garvae.com
                </a>
            </div>

            <div className="modalSupport__link" id="email">
                <div className="email_container">
                    <span id="iconEmail" />
                    <div id="linkEmail">chameltone@gmail.com</div>
                </div>

            </div>


            <SocialsSupport />

            <ButtonDonate
                identifier="modalSupport"
                buttonText={language.buttons.button_support}
            />

            <Text
                textData={language.descriptions.description_bottom}
                identifier="modalSupport__ButtonDescription"
            />

            <div className={`mainMenu bottomMenu_singleButton`}>
                <div
                    className={`mainMenu__item right`}
                    id="item"
                    onClick={closeModalSupport}
                >
                    {language.menu.menu_bottom_close}
                </div>
            </div>

        </div>
    );
}
