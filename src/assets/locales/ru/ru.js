const ru = {


    // #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#
    // #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#   MENU  #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#
    // #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#
    menu: {

        // =================================== MENU TOP =====================================

        menu_top: {
            button_donate: 'Спасибо', // *** translation to Eng: 'Donate'
        },

        // =================================== MENU BOTTOM =====================================

        menu_bottom: {
            left  : 'Фильтры',
            middle: 'Цвета',
            right : 'CSS-стиль',
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
            button_continue: 'Продолжить',
        },


        // =================================== PAGE MANUAL START =====================================

        page_manual_start: {
            textLine1     : 'Привет!',
            textLine2     : 'Я',
            textLine3     : 'ChamelTone',
            textLine4     : '!',
            buttonText    : 'Начнем?',
            buttonSkipText: 'Пропустить обучение',
        },


        // =================================== PAGE MANUAL =====================================

        page_manual: {

            manual_1: {
                text_1     : 'Добавьте фильтры',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',

            },
            manual_2: {
                text_1     : 'Выберите цвета',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',

            },
            manual_3: {
                text_1     : 'Можно добавить собственный \n' +
                    'стиль CSS \n' +
                    'для любого сайта.\n' +
                    '\n' +
                    'Только тсс',
                textColor_1: 'сss',
                text_2     : 'sss...',
                textColor_2: '',

            },
            manual_4: {
                text_1     : 'Вы можете \n' +
                    'включать \n' +
                    'каждую настройку \n' +
                    'отдельно',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',

            },
            manual_5: {
                text_1     : 'Что-то спросить,\n' +
                    'предложить улучшение\n' +
                    'или сообщить\n' +
                    'об ошибке\n' +
                    'можно здесь',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',

            },
            manual_6: {
                text_1     : 'А еще...\n' +
                    '\n' +
                    'можно поделиться\n' +
                    'с друзьями\n' +
                    'и у них тоже',
                textColor_1: 'всё',
                text_2     : 'будет красиво!',
                textColor_2: '',

            },

            manual_7: {
                text_1     : 'Чтобы вернуться\n' +
                    'на главную\n' +
                    'жмите ‘',
                textColor_1: 'домик',
                text_2     : '’',
                textColor_2: '',

            },
            manual_8: {
                text_1     : 'Поддержите проект \n' +
                    '- купите автору\n' +
                    'картошку фри :)\n' +
                    'Нажимайте\n' +
                    '‘',
                textColor_1: 'Спасибо',
                text_2     : '’,\n' +
                    'автор будет \n в восторге!',
                textColor_2: '',
                text_button: 'Наслаждайтесь!',
                text_donate: 'Проект существует благодаря Вашей поддержке',
            },
        },


        // =================================== PAGE HOME =====================================

        page_home: {
            titles : {
                title_darkMode: 'Темная тема',
                title_dropDown: 'Сохраненные темы:',
            },
            modules: {
                module_dropDown: {
                    defaultScheme: 'Тема по умолчанию',
                    emptyItem    : 'Нет сохраненных тем',
                    newScheme    : 'Новая тема',
                },
            },
            buttons: {
                createTheme: 'Создать тему',
                saveTheme  : 'Сохранить',
                resetTheme : 'Удалить',
            },
        },


        // =================================== PAGE FILTERS =====================================


        page_filters: {
            menu: {
                left  : 'Сбросить',
                middle: 'Отмена',
                right : 'Готово',
            },

            modules: {
                module_filters: {
                    brightness: {
                        name: 'Яркость',
                    },
                    contrast  : {
                        name: 'Контраст',
                    },
                    grayscale : {
                        name: 'Черно-Белый',
                    },
                    sepia     : {
                        name: 'Ретро',
                    },
                    hue       : {
                        name: 'Оттенок',
                    },
                    invert    : {
                        name: 'Инверсия',
                    },
                    saturate  : {
                        name: 'Насыщенность',
                    },
                },
            },
        },


        // =================================== PAGE COLORS =====================================

        page_colors: {
            identifier: 'colors',
            menu      : {
                left  : 'Сбросить',
                middle: 'Отмена',
                right : 'Готово',
            },

            modules: {
                module_colors: {
                    color_1: {
                        name: 'Текст',
                    },
                    color_2: {
                        name: 'Текст',
                    },
                    color_3: {
                        name: 'Текст',
                    },
                    color_4: {
                        name: 'Фон',
                    },
                    color_5: {
                        name: 'Фон',
                    },
                    color_6: {
                        name: 'Фон',
                    },
                },
            },
            titles : {
                title: 'Выберите параметр',
            },
        },


        // =================================== PAGE CSS STYLES =====================================

        page_css_styles: {
            identifier: 'colors',
            menu      : {
                left  : 'Сбросить',
                middle: 'Отмена',
                right : 'Готово',
            },

            modules: {
                module_css_styles: {
                    inputPlaceholder: 'Просто скопируйте код CSS и вставьте сюда',
                    errorMessage    : 'Похоже, в коде ошибка...',
                    validMessage    : 'Ошибок не обнаружено...',
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
                description_middle      : 'Меняй темы любых сайтов',
                description_last        : 'Просто. Быстро. Удобно.',
                description_bottom      : 'Проект существует благодаря Вам',
            },
            title       : 'Обратная связь:',
            links       : {
                site   : {
                    identifier: 'site',
                    name      : 'Сайт расширения',
                    linkShort : 'garvae.com/chameltone',
                    link      : 'https://www.garvae.com/chameltone',
                },
                socials: {
                    identifier: 'socials',
                    name      : 'Группа вконтакте',
                    linkShort : 'vk.com/chameltone',
                    link      : 'https://www.vk.com/chameltone',
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
                button_support: 'Поддержите нас',
            },

            menu: {
                menu_bottom_close: 'Закрыть',
            },
        },


        // =================================== MODAL DONATE =====================================
        modal_donate: {
            descriptions: {
                description_first : 'Понравилось расширение?',
                description_middle: 'Поддержите нас!',
            },
            buttons     : {
                button_cancel  : 'Отмена',
                button_redirect: 'Поддержать проект',
            },
        },

        // =================================== MODAL DONATE REDIRECT =====================================


        modal_donate_redirect: {
            descriptions: {
                description_first : 'Спасибо',
                description_middle: 'за Вашу поддержку!',
                description_last_1: 'Проект существует',
                description_last_2: 'благодаря Вам!',
                description_bottom: 'Направляем на страницу сервиса, \n' +
                    'где Вы сможете пожертвовать любую сумму',
            },

            buttons: {
                button_cancel  : 'Отмена',
                button_redirect: 'Перейти сейчас...',
            },
            titles : {
                title_timer: 'Переход через',
            },
        },

        // =================================== MODAL SHARE =====================================


        modal_share: {
            buttons: {
                button_cancel: 'Отмена',
            },
            titles : {
                title: 'Поделитесь с друзьями!',
            },
        },

        // =================================== MODAL LANG =====================================

        modal_lang: {
            buttons: {
                button_cancel: 'Отмена',
            },
            titles : {
                title: 'Выберите язык: ',
            },
        },
    },
};

export default ru;