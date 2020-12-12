import produce from "immer";
import {
    initDomainDefaults, initSchemesDefaults, initColorsDefaults, initFiltersDefaults, initCssDefaults, initUserStorage
}              from "../initial/initialState";

export default function extensionStorageReducer(state = {}, action) {

    //========================= HELPERS =====================================

    function initRoutes(draftState) {
        if (!draftState.routes) {
            draftState.routes = {};
            draftState.routes = initUserStorage.routes;
            return true;
        }
        else {
            return true;
        }
    }


    function initSchemes(draftState) {
        if (!draftState.domains[action.currentDomain].schemes) {
            draftState.domains[action.currentDomain]['schemes']                    = {};
            draftState.domains[action.currentDomain].schemes[action.currentScheme] = initSchemesDefaults;
            return true;
        }
        else if (!draftState.domains[action.currentDomain].schemes[action.currentScheme]) {
            draftState.domains[action.currentDomain].schemes[action.currentScheme] = initSchemesDefaults;
            return true;
        }
        else {
            return true;
        }
    }

    function initFilters(draftState) {
        if (!draftState.domains[action.currentDomain].schemes[action.currentScheme].filters) {
            draftState.domains[action.currentDomain].schemes[action.currentScheme]['filters'] = {};
            draftState.domains[action.currentDomain].schemes[action.currentScheme].filters    = initFiltersDefaults;
            return true;
        }
        else {
            return true;
        }
    }

    function initColors(draftState) {
        if (!draftState.domains[action.currentDomain].schemes[action.currentScheme].colors) {
            draftState.domains[action.currentDomain].schemes[action.currentScheme]['colors'] = {};
            draftState.domains[action.currentDomain].schemes[action.currentScheme].colors    = initColorsDefaults;
            return true;
        }
        else {
            return true;
        }
    }

    function initCss(draftState) {
        if (!draftState.domains[action.currentDomain].schemes[action.currentScheme].css) {
            draftState.domains[action.currentDomain].schemes[action.currentScheme]['css'] = {};
            draftState.domains[action.currentDomain].schemes[action.currentScheme].css    = initCssDefaults;
            return true;
        }
        else {
            return true;
        }
    }


    //=====================================================================

    //========================= CASES =====================================

    switch (action.type) {



        //========================= STATE INIT =====================================

        case "INIT_LAUNCH":
            return produce(state, draftState => {
                draftState.firstLaunch = action.payload;
            });

        case "INIT_LANGUAGE":
            return produce(state, draftState => {
                draftState.userLanguage = action.payload;
            });

        case "INIT_STATE":
            return produce(state, draftState => {
                return {...draftState, ...action.payload};
            });

        case "INIT_STATE_FIRST":
            return produce(state, draftState => {
                draftState.domains     = action.domains;
                draftState.domainsList = action.domainsList;
            });


        //========================= SHOW MODALS =====================================

        case "RESET_MODALS":
            return produce(state, draftState => {
                draftState.routes.showModals = initUserStorage.routes.showModals;
            });

        case "SHOW_MODAL_DONATE":
            return produce(state, draftState => {
                draftState.routes.showModals.showModalDonate = action.payload;
            });

        case "SHOW_MODAL_DONATE_REDIRECT":
            return produce(state, draftState => {
                draftState.routes.showModals.showModalDonateRedirect = action.payload;
            });

        case "SHOW_MODAL_SUPPORT":
            return produce(state, draftState => {
                draftState.routes.showModals.showModalSupport = action.payload;
            });

        case "SHOW_MODAL_SHARE":
            return produce(state, draftState => {
                draftState.routes.showModals.showModalShare = action.payload;
            });

        case "SHOW_BACK_DARK":
            return produce(state, draftState => {
                draftState.routes.showModals.showBackDark = action.payload;
            });


        //========================= SET =====================================


        case "SET_CURRENT_PAGE":
            return produce(state, draftState => {
                if (initRoutes(draftState)) {
                    draftState.routes.currentPage = action.payload;
                }
            });

        case "SET_CURRENT_DOMAIN":
            return produce(state, draftState => {
                draftState.currentDomain = action.payload;
                draftState.domainsList.push(action.payload);
            });

        case "SET_CURRENT_SCHEME":
            return produce(state, draftState => {
                draftState.domains[action.currentDomain].currentScheme = action.currentScheme;
            });


        case "SET_CHECKBOX":
            return produce(state, draftState => {
                if (initSchemes(draftState)) {
                    draftState.domains[action.currentDomain].schemes[action.currentScheme][action.option] = action.newValue;
                }
            });

        case "SET_DARK_MODE":
            return produce(state, draftState => {
                if (initSchemes(draftState)) {
                    draftState.domains[action.currentDomain].schemes[action.currentScheme].darkMode = action.newValue;
                }
            });

        case "SET_NEW_SCHEME_NAME":
            return produce(state, draftState => {
                draftState.domains[action.currentDomain].schemesNames[action.currentScheme] = action.newSchemeName;
            });


        case "SET_MANUAL_DONE":
            return produce(state, draftState => {
                draftState.userManualDone = action.payload;
            });

        case "SET_TOP_MENU_OPTIONS":
            return produce(state, draftState => {
                draftState.topMenuOptions = action.payload;
            });


        case "SET_NEW_FILTER_VALUE":
            return produce(state, draftState => {
                if (initSchemes(draftState) && initFilters(draftState)) {
                    draftState.domains[action.currentDomain].schemes[action.currentScheme].filters[action.filterName].value = action.newValue;
                }
            });


        case "SET_FILTERS_DEFAULTS":
            return produce(state, draftState => {
                if (initSchemes(draftState) && initFilters(draftState)) {
                    draftState.domains[action.currentDomain].schemes[action.currentScheme].filters.filtersReset = action.newValue;
                }
            });


        case "SET_NEW_COLOR_VALUE":
            return produce(state, draftState => {
                if (initSchemes(draftState) && initColors(draftState)) {
                    draftState.domains[action.currentDomain].schemes[action.currentScheme].colors[action.activeColor].value = action.newValue;
                }
            });

        case "SET_COLORS_DEFAULTS":
            return produce(state, draftState => {
                if (initSchemes(draftState) && initColors(draftState)) {
                    draftState.domains[action.currentDomain].schemes[action.currentScheme].colors = initColorsDefaults;
                }
            });

        case "SET_COLORS_RESET":
            return produce(state, draftState => {
                if (initSchemes(draftState) && initColors(draftState)) {
                    draftState.domains[action.currentDomain].schemes[action.currentScheme].colors.colorsReset = action.newValue;
                }
            });

        case "SET_CURRENT_ACTIVE_COLOR":
            return produce(state, draftState => {
                if (initSchemes(draftState) && initColors(draftState)) {
                    draftState.domains[action.currentDomain].schemes[action.currentScheme].colors.activeColor = action.newValue;
                }
            });

        case "SET_CURRENT_CSS_CODE":
            return produce(state, draftState => {
                if (initSchemes(draftState) && initCss(draftState)) {
                    draftState.domains[action.currentDomain].schemes[action.currentScheme].css.value = action.newValue;
                }
            });

        case "SET_CSS_RESET":
            return produce(state, draftState => {
                if (initSchemes(draftState) && initColors(draftState)) {
                    draftState.domains[action.currentDomain].schemes[action.currentScheme].css.cssReset = action.newValue;
                    draftState.domains[action.currentDomain].schemes[action.currentScheme].css.value    = '';
                }
            });

        case "SET_DARK_MODE_DEFAULTS":
            return produce(state, draftState => {
                if (initSchemes(draftState)) {
                    draftState.domains[action.currentDomain].schemes[action.currentScheme].darkMode = false;
                }
            });

        //========================= REMOVE =====================================


        case "REMOVE_CURRENT_SCHEME":
            return produce(state, draftState => {
                draftState.domains[action.currentDomain].currentScheme = action.defaultSchemeKey;
                delete draftState.domains[action.currentDomain].schemesNames[action.currentScheme];
                if (draftState.domains[action.currentDomain].schemes &&
                    draftState.domains[action.currentDomain].schemes[action.currentScheme]
                ) {
                    delete draftState.domains[action.currentDomain].schemes[action.currentScheme];
                }

            });

        //========================= ADD  =====================================


        case "ADD_NEW_DOMAIN":
            return produce(state, draftState => {
                draftState.domains[action.payload] = initDomainDefaults;
            });


        case "ADD_NEW_SCHEME":
            return produce(state, draftState => {
                draftState.domains[action.currentDomain].schemesNames[action.currentScheme] = action.newSchemeName;
            });



        //========================= DEFAULT =====================================

        default:
            return state;
    }
}




