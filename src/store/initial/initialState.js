

export const initUserStorage = {
    domains    : {},
    domainsList: [],
    routes     : {
        currentPage: '',
        showModals : {
            showModalDonate        : false,
            showModalDonateRedirect: false,
            showModalShare         : false,
            showModalSupport       : false,
            showBackDark           : false,
        }
    }
};

export const initSchemesDefaults = {
    darkMode  : false,
    filters_on: false,
    colors_on : false,
    css_on    : false,

};

export const initCssDefaults = {
    cssReset: false,
    value   : '',
};

export const initDomainDefaults = {
    schemesNames : {
        'default': 'Default',
    },
    currentScheme: 'default',
};

export const initColorsDefaults = {
    activeColor: 'color_1',
    colorsReset: false,
    color_1    : {
        value     : '#111111',
        identifier: 'color_1'
    },
    color_2    : {
        value     : '#333333',
        identifier: 'color_2'
    },
    color_3    : {
        value     : '#666666',
        identifier: 'color_3'
    },
    color_4    : {
        value     : '#ffffff',
        identifier: 'color_4'
    },
    color_5    : {
        value     : '#ffffff',
        identifier: 'color_5'
    },
    color_6    : {
        value     : '#ffffff',
        identifier: 'color_6'
    },
};

export const initFiltersDefaults = {
    filtersReset: false,
    brightness  : {
        value: 1,
    },
    contrast    : {
        value: 1,
    },
    grayscale   : {
        value: 0,
    },
    sepia       : {
        value: 0,
    },
    hue         : {
        value: 0,
    },
    invert      : {
        value: 0,
    },
    saturate    : {
        value: 1,
    },
};