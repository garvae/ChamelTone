/**************************************************************************
 **************************************************************************

 BACKGROUND SCRIPT TASKS:

 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ extension init:

 - subscribe on storage changes
 - get extension storage
 - get current domain and tab id
 - check:
 - - - if currentDomain in domainsList:
 - - - - - collect existing data and send it to tab
 - - - return if no currentDomain in domainsList

 **************************************************************************
 **************************************************************************/

import setDataToExtensionStorage from "./setDataToExtensionStorage";
import detectBrowserLanguage     from "./detectBrowserLanguage";
import { onError }               from "./_common";

import {presetsList} from "./darkMode_presets/_presets_list";
import { presets }  from "./darkMode_presets/presets";

// ----------------------------------------------- background variables

let memoryTabId  = '';
let memoryTabUrl = '';
let memoryDomain = '';

let storage = localStorage.state ? JSON.parse(localStorage.state) : false;

// ----------------------------------------------- detect browser current lang

detectBrowserLanguage();

// ----------------------------------------------- check if the current domain exists in the storage


function checkDomainInDomainsList() {

    storage = localStorage.state ? JSON.parse(localStorage.state) : false;

    let state        = storage;
    let isState      = !!state;
    let isDomainList = isState && !!state.domainsList;
    if (isDomainList) {
        let domainsList           = state.domainsList;
        let isDomainInDomainsList = domainsList.includes(memoryDomain);
        if (isDomainInDomainsList) {
            checkDomainScheme();
        }
    }
}


// ----------------------------------------------- check if  any user scheme is in the storage


function checkDomainScheme() {

    let isJsonParseble         = localStorage.state !== undefined;
    let state                  = isJsonParseble && JSON.parse(localStorage.state);
    let domains                = state.domains ? state.domains : false;
    let currentDomainInDomains = domains ? domains[memoryDomain] : false;
    let currentScheme          = currentDomainInDomains ? currentDomainInDomains.currentScheme : false;
    let schemes                = currentDomainInDomains && currentDomainInDomains.schemes ? currentDomainInDomains.schemes : false;

    let currentSchemeInSchemes = schemes && schemes[currentScheme] ? schemes[currentScheme] : false;

    let isFilters_on = currentSchemeInSchemes && !!currentSchemeInSchemes.filters_on;
    let isColors_on  = currentSchemeInSchemes && !!currentSchemeInSchemes.colors_on;
    let isCss_on     = currentSchemeInSchemes && !!currentSchemeInSchemes.css_on;

    let filters = !!currentSchemeInSchemes.filters && currentSchemeInSchemes.filters;
    let colors  = !!currentSchemeInSchemes.colors && currentSchemeInSchemes.colors;
    let css     = !!currentSchemeInSchemes.css && currentSchemeInSchemes.css;

    if (currentSchemeInSchemes) {

        // - - - - - - - - - - - - - - - - - - - - - - darkMode

        if (currentSchemeInSchemes.darkMode) {

            if (presetsList.includes(memoryDomain.toString())){
                sendOneTimeMessageToTab({
                                            darkMode: {
                                                status: true,
                                                style : presets[memoryDomain],
                                                inList: true,
                                            }
                                        });
            } else {
                sendOneTimeMessageToTab({
                                            darkMode: {
                                                status: true,
                                                style : presets.darkMode,
                                                inList: false,
                                            }
                                        });
            }


        }
        else if (!currentSchemeInSchemes.darkMode) {sendOneTimeMessageToTab({darkMode: {status: false}});}

        // - - - - - - - - - - - - - - - - - - - - - - filters

        if (filters) {
            if (isFilters_on) {
                let filtersStyles = `html { filter:
                brightness(${filters.brightness.value})
                contrast(${filters.contrast.value})
                grayscale(${filters.grayscale.value})
                hue-rotate(${(filters.hue.value) * 90}deg)
                invert(${filters.invert.value})
                saturate(${filters.saturate.value})
                sepia(${filters.sepia.value})
                !important; }`;

                sendOneTimeMessageToTab({
                                            filters: {
                                                status: true,
                                                style : filtersStyles
                                            }
                                        });
            }
            if (!isFilters_on) { sendOneTimeMessageToTab({filters: {status: false}});}

        }

        // - - - - - - - - - - - - - - - - - - - - - - colors

        if (colors) {
            if (isColors_on) {
                let colorsStyles = ` 
                a, li,  p, pre, table, tr, h, td, div, input, select, textarea, img, svg  { background-color: transparent !important  }
                h1, h2, h3, h4, h5, h6 { color: ${colors.color_1.value} !important }
                b, cite, em, i, q, small, span, strong, sub, sup, blockquote, div, dl, dt, li, ol, p, pre, ul, input { color: ${colors.color_2.value} !important }
                a { color: ${colors.color_3.value} !important }
                table, tr, h, td { border-color: ${colors.color_3.value} !important }
                html, body { background-color: ${colors.color_4.value} !important }
                header, footer, table, div, input, select, textarea :not(svg) :not(img) { background-color: ${colors.color_5.value} !important }
                table, tr, h, td {border-width: thin !important}
                 
                table, ul, li { background-color: ${colors.color_6.value} !important }
                `;

                sendOneTimeMessageToTab({
                                            colors: {
                                                status: true,
                                                style : colorsStyles
                                            }
                                        });
            }

            if (!isColors_on) { sendOneTimeMessageToTab({colors: {status: false}});}
        }

        // - - - - - - - - - - - - - - - - - - - - - - css

        if (css) {
            if (isCss_on) {
                let cssStyles = `${css.value}`;
                sendOneTimeMessageToTab({
                                            css: {
                                                status: true,
                                                style : cssStyles
                                            }
                                        });
            }

            if (!isCss_on) {sendOneTimeMessageToTab({css: {status: false}});}
        }

    }
    if (!currentSchemeInSchemes) {
        sendOneTimeMessageToTab({
                                    filters : {status: false,},
                                    colors  : {status: false,},
                                    css     : {status: false,},
                                    darkMode: {status: false}
                                });
    }
    if (!currentSchemeInSchemes.darkMode) {sendOneTimeMessageToTab({darkMode: {status: false}});}
    if (!isFilters_on) { sendOneTimeMessageToTab({filters: {status: false}});}
    if (!isColors_on) {sendOneTimeMessageToTab({colors: {status: false}});}
    if (!isCss_on) {sendOneTimeMessageToTab({css: {status: false}}); }
    if (!currentSchemeInSchemes.darkMode) { sendOneTimeMessageToTab({darkMode: {status: false}}); }
}

