const it = {


    // #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#
    // #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#   MENU  #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#
    // #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#
    menu: {

        // =================================== MENU TOP =====================================

        menu_top: {
            button_donate: 'Dona', // *** translation to Eng: 'Donate'
        },

        // =================================== MENU BOTTOM =====================================

        menu_bottom: {
            left  : 'Filtri',
            middle: 'Colori',
            right : 'CSS-style',
        },
    },


    // #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#
    // #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#  PAGES  #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#
    // #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#

    pages: {


        // =================================== PAGE GREETING =====================================

        page_greeting: {
            title_ru       : 'Выберите язык',
            title_en       : 'Choose your language',
            button_continue: 'Continua',
        },


        // =================================== PAGE MANUAL START =====================================

        page_manual_start: {
            textLine1     : 'Ciao!',
            textLine2     : 'Sono',
            textLine3     : 'ChamelTone',
            textLine4     : '!',
            buttonText    : 'Cominciamo?',
            buttonSkipText: 'Salta il manuale',
        },


        // =================================== PAGE MANUAL =====================================

        page_manual: {

            manual_1: {
                text_1     : 'Filtri anwenden',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',

            },
            manual_2: {
                text_1     : 'Personalizza i colori',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',

            },
            manual_3: {
                text_1     : 'Puoi aggiungere il tuo Stile CSS per qualsiasi sito',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',

            },
            manual_4: {
                text_1     : 'È possibile attivare e disattivare ogni impostazione',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',

            },
            manual_5: {
                text_1     : 'Qui è possibile  fare domande,  suggeriscono un miglioramento  o segnalare un bug',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',

            },
            manual_6: {
                text_1     : 'Puoi anche condividere questa app con i tuoi amici',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',

            },

            manual_7: {
                text_1     : 'Per restituire  alla pagina principale premere il tasto home"".',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',

            },
            manual_8: {
                text_1     : 'Sostieni questo progetto e compra un hamburger  per gli sviluppatori - clicca su \'Dona\',  saremo felici!',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',
                text_button: 'Buon divertimento!',
                text_donate: 'Questa app si evolve grazie al vostro supporto',
            },
        },


        // =================================== PAGE HOME =====================================

        page_home: {
            titles : {
                title_darkMode: 'Modo scuro',
                title_dropDown: 'Temi salvati:',
            },
            modules: {
                module_dropDown: {
                    defaultScheme: 'Tema predefinito',
                    emptyItem    : 'Nessun tema temi temi',
                    newScheme    : 'Nuovo tema',
                },
            },
            buttons: {
                createTheme: 'Creare il tema',
                saveTheme  : 'Salva',
                resetTheme : 'Cancellare',
            },
        },


        // =================================== PAGE FILTERS =====================================


        page_filters: {
            menu: {
                left  : 'Reset',
                middle: 'Annulla',
                right : 'Pronto',
            },

            modules: {
                module_filters: {
                    brightness: {
                        name: 'Luminosità',
                    },
                    contrast  : {
                        name: 'Contrasto',
                    },
                    grayscale : {
                        name: 'Bianco e nero',
                    },
                    sepia     : {
                        name: 'Retrò',
                    },
                    hue       : {
                        name: 'Tinta',
                    },
                    invert    : {
                        name: 'Invertire',
                    },
                    saturate  : {
                        name: 'Saturazione',
                    },
                },
            },
        },


        // =================================== PAGE COLORS =====================================

        page_colors: {
            identifier: 'colors',
            menu      : {
                left  : 'Reset',
                middle: 'Annulla',
                right : 'Pronto',
            },

            modules: {
                module_colors: {
                    color_1: {
                        name: 'Testo#1',
                    },
                    color_2: {
                        name: 'Testo#2',
                    },
                    color_3: {
                        name: 'Testo#3',
                    },
                    color_4: {
                        name: '#4',
                    },
                    color_5: {
                        name: '#5',
                    },
                    color_6: {
                        name: '#6',
                    },
                },
            },
            titles : {
                title: '',
            },
        },


        // =================================== PAGE CSS STYLES =====================================

        page_css_styles: {
            identifier: 'colors',
            menu      : {
                left  : 'Reset',
                middle: 'Annulla',
                right : 'Pronto',
            },

            modules: {
                module_css_styles: {
                    inputPlaceholder: 'Basta copiare il codice CSS  e incolla qui',
                    errorMessage    : 'Sembra che ci sia un errore nel codice ...',
                    validMessage    : 'Nessun errore trovato ...',
                },
            },
        },
    },

    // #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#
    // #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#  MODALS  #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#
    // #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#

    modals: {

        // =================================== MODAL SUPPORT =====================================

        modal_support: {
            descriptions: {
                description_title       : 'СhamelTone',
                description_part_title_1: 'Сhamel',
                description_part_title_2: 'Tone',
                description_middle      : 'Personalizza i colori del sito web.',
                description_last        : 'Facile. Veloce. Carina.',
                description_bottom      : 'Questa app si evolve grazie al vostro supporto',
            },
            title       : 'Contatti:',
            links       : {
                site   : {
                    identifier: 'site',
                    name      : "Sito dell'applicazione:",
                    linkShort : 'garvae.com/chameltone',
                    link      : 'https://www.garvae.com/chameltone',
                },
                socials: {
                    identifier: 'socials',
                    name      : 'Facebook:',
                    linkShort : 'facebook.com/chameltone',
                    link      : 'https://www.facebook.com/groups/chameltone',
                },
                link_3 : {
                    identifier: 'link_3',
                    name      : 'Github',
                    linkShort : 'github.com/garvae/chameltone',
                    link      : 'https://www.github.com/garvae/chameltone',
                },
                email  : {
                    identifier: 'email',
                    name      : 'e-mail',
                    linkShort : 'chameltone@gmail.com',
                    link      : 'chameltone@gmail.com',
                },

            },
            buttons     : {
                button_support: 'Sostienici',
            },

            menu: {
                menu_bottom_close: 'Chiudere',
            },
        },


        // =================================== MODAL DONATE =====================================
        modal_donate: {
            descriptions: {
                description_first : 'Ti piace questa App?',
                description_middle: 'Sostienici!',
            },
            buttons     : {
                button_cancel  : 'Annulla',
                button_redirect: 'Sostienici!',
            },
        },

        // =================================== MODAL DONATE REDIRECT =====================================


        modal_donate_redirect: {
            descriptions: {
                description_first : 'Apprezziamo molto il vostro sostegno!',
                description_middle: '',
                description_last_1: 'Questa app si evolve grazie al vostro supporto',
                description_last_2: '',
                description_bottom: 'Sarai reindirizzato al sito web del servizio donazioni',
            },

            buttons: {
                button_cancel  : 'Annulla',
                button_redirect: 'Sostienici!',
            },
            titles : {
                title_timer: 'Reindirizzamento',
            },
        },

        // =================================== MODAL SHARE =====================================


        modal_share: {
            buttons: {
                button_cancel: 'Annulla',
            },
            titles : {
                title: 'Condividi con gli amici!',
            },
        },

        // =================================== MODAL LANG =====================================

        modal_lang: {
            buttons: {
                button_cancel: 'Annulla',
            },
            titles : {
                title: 'Scegliete la vostra lingua: ',
            },
        },
    },
};

export default it;