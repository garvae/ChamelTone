const es = {


    // #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#
    // #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#   MENU  #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#
    // #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#
    menu: {

        // =================================== MENU TOP =====================================

        menu_top: {
            button_donate: 'Donaciones', // *** translation to Eng: 'Donate'
        },

        // =================================== MENU BOTTOM =====================================

        menu_bottom: {
            left  : 'Filtros',
            middle: 'Colores',
            right : 'Estilo CSS',
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
            button_continue: 'Continúa',
        },


        // =================================== PAGE MANUAL START =====================================

        page_manual_start: {
            textLine1     : '¡Hola!',
            textLine2     : 'Yo soy...',
            textLine3     : 'ChamelTone',
            textLine4     : '!',
            buttonText    : '¿Empezamos?',
            buttonSkipText: 'Saltar el manual',
        },


        // =================================== PAGE MANUAL =====================================

        page_manual: {

            manual_1: {
                text_1     : 'Filtros anwenden',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',

            },
            manual_2: {
                text_1     : 'Personalizar los colores',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',

            },
            manual_3: {
                text_1     : 'Puedes añadir tu propio Estilo CSS para cualquier sitio',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',

            },
            manual_4: {
                text_1     : 'Puedes activar y desactivar cada ajuste',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',

            },
            manual_5: {
                text_1     : 'Aquí puedes hacer preguntas, sugieren una mejora o informar de un error   ',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',

            },
            manual_6: {
                text_1     : 'También puedes compartir esta aplicación con tus amigos',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',

            },

            manual_7: {
                text_1     : "Para volver a la página principal presione el botón 'home' ",
                textColor_1: '',
                text_2     : '',
                textColor_2: '',

            },
            manual_8: {
                text_1     : 'Apoya este proyecto y compra una hamburguesa para los desarrolladores - haga clic en Donar", seremos felices!"  ',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',
                text_button: '¡Disfruta!',
                text_donate: 'Esta aplicación evoluciona gracias a tu apoyo',
            },
        },


        // =================================== PAGE HOME =====================================

        page_home: {
            titles : {
                title_darkMode: 'Modo oscuro',
                title_dropDown: 'Temas guardados:',
            },
            modules: {
                module_dropDown: {
                    defaultScheme: 'Tema predeterminado',
                    emptyItem    : 'No temas temas',
                    newScheme    : 'Nuevo tema',
                },
            },
            buttons: {
                createTheme: 'Crear el tema',
                saveTheme  : 'Guardar',
                resetTheme : 'Eliminar',
            },
        },


        // =================================== PAGE FILTERS =====================================


        page_filters: {
            menu: {
                left  : 'Reiniciar',
                middle: 'Cancelar',
                right : 'Listo',
            },

            modules: {
                module_filters: {
                    brightness: {
                        name: 'Brillo',
                    },
                    contrast  : {
                        name: 'Contraste',
                    },
                    grayscale : {
                        name: 'Blanco y negro',
                    },
                    sepia     : {
                        name: 'Retro',
                    },
                    hue       : {
                        name: 'Tintes',
                    },
                    invert    : {
                        name: 'Invertir',
                    },
                    saturate  : {
                        name: 'Saturación',
                    },
                },
            },
        },


        // =================================== PAGE COLORS =====================================

        page_colors: {
            identifier: 'colors',
            menu      : {
                left  : 'Reiniciar',
                middle: 'Cancelar',
                right : 'Listo',
            },

            modules: {
                module_colors: {
                    color_1: {
                        name: 'Texto#1',
                    },
                    color_2: {
                        name: 'Texto#2',
                    },
                    color_3: {
                        name: 'Texto#3',
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
                left  : 'Reiniciar',
                middle: 'Cancelar',
                right : 'Listo',
            },

            modules: {
                module_css_styles: {
                    inputPlaceholder: 'Sólo copia el código CSS y pegar aquí ',
                    errorMessage    : 'Parece que hay un error en el código...',
                    validMessage    : 'No se encontraron errores...',
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
                description_middle      : 'Personaliza los colores de cualquier sitio web.',
                description_last        : 'Fácil. Rápido. Bonito.',
                description_bottom      : 'Esta aplicación evoluciona gracias a tu apoyo',
            },
            title       : 'Contactos:',
            links       : {
                site   : {
                    identifier: 'site',
                    name      : 'El sitio de App:',
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
                button_support: 'Apóyanos',
            },

            menu: {
                menu_bottom_close: 'Cerrar',
            },
        },


        // =================================== MODAL DONATE =====================================
        modal_donate: {
            descriptions: {
                description_first : '¿Disfrutas de esta aplicación?',
                description_middle: 'Apóyanos!',
            },
            buttons     : {
                button_cancel  : 'Cancelar',
                button_redirect: 'Apóyanos!',
            },
        },

        // =================================== MODAL DONATE REDIRECT =====================================


        modal_donate_redirect: {
            descriptions: {
                description_first : '¡Apreciamos mucho su apoyo!',
                description_middle: '',
                description_last_1: 'Esta aplicación evoluciona gracias a tu apoyo',
                description_last_2: '',
                description_bottom: 'Serás redirigido a la página web del servicio de donaciones',
            },

            buttons: {
                button_cancel  : 'Cancelar',
                button_redirect: 'Apóyanos!',
            },
            titles : {
                title_timer: 'Redirección',
            },
        },

        // =================================== MODAL SHARE =====================================


        modal_share: {
            buttons: {
                button_cancel: 'Cancelar',
            },
            titles : {
                title: 'Comparte con tus amigos!',
            },
        },

        // =================================== MODAL LANG =====================================

        modal_lang: {
            buttons: {
                button_cancel: 'Cancelar',
            },
            titles : {
                title: 'Elija su idioma: ',
            },
        },
    },
};

export default es;