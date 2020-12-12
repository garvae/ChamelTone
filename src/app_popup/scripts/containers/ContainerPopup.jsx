import React from "react";
import { connect }                    from "react-redux";
import ContainerGridMainFrame         from "./ContainerGridMainFrame";

function ContainerPopup() {
    return (
        <ContainerGridMainFrame />
    );
}

const mapStateToProps = (state) => ({
    state: state
});

export default connect(mapStateToProps)(ContainerPopup);
