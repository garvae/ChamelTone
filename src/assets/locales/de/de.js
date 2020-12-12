const de = {


    // #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#
    // #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#   MENU  #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#
    // #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#
    menu: {

        // =================================== MENU TOP =====================================

        menu_top: {
            button_donate: 'Spenden', // *** translation to Eng: 'Donate'
        },

        // =================================== MENU BOTTOM =====================================

        menu_bottom: {
            left  : 'Filter',
            middle: 'Farben',
            right : 'CSS-Stil',
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
            button_continue: 'Weiter',
        },


        // =================================== PAGE MANUAL START =====================================

        page_manual_start: {
            textLine1     : 'Hallo!',
            textLine2     : 'Ich bin',
            textLine3     : 'ChamelTone',
            textLine4     : '!',
            buttonText    : 'Fangen wir an?',
            buttonSkipText: 'Handbuch überspringen',
        },


        // =================================== PAGE MANUAL =====================================

        page_manual: {

            manual_1: {
                text_1     : 'Filter anwenden',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',

            },
            manual_2: {
                text_1     : 'Anpassen von Farben',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',

            },
            manual_3: {
                text_1     : 'Sie können hinzufügen Ihre eigenen CSS-Stil für jeden Standort',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',

            },
            manual_4: {
                text_1     : 'Sie können jede Einstellung ein- und ausschalten',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',

            },
            manual_5: {
                text_1     : 'Hier können Sie Fragen stellen, Verbesserung vorschlagen oder einen Fehler melden',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',

            },
            manual_6: {
                text_1     : 'Sie können diese App auch mit Ihren Freunden teilen',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',

            },

            manual_7: {
                text_1     : 'Zurückkehren zur Hauptseite drücken Sie den \'Home\'-Knopf',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',

            },
            manual_8: {
                text_1     : 'Unterstützen Sie dieses Projekt und kaufen Sie einen Burger für die Entwickler - klicken Sie auf \'Spenden\',  wir werden glücklich sein!',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',
                text_button: 'Viel Spaß!',
                text_donate: 'Diese App entwickelt sich dank Ihrer Unterstützung',
            },
        },


        // =================================== PAGE HOME =====================================

        page_home: {
            titles : {
                title_darkMode: 'Dunkler Modus',
                title_dropDown: 'Gespeicherte Themen:',
            },
            modules: {
                module_dropDown: {
                    defaultScheme: 'Standard-Thema',
                    emptyItem    : 'Keine Themen Themen',
                    newScheme    : 'Neues Thema',
                },
            },
            buttons: {
                createTheme: 'Thema erstellen',
                saveTheme  : 'Speichern',
                resetTheme : 'löschen',
            },
        },


        // =================================== PAGE FILTERS =====================================


        page_filters: {
            menu: {
                left  : 'Zurücksetzen',
                middle: 'Abbrechen',
                right : 'Bereit',
            },

            modules: {
                module_filters: {
                    brightness: {
                        name: 'Helligkeit',
                    },
                    contrast  : {
                        name: 'Kontrast',
                    },
                    grayscale : {
                        name: 'Schwarz-Weiß',
                    },
                    sepia     : {
                        name: 'Retro',
                    },
                    hue       : {
                        name: 'Farbton',
                    },
                    invert    : {
                        name: 'Umkehren',
                    },
                    saturate  : {
                        name: 'Sättigung',
                    },
                },
            },
        },


        // =================================== PAGE COLORS =====================================

        page_colors: {
            identifier: 'colors',
            menu      : {
                left  : 'Zurücksetzen',
                middle: 'Abbrechen',
                right : 'Bereit',
            },

            modules: {
                module_colors: {
                    color_1: {
                        name: 'Text#1',
                    },
                    color_2: {
                        name: 'Text#2',
                    },
                    color_3: {
                        name: 'Text#3',
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
                left  : 'Zurücksetzen',
                middle: 'Abbrechen',
                right : 'Bereit',
            },

            modules: {
                module_css_styles: {
                    inputPlaceholder: 'Kopieren Sie einfach den CSS-Code und hier einfügen',
                    errorMessage    : 'Es sieht so aus, als ob es einen Fehler im Code gibt ...',
                    validMessage    : 'Keine Fehler gefunden ...',
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
                description_middle      : 'Pas de kleuren van de website aan.',
                description_last        : 'Einfach. Schnell. Hübsch.',
                description_bottom      : 'Diese App entwickelt sich dank Ihrer Unterstützung',
            },
            title       : 'Kontaktpersonen:',
            links       : {
                site   : {
                    identifier: 'site',
                    name      : 'Website der App:',
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
                button_support: 'Unterstützen Sie uns',
            },

            menu: {
                menu_bottom_close: 'schließen',
            },
        },


        // =================================== MODAL DONATE =====================================
        modal_donate: {
            descriptions: {
                description_first : 'Genießen Sie diese App?',
                description_middle: 'Unterstützen Sie uns!',
            },
            buttons     : {
                button_cancel  : 'Abbrechen',
                button_redirect: 'Unterstützen Sie uns!',
            },
        },

        // =================================== MODAL DONATE REDIRECT =====================================


        modal_donate_redirect: {
            descriptions: {
                description_first : 'Wir wissen Ihre Unterstützung sehr zu schätzen!',
                description_middle: '',
                description_last_1: 'Diese App entwickelt sich dank Ihrer Unterstützung',
                description_last_2: '',
                description_bottom: 'U wordt doorgestuurd naar de website van de donatieservice',
            },

            buttons: {
                button_cancel  : 'Abbrechen',
                button_redirect: 'Spenden Sie jetzt!',
            },
            titles : {
                title_timer: 'Omleiding',
            },
        },

        // =================================== MODAL SHARE =====================================


        modal_share: {
            buttons: {
                button_cancel: 'Abbrechen',
            },
            titles : {
                title: 'Mit Freunden teilen!',
            },
        },

        // =================================== MODAL LANG =====================================

        modal_lang: {
            buttons: {
                button_cancel: 'Abbrechen',
            },
            titles : {
                title: 'Wählen Sie Ihre Sprache: ',
            },
        },
    },
};

export default de;