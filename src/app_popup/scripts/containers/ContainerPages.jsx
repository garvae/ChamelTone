import React                            from "react";
import PageHome                         from "../pages/PageHome";
import PageFilters                      from "../pages/PageFilters";
import PageColors                       from "../pages/PageColors";
import PageCssStyles                    from "../pages/PageCssStyles";
import PageGreeting                     from "../pages/PageGreeting";
import PageManualStart                  from "../pages/PageManualStart";
import PageManual                       from "../pages/PageManual";
import { useSelector, useDispatch }     from "react-redux";
import TopMenu                          from "../components/menu/TopMenu";
import { addNewDomain, setCurrentPage } from "../../../store/actions/extensionStorageActions";

export default function ContainerPages() {

    const state    = useSelector(state => state.state);
    const dispatch = useDispatch();

    let routes = state.routes ? state.routes : false;

    let firstLaunch = !!state.firstLaunch;
    let currentPage = routes ? state.routes.currentPage : 'home';

    const pages = {
        home       : PageHome,
        filters    : PageFilters,
        colors     : PageColors,
        cssStyles  : PageCssStyles,
        greeting   : PageGreeting,
        manualStart: PageManualStart,
        manual     : PageManual,
    };

    let Page;
    if (firstLaunch) {
        dispatch(setCurrentPage('greeting'));
        Page = PageGreeting;
    }
    else {
        Page = pages[currentPage];
    }

    let domains                  = state.domains && state.domains;
    let isCurrentDomainInDomains = domains && domains[state.currentDomain];
    if (!isCurrentDomainInDomains) {
        dispatch(addNewDomain(state.currentDomain));
    }

    return (
            <div className="pagesContainer">
                <TopMenu />
                <Page />
            </div>

    );
}

