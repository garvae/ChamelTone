import React, { useContext } from "react";
import { ColorItem }                    from "./components_ModuleColors/ColorItem";
import ColorPicker                      from "./components_ModuleColors/ColorPicker";
import {  LanguageContext }    from "../../../../store/context/appContext";
import {initColorsDefaults}             from "../../../../store/initial/initialState";
import en                               from "../../../../assets/locales/en/en";


export function ModuleColors() {

    let languageContext = useContext(LanguageContext);
    let language = languageContext ? languageContext : en

    let items = [];
    let count = 1;
    while (count < 7) {
        items.push(`color_${count}`);
        count++;
    }

    return (
        <div className="colorsModule">

            <ColorPicker defaults={initColorsDefaults} />

            <div className="colorsModule_colorsContainer">
                {items.map(item => (
                    <ColorItem
                        key={item}
                        props={initColorsDefaults[item]}
                        names={language.pages.page_colors.modules.module_colors[item]}
                    />
                ))}
            </div>

        </div>
    );
}
