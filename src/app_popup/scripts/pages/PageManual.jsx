import React, { useState, useEffect, useContext } from "react";
import TextColorItems                             from "../components/text/TextColorItems";
import { CheckboxMenu }                           from "../components/menu/CheckboxMenu";
import IconPointer                                from "../components/icons/IconPointer";
import { setCurrentPage, setTopMenuOptions }      from "../../../store/actions/extensionStorageActions";
import { useDispatch }                            from "react-redux";
import { LanguageContext }                        from "../../../store/context/appContext";
import en                                         from "../../../assets/locales/en/en";

export default function PageManual() {

    let languageContext = useContext(LanguageContext);
    let language = languageContext ? languageContext : en


    const pages = ['1', '2', '3', '4', '5', '6', '7', '8'];

    let lastPage  = pages[pages.length - 1].toString();
    let firstPage = pages[0];

    const dispatch = useDispatch();

    function finishManual() {
        dispatch(setCurrentPage('home'));
        dispatch(setTopMenuOptions(''));
    }

    const [current, setCurrent] = useState(firstPage);

    let optionCurrentClassName = `currentManual_${current}`;

    let topMenuOptions = optionCurrentClassName + ' ' + 'topMenu_manual';

    let currentToNumber = Number(current);

    function nextPage() {
        let newValue = currentToNumber + 1;
        setCurrent(newValue.toString());

    }

    function prevPage() {
        let newValue = currentToNumber - 1;
        setCurrent(newValue.toString());

    }

    function onClickEvent(e) {
        let next = e.target.attributes.id.value;
        setCurrent(next);
    }


    useEffect(
        () => {
            setCurrent('1');

        }, []);

    useEffect(
        () => {
            dispatch(setTopMenuOptions(topMenuOptions));

        }, [current]);

    return (
        <>

            <div className={`manual_sliderDots manual ${optionCurrentClassName}`}>

                {pages.map(page => (
                    <span
                        key={page}
                        onClick={onClickEvent}
                        className={`manual_sliderDots__dot dot_${page} ${page === current ? 'active' : ''}`}
                        id={`${page}`}
                    />
                ))}


            </div>

            <IconPointer
                className={`manual_pointers__pointer manual_pointers__pointer_1 manual ${optionCurrentClassName}`} />
            <IconPointer
                className={`manual_pointers__pointer manual_pointers__pointer_2 manual ${optionCurrentClassName}`} />
            <IconPointer
                className={`manual_pointers__pointer manual_pointers__pointer_3 manual ${optionCurrentClassName}`} />

            <div
                className={`
                    manual_sliderButton 
                    manual_sliderButton_left 
                    manual 
                    ${current !== firstPage ? 'active' : ''
                }`}
                onClick={prevPage}
            >
                <span />
            </div>

            <div
                className={`
                    manual_sliderButton 
                    manual_sliderButton_right 
                    manual 
                    ${current !== lastPage ? 'active' : ''
                }`}
                onClick={nextPage}
            >
                <span />
            </div>


            <div className={`manual_textBlock`}>

                <TextColorItems
                    className={`
                    manual 
                    ${optionCurrentClassName}
                    manual_textBlock__item
                    `}
                    current={current}
                />

            </div>


            <button
                className={`manual button_big__stroke manual ${optionCurrentClassName}`}
                id="button"
                onClick={finishManual}
            >{language.pages.page_manual.manual_8.text_button}</button>


            <CheckboxMenu className={`manual ${optionCurrentClassName}`} />


            <div className={`mainMenu bottomMenu manual ${optionCurrentClassName}`}>
                <div className={`mainMenu__item left`} id="item">{language.menu.menu_bottom.left}</div>
                <div className={`mainMenu__item middle`} id="item">{language.menu.menu_bottom.middle}</div>
                <div className={`mainMenu__item right`} id="item">{language.menu.menu_bottom.right}</div>
            </div>

        </>

    );
}





