import React             from "react";
import ModalDonate         from "../components/modals/ModalDonate";
import ModalDonateRedirect from "../components/modals/ModalDonateRedirect";
import ModalSupport        from "../components/modals/ModalSupport";
import ModalShare          from "../components/modals/ModalShare";

export default function ContainerModals({className, showModalsStatus}) {

    let showModals = showModalsStatus

    function Loading() {
        return (
            <div />
        );
    }

    let Modal = Loading;

    if (showModals.showModalDonate) {
        Modal = ModalDonate;
    }
    else if (showModals.showModalDonateRedirect) {
        Modal = ModalDonateRedirect;
    }
    else if (showModals.showModalSupport) {
        Modal = ModalSupport;
    }
    else if (showModals.showModalShare) {
        Modal = ModalShare;
    }

    return (
        <div className={`modalsContainer ${className ? className : null}`}>
            <Modal />
        </div>
    );
}
