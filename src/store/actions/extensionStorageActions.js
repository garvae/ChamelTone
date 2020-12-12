
//========================= STATE INIT =====================================

export const initFirstLaunch = (data) => ({
    type   : "INIT_LAUNCH",
    payload: data
});

export const initLanguage = (data) => ({
    type   : "INIT_LANGUAGE",
    payload: data
});

export const initState = (data) => ({
    type   : "INIT_STATE",
    payload: data
});

export const initStateFirst = (data) => ({
    type   : "INIT_STATE_FIRST",
    domains: data.domains,
    domainsList: data.domainsList
});

//========================= SHOW MODALS =====================================



export const showModalDonate = (data) => ({
    type   : "SHOW_MODAL_DONATE",
    payload: data
});



export const showModalDonateRedirect = (data) => ({
    type   : "SHOW_MODAL_DONATE_REDIRECT",
    payload: data
});

export const showModalSupport = (data) => ({
    type   : "SHOW_MODAL_SUPPORT",
    payload: data
});

export const showModalShare = (data) => ({
    type   : "SHOW_MODAL_SHARE",
    payload: data
});

export const showBackDark = (data) => ({
    type   : "SHOW_BACK_DARK",
    payload: data
});

export const resetModals = () => ({
    type   : "RESET_MODALS",
});

//========================= SET =====================================


export const setManualDone = (data) => ({
    type   : "SET_MANUAL_DONE",
    payload: data
});

export const setTopMenuOptions = (data) => ({
    type   : "SET_TOP_MENU_OPTIONS",
    payload: data
});

export const setCurrentPage = (data) => ({
    type   : "SET_CURRENT_PAGE",
    payload: data
});


export const setCurrentDomain = (data) => ({
    type   : "SET_CURRENT_DOMAIN",
    payload: data
});


export const setCurrentScheme = (newCurrentSchemeKey, currentDomain) => ({
    type               : "SET_CURRENT_SCHEME",
    currentScheme: newCurrentSchemeKey,
    currentDomain      : currentDomain,
});


export const setCheckbox = (currentDomain, currentScheme, option, newValue) => ({
    type         : "SET_CHECKBOX",
    currentDomain: currentDomain,
    currentScheme: currentScheme,
    option       : option,
    newValue     : newValue,
});

export const setDarkMode = (currentDomain, currentScheme, newValue) => ({
    type         : "SET_DARK_MODE",
    currentDomain: currentDomain,
    currentScheme: currentScheme,
    newValue     : newValue,
});


export const setNewSchemeName = (currentScheme, newSchemeName, currentDomain) => ({
    type         : "SET_NEW_SCHEME_NAME",
    currentScheme: currentScheme,
    newSchemeName: newSchemeName,
    currentDomain: currentDomain,
});

export const setNewFilterValue = (currentDomain, currentScheme, filterName, newValue) => ({
    type         : "SET_NEW_FILTER_VALUE",
    currentDomain: currentDomain,
    currentScheme: currentScheme,
    filterName   : filterName,
    newValue     : newValue,
});

export const setFiltersDefaults = (currentDomain, currentScheme, newValue) => ({
    type         : "SET_FILTERS_DEFAULTS",
    currentDomain: currentDomain,
    currentScheme: currentScheme,
    newValue     : newValue,
});

export const setNewColorValue = (currentDomain, currentScheme, activeColor, newValue) => ({
    type         : "SET_NEW_COLOR_VALUE",
    currentDomain: currentDomain,
    currentScheme: currentScheme,
    activeColor  : activeColor,
    newValue     : newValue,
});

export const setCurrentActiveColor = (currentDomain, currentScheme, newValue) => ({
    type         : "SET_CURRENT_ACTIVE_COLOR",
    currentDomain: currentDomain,
    currentScheme: currentScheme,
    newValue     : newValue,
});


export const setColorsDefaults = (currentDomain, currentScheme) => ({
    type         : "SET_COLORS_DEFAULTS",
    currentDomain: currentDomain,
    currentScheme: currentScheme,
});

export const setColorsReset = (currentDomain, currentScheme, newValue) => ({
    type         : "SET_COLORS_RESET",
    currentDomain: currentDomain,
    currentScheme: currentScheme,
    newValue     : newValue,
});

export const setCssReset = (currentDomain, currentScheme, newValue) => ({
    type         : "SET_CSS_RESET",
    currentDomain: currentDomain,
    currentScheme: currentScheme,
    newValue     : newValue,
});

export const setCurrentCssCode = (currentDomain, currentScheme, newValue) => ({
    type         : "SET_CURRENT_CSS_CODE",
    currentDomain: currentDomain,
    currentScheme: currentScheme,
    newValue     : newValue,
});

export const setDarkModeDefaults = (newSchemeKey, currentDomain) => ({
    type         : "SET_DARK_MODE_DEFAULTS",
    currentScheme : newSchemeKey,
    currentDomain: currentDomain,
});

//========================= REMOVE =====================================

export const removeCurrentScheme = (currentScheme, defaultSchemeKey, currentDomain) => ({
    type            : "REMOVE_CURRENT_SCHEME",
    currentScheme   : currentScheme,
    currentDomain   : currentDomain,
    defaultSchemeKey: defaultSchemeKey,
});

//========================= ADD =====================================


export const addNewDomain = (data) => ({
    type   : "ADD_NEW_DOMAIN",
    payload: data
});

export const addNewScheme = (newSchemeKey, newSchemeName, currentDomain) => ({
    type         : "ADD_NEW_SCHEME",
    newSchemeName: newSchemeName,
    currentScheme : newSchemeKey,
    currentDomain: currentDomain,
});


//======================================================================