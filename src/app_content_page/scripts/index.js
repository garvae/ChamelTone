/**************************************************************************
 **************************************************************************

 CONTENT SCRIPT TASKS:

 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ get request from background script:

 - check options
 - inject css to current document

 **************************************************************************
 **************************************************************************/


// ################################################################################
// INVERT ELEMENTS WITH BACKGROUND-IMAGE PROPERTY:

let chameltoneStyleDarkModeImg = document.createElement('style');
chameltoneStyleDarkModeImg.id  = 'chameltoneStyleDarkModeImg';

let tagNames = ['div', 'a']

let property = 'background-image'

function applyInvertImgStyle(){

    tagNames.forEach(tag => propertySearch(tag, property))
}

function propertySearch(tagName, property) {
    let elements = document.getElementsByTagName(tagName);

    for (const el of elements) {

        let elHasProperty = window.getComputedStyle(el, null).getPropertyValue(property) !== 'none'

        if (elHasProperty){
            let path = getPath(el)
            chameltoneStyleDarkModeImg.innerHTML = `${path}{filter: invert(100%) !important}`
            document.body.appendChild(chameltoneStyleDarkModeImg)
        }
    }
}


function previousElementSibling (element) {
    if (element.previousElementSibling !== 'undefined') {
        return element.previousElementSibling;
    } else {
        // Loop through ignoring anything not an element
        while (element = element.previousSibling) {
            if (element.nodeType === 1) {
                return element;
            }
        }
    }
}
function getPath (element) {
    // False on non-elements
    if (!(element instanceof HTMLElement)) { return false; }
    let path = [];
    while (element.nodeType === Node.ELEMENT_NODE) {
        let selector = element.nodeName;
        if (element.id) { selector += ('#' + element.id); }
        else {
            // Walk backwards until there is no previous sibling
            let sibling = element;
            // Will hold nodeName to join for adjacent selection
            let siblingSelectors = [];
            while (sibling !== null && sibling.nodeType === Node.ELEMENT_NODE) {
                siblingSelectors.unshift(sibling.nodeName);
                sibling = previousElementSibling(sibling);
            }
            // :first-child does not apply to HTML
            if (siblingSelectors[0] !== 'HTML') {
                siblingSelectors[0] = siblingSelectors[0] + ':first-child';
            }
            selector = siblingSelectors.join(' + ');
        }
        path.unshift(selector);
        element = element.parentNode;
    }
    return path.join(' > ');
}


function removeInvertImgStyle(){
    let darkModeStyleImgElement = document.getElementById('chameltoneStyleDarkModeImg');
    document.body.removeChild(darkModeStyleImgElement);
}

// ################################################################################



let chameltoneStyleDarkMode = document.createElement('style');
chameltoneStyleDarkMode.id  = 'chameltoneStyleDarkMode';


let chameltoneStyleFilters = document.createElement('style');
chameltoneStyleFilters.id  = 'chameltoneStyleFilters';


let chameltoneStyleColors = document.createElement('style');
chameltoneStyleColors.id  = 'chameltoneStyleColors';


let chameltoneStyleCss = document.createElement('style');
chameltoneStyleCss.id  = 'chameltoneStyleCss';


browser.runtime.onMessage.addListener(request => {

    if (!!request.data.darkMode) {
        if (request.data.darkMode.status === true) {
            chameltoneStyleDarkMode.innerHTML = request.data.darkMode.style;
            document.body.appendChild(chameltoneStyleDarkMode);
            if (!request.data.darkMode.inList){
                applyInvertImgStyle()

            }

        }
        else if (request.data.darkMode.status === false) {

            let darkModeStyleElement = document.getElementById('chameltoneStyleDarkMode');
            document.body.removeChild(darkModeStyleElement);
            if (!request.data.darkMode.inList){
                removeInvertImgStyle()
            }
        }
    }

    if (!!request.data.filters) {
        if (request.data.filters.status === true) {
            chameltoneStyleFilters.innerHTML = request.data.filters.style;
            document.body.appendChild(chameltoneStyleFilters);
        }
        else if (request.data.filters.status === false) {
            let filtersStyleElement = document.getElementById('chameltoneStyleFilters');
            document.body.removeChild(filtersStyleElement);
        }
    }
    if (!!request.data.colors) {
        if (request.data.colors.status === true) {
            chameltoneStyleColors.innerHTML = request.data.colors.style;
            document.body.appendChild(chameltoneStyleColors);
        }
        else if (request.data.colors.status === false) {
            let colorsStyleElement = document.getElementById('chameltoneStyleColors');
            document.body.removeChild(colorsStyleElement);
        }
    }
    if (!!request.data.css) {
        if (request.data.css.status === true) {
            chameltoneStyleCss.innerHTML = request.data.css.style;
            document.body.appendChild(chameltoneStyleCss);
        }
        else if (request.data.css.status === false) {
            let cssStyleElement = document.getElementById('chameltoneStyleCss');
            document.body.removeChild(cssStyleElement);
        }
    }

});




