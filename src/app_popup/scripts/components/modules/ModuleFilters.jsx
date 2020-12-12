import React, { useContext, useEffect } from "react";
import { Filter }                       from "./components_ModuleFilters/Filter";
import { filtersDefaults }              from "./components_ModuleFilters/filtersDefaults";
import {  LanguageContext }    from "../../../../store/context/appContext";
import en                               from "../../../../assets/locales/en/en";

export function ModuleFilters() {

    let languageContext = useContext(LanguageContext);
    let language = languageContext ? languageContext.pages.page_filters.modules.module_filters : en.pages.page_filters.modules.module_filters

    let items = [
        'brightness',
        'contrast',
        'grayscale',
        'sepia',
        'hue',
        'invert',
        'saturate',
    ];

    function updateLanguage(update){
        language = update
    }

    useEffect(() => {
        languageContext && updateLanguage(languageContext)
    }, [languageContext]);

    return (
        <div className="filters">
            {items.map(item => (
                <Filter
                    key={item}
                    props={filtersDefaults[item]}
                    filterName={language[item]}
                />
            ))}
        </div>

    );
}
