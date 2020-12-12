import React, { useContext }                    from "react";
import { ButtonTopMenu }                                   from "../buttons/ButtonTopMenu";
import { showModalSupport, showModalDonate, showBackDark } from "../../../../store/actions/extensionStorageActions";
import { useDispatch, useSelector }                        from "react-redux";
import { LanguageContext }                                 from "../../../../store/context/appContext";


export default function TopMenu() {

    let languageContext = useContext(LanguageContext);
    let language = languageContext

    const dispatch = useDispatch();
    const state    = useSelector(state => state.state);

    let classNameProp   = state.topMenuOptions && state.topMenuOptions;
    let hideMenu        = state.routes && (state.routes.currentPage === 'greeting' || state.routes.currentPage === 'manualStart');
    let isCurrentDomain = !!state.currentDomain;
    let currentDomain   = isCurrentDomain ? state.currentDomain : null;


    function showModal(e) {

        if (e.target.id === 'donate') {
            dispatch(showBackDark(true));
            dispatch(showModalDonate(true));
        }
        if (e.target.id === 'support') {
            dispatch(showBackDark(true));
            dispatch(showModalSupport(true));
        }
    }

    return (
        <div className={`topMenu ${classNameProp} ${hideMenu && 'hideTopMenu'}`}>
            <ButtonTopMenu className='topMenu__Icon' id='home' />
            <button
                className='topMenu__Icon'
                id='donate'
                onClick={showModal}
            >
                {language.menu.menu_top.button_donate}
            </button>
            <div className="topMenu__Icon" id="site"><p>{currentDomain}</p></div>
            <ButtonTopMenu className='topMenu__Icon' id='lang' />
            <button
                className='topMenu__Icon'
                id='support'
                onClick={showModal}
            />
            <ButtonTopMenu className='topMenu__Icon' id='share' />
        </div>
    );
}

