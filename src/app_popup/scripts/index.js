import React, {Suspense}    from 'react';
import {render} from "react-dom";
import App      from "./containers/ContainerApp";
import "../../styles/index.sass"

render(
    <Suspense fallback="Loading...">
            <App />
    </Suspense>
    , document.getElementById('app')
);
