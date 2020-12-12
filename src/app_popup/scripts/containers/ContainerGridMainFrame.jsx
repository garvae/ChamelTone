import React, { useEffect, useState } from "react";
import ContainerPages                 from "./ContainerPages";
import ContainerModals                from "./ContainerModals";
import { useSelector }                from "react-redux";

export default function ContainerGridMainFrame() {

    const state = useSelector(state => state.state);

    let isState              = !!state;
    let isRoutes             = isState ? !!state.routes : false;
    let routes               = isRoutes ? state.routes : false;
    let isShowModalsInRoutes = routes ? routes.showModals : false;

    let showModalDonate         = isShowModalsInRoutes ? routes.showModals.showModalDonate : false;
    let showModalDonateRedirect = isShowModalsInRoutes ? routes.showModals.showModalDonateRedirect : false;
    let showModalShare          = isShowModalsInRoutes ? routes.showModals.showModalShare : false;
    let showModalSupport        = isShowModalsInRoutes ? routes.showModals.showModalSupport : false;
    let isShowBackDark          = isShowModalsInRoutes ? routes.showModals.showBackDark : false;

    let isShowModals = showModalDonate || showModalDonateRedirect || showModalShare || showModalSupport;

    let showModalsStatus = {
        showModalDonate        : showModalDonate,
        showModalDonateRedirect: showModalDonateRedirect,
        showModalShare         : showModalShare,
        showModalSupport       : showModalSupport,
    };

    const [showBackDark, setShowBackDark] = useState(false);
    const [hideBackDark, setHideBackDark] = useState(false);

    useEffect(() => {
        if (isShowBackDark) {
            setShowBackDark(true);
        }
        if (!isShowBackDark) {
            setHideBackDark(true);
            setTimeout(() => {
                setShowBackDark(false);
                setHideBackDark(false);
            }, 400);
        }
    }, [isShowBackDark]);


    return (
        <div className="mainFrame">
            <ContainerPages />
            <ContainerModals className={isShowModals ? 'showModals' : null} showModalsStatus={showModalsStatus} />
            <div
                className={` mainFrame_backDark  ${showBackDark ? 'showBackDark' : null} ${hideBackDark ? 'hideBackDark' : null} `} />
        </div>
    );
}

