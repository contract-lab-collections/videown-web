import { InitAPI } from "cess-js-sdk";

function getAPI(){
    if(!window.api){
        const { api, keyring } = InitAPI();
        window.api=api;
        window.keyring=keyring;
    }
    return window.api;
}

export { getAPI };