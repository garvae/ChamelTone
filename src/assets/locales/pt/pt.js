const pt = {


    // #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#
    // #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#   MENU  #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#
    // #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#
    menu: {

        // =================================== MENU TOP =====================================

        menu_top: {
            button_donate: 'Doe', // *** translation to Eng: 'Donate'
        },

        // =================================== MENU BOTTOM =====================================

        menu_bottom: {
            left  : 'Filtros',
            middle: 'Cores',
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
            button_continue: 'Continuar',
        },


        // =================================== PAGE MANUAL START =====================================

        page_manual_start: {
            textLine1     : 'Hi!',
            textLine2     : 'Olá!',
            textLine3     : 'ChamelTone',
            textLine4     : '!',
            buttonText    : 'Vamos começar?',
            buttonSkipText: 'Saltar manual',
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
                text_1     : 'Personalizar cores',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',

            },
            manual_3: {
                text_1     : 'Pode acrescentar o seu próprio Estilo CSS para qualquer sítio.',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',

            },
            manual_4: {
                text_1     : 'Pode ligar e desligar cada configuração',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',

            },
            manual_5: {
                text_1     : 'Aqui pode  fazer perguntas,  sugerem melhorias  ou denunciar um erro.',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',

            },
            manual_6: {
                text_1     : 'Também pode partilhar esta aplicação com os seus amigos',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',

            },

            manual_7: {
                text_1     : "Para regressar  para a página principal carregar no botão 'home'",
                textColor_1: '',
                text_2     : '',
                textColor_2: '',

            },
            manual_8: {
                text_1     : 'Apoiar este projecto e comprar um hambúrguer  para os criadores - clique em \'Doar\',  vamos ser felizes!',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',
                text_button: 'Divirtam-se!',
                text_donate: 'Esta aplicação evolui graças ao vosso apoio',
            },
        },


        // =================================== PAGE HOME =====================================

        page_home: {
            titles : {
                title_darkMode: 'Modo escuro',
                title_dropDown: 'Temas guardados:',
            },
            modules: {
                module_dropDown: {
                    defaultScheme: 'Tema predefinido',
                    emptyItem    : 'Sem temas temas',
                    newScheme    : 'Novo tema',
                },
            },
            buttons: {
                createTheme: 'Criar tema',
                saveTheme  : 'Guardar',
                resetTheme : 'Eliminar',
            },
        },


        // =================================== PAGE FILTERS =====================================


        page_filters: {
            menu: {
                left  : 'Reinicialização',
                middle: 'Cancelar',
                right : 'Pronto',
            },

            modules: {
                module_filters: {
                    brightness: {
                        name: 'Luminosidade',
                    },
                    contrast  : {
                        name: 'Contraste',
                    },
                    grayscale : {
                        name: 'Preto e branco',
                    },
                    sepia     : {
                        name: 'Retro',
                    },
                    hue       : {
                        name: 'Tinta',
                    },
                    invert    : {
                        name: 'Inverter',
                    },
                    saturate  : {
                        name: 'Saturação',
                    },
                },
            },
        },


        // =================================== PAGE COLORS =====================================

        page_colors: {
            identifier: 'colors',
            menu      : {
                left  : 'Reinicialização',
                middle: 'Cancelar',
                right : 'Pronto',
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
                left  : 'Reinicialização',
                middle: 'Cancelar',
                right : 'Pronto',
            },

            modules: {
                module_css_styles: {
                    inputPlaceholder: 'Basta copiar o código CSS  e colar aqui.',
                    errorMessage    : 'Parece que há um erro no código ...',
                    validMessage    : 'Não foram encontrados erros ...',
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
                description_middle      : 'Personalizar qualquer cor de website.',
                description_last        : 'Fácil. Rápido. Bonito.',
                description_bottom      : 'Esta aplicação evolui graças ao vosso apoio',
            },
            title       : 'Contactos:',
            links       : {
                site   : {
                    identifier: 'site',
                    name      : 'Sítio do aplicativo:',
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
                button_support: 'Apoie-nos',
            },

            menu: {
                menu_bottom_close: 'Fechar',
            },
        },


        // =================================== MODAL DONATE =====================================
        modal_donate: {
            descriptions: {
                description_first : 'Desfrute desta aplicação?',
                description_middle: 'Apoie-nos!',
            },
            buttons     : {
                button_cancel  : 'Cancelar',
                button_redirect: 'Apoie-nos!',
            },
        },

        // =================================== MODAL DONATE REDIRECT =====================================


        modal_donate_redirect: {
            descriptions: {
                description_first : 'Agradecemos muito o seu apoio!',
                description_middle: '',
                description_last_1: 'Esta aplicação evolui graças ao vosso apoio',
                description_last_2: '',
                description_bottom: 'Você será redirecionado para o site do serviço de doações',
            },

            buttons: {
                button_cancel  : 'Cancelar',
                button_redirect: 'Apoie-nos!',
            },
            titles : {
                title_timer: 'Redirecionamento',
            },
        },

        // =================================== MODAL SHARE =====================================


        modal_share: {
            buttons: {
                button_cancel: 'Cancelar',
            },
            titles : {
                title: 'Partilhar com amigos!',
            },
        },

        // =================================== MODAL LANG =====================================

        modal_lang: {
            buttons: {
                button_cancel: 'Cancelar',
            },
            titles : {
                title: 'Escolha a sua língua: ',
            },
        },
    },
};

export default pt;