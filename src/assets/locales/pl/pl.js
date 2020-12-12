const pl = {


    // #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#
    // #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#   MENU  #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#
    // #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#
    menu: {

        // =================================== MENU TOP =====================================

        menu_top: {
            button_donate: 'Podaruj', // *** translation to Eng: 'Donate'
        },

        // =================================== MENU BOTTOM =====================================

        menu_bottom: {
            left  : 'Filtry',
            middle: 'Kolory',
            right : 'W stylu CSS',
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
            button_continue: 'Kontynuuj',
        },


        // =================================== PAGE MANUAL START =====================================

        page_manual_start: {
            textLine1     : 'Cześć!',
            textLine2     : 'Jestem',
            textLine3     : 'ChamelTone',
            textLine4     : '!',
            buttonText    : 'Zacznijmy?',
            buttonSkipText: 'Pomiń podręcznik',
        },


        // =================================== PAGE MANUAL =====================================

        page_manual: {

            manual_1: {
                text_1     : 'Filtry anwenden',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',

            },
            manual_2: {
                text_1     : 'Dostosowywanie kolorów',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',

            },
            manual_3: {
                text_1     : 'Możesz dodać swój własny Styl CSS dla każdej strony',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',

            },
            manual_4: {
                text_1     : 'Możesz włączać i wyłączać każde ustawienie',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',

            },
            manual_5: {
                text_1     : 'Tutaj możesz  zadawać pytania,  sugerować poprawę  lub zgłosić błąd',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',

            },
            manual_6: {
                text_1     : 'Możesz również podzielić się tą aplikacją ze swoimi przyjaciółmi',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',

            },

            manual_7: {
                text_1     : 'Aby wrócić  do strony głównej wciśnij przycisk home""',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',

            },
            manual_8: {
                text_1     : 'Wspieraj ten projekt i kup burgera dla programistów - kliknij Oddaj", Będziemy szczęśliwi!" ',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',
                text_button: 'Bawcie się dobrze!',
                text_donate: 'Ta aplikacja rozwija się dzięki waszemu wsparciu',
            },
        },


        // =================================== PAGE HOME =====================================

        page_home: {
            titles : {
                title_darkMode: 'Tryb ciemny',
                title_dropDown: 'Zapisane tematy:',
            },
            modules: {
                module_dropDown: {
                    defaultScheme: 'Temat domyślny',
                    emptyItem    : 'Brak tematów',
                    newScheme    : 'Nowy temat',
                },
            },
            buttons: {
                createTheme: 'Stwórz temat',
                saveTheme  : 'Zapisz',
                resetTheme : 'Skreślić',
            },
        },


        // =================================== PAGE FILTERS =====================================


        page_filters: {
            menu: {
                left  : 'Zresetować',
                middle: 'Anuluj',
                right : 'Gotowy',
            },

            modules: {
                module_filters: {
                    brightness: {
                        name: 'Jasność',
                    },
                    contrast  : {
                        name: 'Kontrast',
                    },
                    grayscale : {
                        name: 'Czarno-biały',
                    },
                    sepia     : {
                        name: 'Retro',
                    },
                    hue       : {
                        name: 'Tint',
                    },
                    invert    : {
                        name: 'Odwróć',
                    },
                    saturate  : {
                        name: 'Nasycenie',
                    },
                },
            },
        },


        // =================================== PAGE COLORS =====================================

        page_colors: {
            identifier: 'colors',
            menu      : {
                left  : 'Zresetować',
                middle: 'Anuluj',
                right : 'Gotowy',
            },

            modules: {
                module_colors: {
                    color_1: {
                        name: 'Tekst#1',
                    },
                    color_2: {
                        name: 'Tekst#2',
                    },
                    color_3: {
                        name: 'Tekst#3',
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
                left  : 'Zresetować',
                middle: 'Anuluj',
                right : 'Gotowy',
            },

            modules: {
                module_css_styles: {
                    inputPlaceholder: 'Po prostu skopiuj kod CSS  i wkleić tutaj',
                    errorMessage    : 'Wygląda na to, że w kodzie jest błąd...',
                    validMessage    : 'Nie znaleziono żadnych błędów...',
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
                description_middle      : 'Dostosuj dowolny kolor strony internetowej.',
                description_last        : 'Spokojnie. Szybko. Ładnie.',
                description_bottom      : 'Ta aplikacja rozwija się dzięki waszemu wsparciu',
            },
            title       : 'Kontakty:',
            links       : {
                site   : {
                    identifier: 'site',
                    name      : 'Strona aplikacji:',
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
                button_support: 'Wspieraj nas',
            },

            menu: {
                menu_bottom_close: 'Close',
            },
        },


        // =================================== MODAL DONATE =====================================
        modal_donate: {
            descriptions: {
                description_first : 'Podoba ci się ta aplikacja?',
                description_middle: 'Wspieraj nas!',
            },
            buttons     : {
                button_cancel  : 'Anuluj',
                button_redirect: 'Wspieraj nas!',
            },
        },

        // =================================== MODAL DONATE REDIRECT =====================================


        modal_donate_redirect: {
            descriptions: {
                description_first : 'Bardzo doceniamy wasze wsparcie!',
                description_middle: '',
                description_last_1: 'Ta aplikacja rozwija się dzięki waszemu wsparciu',
                description_last_2: '',
                description_bottom: 'Zostaniesz przekierowany na stronę internetową serwisu dotacyjnego',
            },

            buttons: {
                button_cancel  : 'Anuluj',
                button_redirect: 'Wspieraj nas!',
            },
            titles : {
                title_timer: 'Przekierowanie',
            },
        },

        // =================================== MODAL SHARE =====================================


        modal_share: {
            buttons: {
                button_cancel: 'Anuluj',
            },
            titles : {
                title: 'Podziel się z przyjaciółmi!',
            },
        },

        // =================================== MODAL LANG =====================================

        modal_lang: {
            buttons: {
                button_cancel: 'Anuluj',
            },
            titles : {
                title: 'Wybierz swój język: ',
            },
        },
    },
};

export default pl;