import setDataToExtensionStorage from "./setDataToExtensionStorage";


export default function detectBrowserLanguage(){
    const lang = browser.i18n.getUILanguage();
    let detectedBrowserLanguage = {detectedBrowserLanguage: lang};
    setDataToExtensionStorage(detectedBrowserLanguage)
}