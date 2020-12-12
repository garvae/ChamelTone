import React, { Suspense, useState, useEffect } from "react";
import store                                    from "../../../store/store";
import { Provider }                             from "react-redux";
import { initUserStorage }                      from "../../../store/initial/initialState";
import ContainerPopup                           from "./ContainerPopup";
import { LanguageContext }                      from "../../../store/context/appContext";
import { locales }                              from "../../../assets/locales";
import {
    initFirstLaunch,
    initLanguage,
    initState,
    initStateFirst,
    resetModals,
    setCurrentDomain,
    setCurrentPage,
    setManualDone,
    setTopMenuOptions
}                                               from "../../../store/actions/extensionStorageActions";

export default function App() {

    const initLang                              = locales.en;
    const [loadingStatus, setLoadingStatus]     = useState(true);
    const [currentLanguage, setCurrentLanguage] = useState(initLang);

    // ============================== INIT APP =======================

    function onError(error) {console.error(error);}

    function isEmpty(obj) {
        for (let key in obj) {if (obj.hasOwnProperty(key)) {return false;}}
        return true;
    }


    async function initApp() {
        const result = await browser.storage.local.get();

        if (!isEmpty(result.domains)) {
            store.dispatch(initState(result));
            store.dispatch(setTopMenuOptions(''));
            if (result.firstLaunch === false) {
                store.dispatch(setCurrentPage('home'));
                store.dispatch(resetModals());
                store.dispatch(initLanguage(result.userLanguage));
                let language = locales[result.userLanguage];
                setCurrentLanguage(language);
            }
            return result;
        }
        else {
            store.dispatch(initStateFirst(initUserStorage));
            store.dispatch(initFirstLaunch(true));
            store.dispatch(initLanguage('en'));
            store.dispatch(setManualDone(false));

            browser.storage.local.set(initUserStorage)
                   .then(null, onError);
            return result;
        }
    }


    // ============================== SYNC CURRENT DOMAIN ================================

    async function checkDomain(data) {

        let appStore = store.getState();

        if (data.currentDomain && (data.currentDomain !== appStore.currentDomain)) {
            store.dispatch(setCurrentDomain(data.currentDomain));
            return data;
        }
        else {
            return data;
        }
    }

    // ============================== REMOVE LOADING STATUS =======================

    async function removeLoadingStatus(data) {
        setLoadingStatus(false);
        return data;
    }

    // ============================== SUBSCRIBE STORE CHANGES =======================


    async function storeSubscription(data) {


        store.subscribe((() => {
            let state              = store.getState();
            let newStorage         = state.state;
            let newCurrentLanguage = state.state.userLanguage;
            let language           = locales[newCurrentLanguage];

            setCurrentLanguage(language);


            /*
             ***********************************************************************************************
             // copy state to browser storage for keep more safety
             https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage/local

             "...it is recommended that you don't use Window.localStorage in extension code. Firefox will clear data
             stored by extensions using the localStorage API in various scenarios where users clear their browsing
             history and data for privacy reasons, while data saved using the storage.local API will be correctly
             persisted in these scenarios."
             ***********************************************************************************************
             */

            browser.storage.local.set(newStorage)
                   .then(null, onError);


            // copy of state in localStorage for access from background page

            localStorage.state = JSON.stringify(newStorage);


        }));

        return data;
    }

    // ============================== SUBSCRIBE DOMAIN CHANGES =======================


    function actionOnStorageChanged(data) {
        if (data.currentDomain && (data.currentDomain.oldValue !== data.currentDomain.newValue)) {
            store.dispatch(setCurrentDomain(data.currentDomain.newValue));
        }
    }

    browser.storage.onChanged.addListener(actionOnStorageChanged);


    // ============================== SIDE EFFECTS ================================

    function onExit() {
        browser.storage.onChanged.removeListener(actionOnStorageChanged);
    }

    useEffect(() => {

        initApp()
            .then(checkDomain)
            .then(storeSubscription)
            .then(removeLoadingStatus);

        return onExit();

    }, []);


    return (
        <Suspense fallback={<h1>Loading data...</h1>}>
            {!loadingStatus && <Provider store={store}>
                <LanguageContext.Provider value={currentLanguage}>
                    <ContainerPopup />
                </LanguageContext.Provider>
            </Provider>}
        </Suspense>
    );
}
