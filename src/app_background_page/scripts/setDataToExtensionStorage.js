import {onError}                 from "./_common";

export default function setDataToExtensionStorage(data) {
    browser.storage.local.set(data)
           .then(null, onError);

}