// ----------------------------------------------- extension storage changes handler

function actionOnStorageChanged(data) {
    checkDomainInDomainsList();
    checkDomainScheme();
}

browser.storage.onChanged.addListener(actionOnStorageChanged);

// ----------------------------------------------- element in background memory getting domain from tabs URL

let a = document.createElement('a');

// ----------------------------------------------- function getting domain from tabs URL

function getDomainFromUrl(url) {
    a.setAttribute('href', url);
    let nextDomain = a.hostname;

    let ignoreEmptyTabCheck    = nextDomain === "about:blank";
    let ignoreEmptyStringCheck = nextDomain.length === 0;
    let ignorePrevDomain       = nextDomain === memoryDomain;

    if (!ignoreEmptyTabCheck && !ignoreEmptyStringCheck) {
        memoryDomain      = nextDomain;
        let currentDomain = {currentDomain: nextDomain};
        setDataToExtensionStorage(currentDomain);

        if (!storage) {
            localStorage.state = JSON.stringify(currentDomain);
        }
        else if (storage && storage.currentDomain) {
            let parse          = JSON.parse(localStorage.state);
            let newDomain      = {
                ...parse,
                currentDomain: nextDomain
            };
            localStorage.state = JSON.stringify(newDomain);
        }

        return a.hostname;
    }
}


// ----------------------------------------------- port to content-script

browser.runtime.onMessage.addListener(request => {
    setDataToExtensionStorage(request.data);
});

// ----------------------------------------------- one-time message to content-script


function sendOneTimeMessageToTab(data) {
    if (memoryTabId.length !== 0) {
        let err;
        browser.tabs.sendMessage(memoryTabId, {data: data})
               .catch(e => {err = e;});
    }
}

// ----------------------------------------------- tab changes handlers


function onInit(tab) { // tab URL an ID on init

    let newDomain;
    memoryTabId  = tab[0].id;
    memoryTabUrl = tab[0].url;

    newDomain = getDomainFromUrl(tab[0].url);
    if (newDomain !== undefined) {
        memoryDomain = newDomain;
    }

}

function onActivated() { // tab ID changed
    getCurrentTabOnInit();

}

function onUpdated(tabId, changeInfo, tabInfo) { // tab URL and ID on changes

    /*
     Handle actions on current tab. Handle if:
     - the tab hasn't changed
     - url has changed
     * changes like loading status, attention and other are not handled
     */

    let newDomain;

    let isEqualPrevId      = tabInfo.id === memoryTabId;
    let isEqualPrevUrl     = tabInfo.url === memoryTabUrl;
    let isChangeInfoIgnore = 'status' in changeInfo;
    let changeStatusLoading = changeInfo.status === 'loading'
    let changeStatusComplete = changeInfo.status === 'complete'

    if (tabInfo.active && isEqualPrevId && isChangeInfoIgnore) {

        if (!isEqualPrevUrl) { // handle tab url changes
            memoryTabId  = tabInfo.id;
            memoryTabUrl = tabInfo.url;
            newDomain    = getDomainFromUrl(tabInfo.url);
            if (newDomain !== undefined) {
                memoryDomain = newDomain;
            }
        }

        if (isEqualPrevUrl && (changeStatusLoading || changeStatusComplete) && localStorage.state !== undefined) {
            checkDomainScheme();
        }
    }
}


// ----------------------------------------------- tab changes listeners

/*
 + tab opened
 + tab changed
 + current domain on init
 + changes in active tab
 */

function getCurrentTabOnInit() { // on extension init
    browser.tabs.query({active: true})
           .then(onInit, onError);
}

browser.tabs.onActivated.addListener(onActivated); // if tab changed
browser.tabs.onUpdated.addListener(onUpdated); // if any changes
