import React, { useContext, useState } from "react";
import ShareSocials                               from "./components_ModalShare/Share_Socials";
import Text                                       from "../text/Text";
import { showBackDark, showModalShare }           from "../../../../store/actions/extensionStorageActions";
import { useDispatch }                            from "react-redux";
import { LanguageContext }              from "../../../../store/context/appContext";
import en                                         from "../../../../assets/locales/en/en";

export default function ModalShare() {

    let languageContext = useContext(LanguageContext);
    let language = languageContext ? languageContext.modals.modal_share : en.modals.modal_share


    const dispatch                            = useDispatch();
    const [hideModalShare, setHideModalShare] = useState(false);

    function closeModalShare() {

        setHideModalShare(true);
        dispatch(showBackDark(false));
        setTimeout(() => {
            setHideModalShare(false);
            dispatch(showModalShare(false));
        }, 400);
    }

    return (
        <div className={`modalShare showModalShare  ${hideModalShare ? 'hideModalShare' : null}`}>

            <Text
                identifier="modalShare_title"
                textData={language.titles.title}
            />

            <ShareSocials />

            <div className={`mainMenu modalShare_centerSingleButton`}>
                <div
                    className={`mainMenu__item middle`}
                    id="item"
                    onClick={closeModalShare}
                >
                    {language.buttons.button_cancel}
                </div>
            </div>

        </div>
    );
}
