import React, { useContext, useEffect, useState } from 'react';
import Scrollbar                                  from "../scrollbars/Scrollbar";
import { useDispatch, useSelector }               from "react-redux";
import {
    initLanguage, setCurrentScheme, setNewSchemeName
}                                                 from "../../../../store/actions/extensionStorageActions";
import { languages }                              from '../../../../assets/locales';
import { LanguageContext }                        from "../../../../store/context/appContext";
import en                                         from "../../../../assets/locales/en/en";


export default function ModuleDropDown(props) {

    let languageContext = useContext(LanguageContext);
    let language        = languageContext ? languageContext : en;

    // ===================== init state values:

    const state    = useSelector(state => state.state);
    const dispatch = useDispatch();

    let dispatchNewValue;

    // =========================================================================== init items:

    let items;
    let initItem;
    let schemesNames      = state.domains[state.currentDomain].schemesNames;
    let currentScheme     = state.domains[state.currentDomain].currentScheme;
    let currentSchemeName = schemesNames[currentScheme];
    let activeStyle       = '';

    // ============== check type of items in dropDown list and init type of setCurrent... :

    let itemsObject = {};

    let schemesType   = props.itemsType === 'schemes';
    let languagesType = props.itemsType === 'languages';

    if (schemesType) {

        itemsObject = schemesNames;
        items       = props.items;
        initItem    = state.domains[state.currentDomain].schemesNames[props.initItem];

        dispatchNewValue = function (newItem) {
            for (const [key, value] of Object.entries(itemsObject)) {
                if (value === newItem) {
                    dispatch(setCurrentScheme(key, state.currentDomain));
                }
            }
        };

    }
    else if (languagesType) {
        itemsObject      = languages;
        dispatchNewValue = function (newItem) {
            for (const [key, value] of Object.entries(itemsObject)) {
                if (value === newItem) {
                    dispatch(initLanguage(key));
                }
            }
        };

        items    = props.items;
        initItem = props.initItem;

    }

    // ==================================================== check className for dropDown items group:

    let classNameProp = '';

    if (props.className !== '' && props.className !== undefined) {
        classNameProp = props.className;
    }


    // =========================================================================== init body height:

    let dropDownBodyHeight;

    let lengthItems = Object.keys(items).length;

    if (lengthItems === 1) {
        dropDownBodyHeight = `dropDownBodyHeight_1`;
    }
    else if (lengthItems !== 1 && lengthItems <= 3) {
        dropDownBodyHeight = `dropDownBodyHeight_${lengthItems}`;
    }
    else {
        dropDownBodyHeight = `dropDownBodyHeight_4`;
    }

    // =========================================================================== init state:

    const [dropActive, setDropActive]     = useState('');
    const [currentItem, setCurrentItem]   = useState(initItem);
    const [prevState, setPrevState]       = useState(initItem);
    const [inputVisible, setInputVisible] = useState(false);
    const [inputLeave, setInputLeave]     = useState(false);

    // ================================================================= add/remove classes on click/out:

    function closedRemove() { // remove animation-class "closed"
        setDropActive('');
    }

    function setActive() { // check item class, set new temporary animation class, request to remove temporary animation class
        if (dropActive === '') {
            setDropActive('open');
        }
        if (dropActive === 'open') {
            setDropActive('closed');
            setTimeout(closedRemove, 500);
        }
    }

    if (dropActive === 'open') {
        activeStyle = 'open';
    }

    if (dropActive === 'closed') {
        activeStyle = 'closed';
    }

    function clickOutside() {
        if (dropActive === 'open') {
            setDropActive('closed');
            setTimeout(closedRemove, 500);
        }
        if (inputLeave) {
            setInputVisible(false);
        }
    }

    function waitClickOut() { // add one-time listener to click out of dropDown
        document.addEventListener('click', clickOutside, {
            once: true
        });
    }

    // ======================================================================= set selected item to state:

    function itemSelect(e) {
        let newItem = e.target.textContent;
        setCurrentItem(newItem);
        dispatchNewValue(newItem);
    }

    // =========================================================================== show rename:

    function showRename() {
        if (!inputVisible) {
            setCurrentItem(currentItem);
            setInputVisible(!inputVisible);
        }
        else {
            setInputVisible(!inputVisible);
        }
    }

    function onMouseEnterInput() {
        setInputLeave(false);
    }

    // =========================================================================== rename item:

    function renameItem(e) {
        let newSchemeName = e.target.value;
        setCurrentItem(newSchemeName);
    }

    let newSchemeName   = currentItem;
    let compareWithPrev = newSchemeName === prevState;
    let newSchemeKey    = Date.now()
                              .toString();

    function saveRename() {

        let count = 2;
        while (Object.values(schemesNames)
                     .includes(newSchemeName)) {
            newSchemeName = currentItem + count++;
            if (!Object.values(schemesNames)
                       .includes(newSchemeName)) {
                break;
            }
        }

        if (!compareWithPrev) {

            if (!Object.values(schemesNames)
                       .includes(newSchemeName)) {

                dispatch(setNewSchemeName(currentScheme, newSchemeName, state.currentDomain));

                setCurrentItem(newSchemeName);
                setPrevState(newSchemeName);

                showRename();
            }
        }
        else {
            showRename();
        }
    }


    useEffect(() => {
        if (schemesType) {
            setCurrentItem(currentSchemeName);
            setPrevState(currentSchemeName);
        }

    }, [currentScheme]);


    function updateLanguage(update) {
        language = update;
    }

    useEffect(() => {
        languageContext && updateLanguage(languageContext);
    }, [languageContext]);


    return (
        <div className={`dropDown ${classNameProp} ${activeStyle} ${dropDownBodyHeight}`}>

            {/* ========================= rename input ========================= */}
            <div className={`dropDown edit_item ${inputVisible && 'visible'}`}>
                <input
                    id='renameInput'
                    type="text"
                    value={currentItem}
                    className="dropDown_header_current__item"
                    onChange={renameItem}
                    spellCheck='false'
                />

                <div
                    className="edit_item__button"
                    onClick={saveRename}
                ><span /></div>
            </div>

            {/* ========================= dropDown header ========================= */}

            <div
                className="dropDown_header"
                id='dropDown_header'
                onMouseLeave={waitClickOut}
                onMouseEnter={onMouseEnterInput}
            >
                <div className="dropDown_header_current">
                    <div className="dropDown_header_current__item">

                        {currentItem}
                    </div>
                </div>

                <div className="dropDown_header__button edit" onClick={showRename} />

                <div className="dropDown_header__button drop" onClick={setActive} />
            </div>

            {/* ========================= dropDown body ========================= */}

            <Scrollbar
                id='dropDown_body'
                className={`dropDown_body`}
            >
                {Object.keys(items).length === 1 && <div
                    className={`dropDown_body__item `}
                    id={`empty_item`}
                >
                    <span>{language.pages.page_home.modules.module_dropDown.emptyItem}</span>
                </div>}

                {Object.keys(items).length !== 1 && Object.values(items)
                                                          .map(item => (

                                                              <div
                                                                  className={`dropDown_body__item ${item} ${item === currentItem && 'hidden'}`}
                                                                  key={item}
                                                                  onClick={itemSelect}
                                                                  id={`${item}`}
                                                              >
                                                                  <span>{item}</span>
                                                              </div>

                                                          ))}

            </Scrollbar>


        </div>
    );
}
