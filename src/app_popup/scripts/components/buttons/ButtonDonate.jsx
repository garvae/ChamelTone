import React                                        from "react";
import { showModalDonate, showModalDonateRedirect } from "../../../../store/actions/extensionStorageActions";
import { useDispatch, useSelector }                 from "react-redux";

export default function ButtonDonate(props) {

    const dispatch = useDispatch();

    const state         = useSelector(state => state.state);
    let currentUserLang = !!state && !!state.userLanguage ? state.userLanguage : 'en';



    function redirect() {
        if (currentUserLang === 'ru') {
            window.open("https://pay.cloudtips.ru/p/859caa2a", "_blank");
        }
        else {
            window.open("https://ko-fi.com/garvae", "_blank");
        }
    }

    function showRedirect() {
        dispatch(showModalDonate(false));
        dispatch(showModalDonateRedirect(true));
    }

    function clickActions(){
        showRedirect();
        redirect()
    }

    return (
        <button
            className={`${props.identifier}_buttonDonate buttonDonate`}
            id="button"
            onClick={clickActions}
        >
            <div className="buttonDonate_button">
                <span />
                <div id="text"> {props.buttonText} </div>

            </div>

        </button>
    );
}