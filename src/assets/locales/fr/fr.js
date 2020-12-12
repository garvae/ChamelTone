const fr = {


    // #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#
    // #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#   MENU  #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#
    // #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#
    menu: {

        // =================================== MENU TOP =====================================

        menu_top: {
            button_donate: 'Faire un don', // *** translation to Eng: 'Donate'
        },

        // =================================== MENU BOTTOM =====================================

        menu_bottom: {
            left  : 'Filtres',
            middle: 'Couleurs',
            right : 'Style CSS',
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
            button_continue: 'Continuer',
        },


        // =================================== PAGE MANUAL START =====================================

        page_manual_start: {
            textLine1     : 'Salut !',
            textLine2     : 'Je suis',
            textLine3     : 'ChamelTone',
            textLine4     : '!',
            buttonText    : 'Commençons ?',
            buttonSkipText: 'Sauter le manuel',
        },


        // =================================== PAGE MANUAL =====================================

        page_manual: {

            manual_1: {
                text_1     : 'Filtres anwenden',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',

            },
            manual_2: {
                text_1     : 'Personnaliser les couleurs',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',

            },
            manual_3: {
                text_1     : 'Vous pouvez ajouter  votre propre Style CSS pour tout site',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',

            },
            manual_4: {
                text_1     : 'Vous pouvez activer et désactiver chaque réglage',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',

            },
            manual_5: {
                text_1     : 'Ici, vous pouvez poser des questions, suggérer des améliorations ou signaler un bogue.   ',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',

            },
            manual_6: {
                text_1     : 'Vous pouvez également partager cette application avec vos amis',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',

            },

            manual_7: {
                text_1     : 'Pour revenir à la page principale, appuyez sur le bouton home"".',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',

            },
            manual_8: {
                text_1     : 'Soutenez ce projet et achetez un hamburger pour les développeurs - cliquez sur Donate", nous serons heureux !"',
                textColor_1: '',
                text_2     : '',
                textColor_2: '',
                text_button: 'Profitez-en !',
                text_donate: 'Cette application évolue grâce à votre soutien',
            },
        },


        // =================================== PAGE HOME =====================================

        page_home: {
            titles : {
                title_darkMode: 'Mode sombre',
                title_dropDown: 'Thèmes sauvegardés :',
            },
            modules: {
                module_dropDown: {
                    defaultScheme: 'Thème par défaut',
                    emptyItem    : 'Pas de thèmes thèmes',
                    newScheme    : 'Nouveau thème',
                },
            },
            buttons: {
                createTheme: 'Créer un thème',
                saveTheme  : 'Sauvegarder',
                resetTheme : 'Supprimer',
            },
        },


        // =================================== PAGE FILTERS =====================================


        page_filters: {
            menu: {
                left  : 'Réinitialiser',
                middle: 'Annuler',
                right : 'Prêt',
            },

            modules: {
                module_filters: {
                    brightness: {
                        name: 'Luminosité',
                    },
                    contrast  : {
                        name: 'Contraste',
                    },
                    grayscale : {
                        name: 'Noir et blanc',
                    },
                    sepia     : {
                        name: 'Rétro',
                    },
                    hue       : {
                        name: 'Teinte',
                    },
                    invert    : {
                        name: 'Inverser',
                    },
                    saturate  : {
                        name: 'Saturation',
                    },
                },
            },
        },


        // =================================== PAGE COLORS =====================================

        page_colors: {
            identifier: 'colors',
            menu      : {
                left  : 'Réinitialiser',
                middle: 'Annuler',
                right : 'Prêt',
            },

            modules: {
                module_colors: {
                    color_1: {
                        name: 'Texte#1',
                    },
                    color_2: {
                        name: 'Texte#2',
                    },
                    color_3: {
                        name: 'Texte#3',
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
                left  : 'Réinitialiser',
                middle: 'Annuler',
                right : 'Prêt',
            },

            modules: {
                module_css_styles: {
                    inputPlaceholder: 'Il suffit de copier le code CSS et coller ici. ',
                    errorMessage    : "Il semble qu'il y ait une erreur dans le code ...",
                    validMessage    : 'Aucune erreur trouvée ...',
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
                description_middle      : 'Personnalisez les couleurs de votre site web.',
                description_last        : 'Facile. Rapide. Joli.',
                description_bottom      : 'Cette application évolue grâce à votre soutien',
            },
            title       : 'Contacts :',
            links       : {
                site   : {
                    identifier: 'site',
                    name      : "Site de l\'application :",
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
                button_support: 'Soutenez-nous',
            },

            menu: {
                menu_bottom_close: 'Fermer',
            },
        },


        // =================================== MODAL DONATE =====================================
        modal_donate: {
            descriptions: {
                description_first : 'Appréciez cette application ?',
                description_middle: 'Soutenez-nous!',
            },
            buttons     : {
                button_cancel  : 'Annuler',
                button_redirect: 'Soutenez-nous!',
            },
        },

        // =================================== MODAL DONATE REDIRECT =====================================


        modal_donate_redirect: {
            descriptions: {
                description_first : 'Nous apprécions grandement votre soutien !',
                description_middle: '',
                description_last_1: 'Cette application évolue grâce à votre soutien',
                description_last_2: '',
                description_bottom: 'Vous serez redirigé vers le site du service des dons',
            },

            buttons: {
                button_cancel  : 'Annuler',
                button_redirect: 'Soutenez-nous!',
            },
            titles : {
                title_timer: 'Redirection',
            },
        },

        // =================================== MODAL SHARE =====================================


        modal_share: {
            buttons: {
                button_cancel: 'Annuler',
            },
            titles : {
                title: 'Partagez avec vos amis!',
            },
        },

        // =================================== MODAL LANG =====================================

        modal_lang: {
            buttons: {
                button_cancel: 'Annuler',
            },
            titles : {
                title: 'Choisissez votre langue: ',
            },
        },
    },
};

export default fr;