import React, { useContext } from "react";
import {useDispatch}                    from "react-redux";
import {setCurrentPage}                 from "../../../../store/actions/extensionStorageActions";
import { LanguageContext }    from "../../../../store/context/appContext";
import en                               from "../../../../assets/locales/en/en";

export default function MenuHomeBottom() {

    let languageContext = useContext(LanguageContext);
    let language = languageContext ? languageContext : en

    const dispatch = useDispatch();

    function changePage(e) {

        if (e.target.className.includes('menuHomeBottom_left')) {
            dispatch(setCurrentPage('filters'));
        }
        if (e.target.className.includes('menuHomeBottom_middle')) {
            dispatch(setCurrentPage('colors'));
        }
        if (e.target.className.includes('menuHomeBottom_right')) {
            dispatch(setCurrentPage('cssStyles'));
        }
    }

    return (
        <div className={`mainMenu bottomMenu `}>

            <div className={`mainMenu__item menuHomeBottom_left left`} id="item" onClick={changePage}>{language.menu.menu_bottom.left}</div>

            <div className={`mainMenu__separator left`} id="separator">|</div>

            <div className={`mainMenu__item menuHomeBottom_middle middle`} id="item" onClick={changePage}>{language.menu.menu_bottom.middle}</div>

            <div className={`mainMenu__separator right`} id="separator">|</div>

            <div className={`mainMenu__item menuHomeBottom_right right`} id="item" onClick={changePage}>{language.menu.menu_bottom.right}</div>

        </div>
    );
}