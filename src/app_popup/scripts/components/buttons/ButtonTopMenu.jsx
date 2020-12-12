import React                                            from "react";
import { showModalShare, setCurrentPage, showBackDark } from "../../../../store/actions/extensionStorageActions";
import {useDispatch}                                    from 'react-redux';

export function ButtonTopMenu({className, id}) {

    function handleMouseAction(e) {
        let hoverButton = document.getElementById(`${id}_hover`);

        if (e.type === 'mousedown') {

            hoverButton.classList.add('active');
        }
        else if (e.type === 'mouseup') {
            hoverButton.classList.remove('active');
        }
        else if (e.type === 'mouseenter') {
            hoverButton.classList.add('visible');
        }
        else if (e.type === 'mouseleave') {
            hoverButton.classList.remove('visible');
        }
    }

    const dispatch = useDispatch();

    function showModal(e) {

        if (e.target.id === 'home_hover') {
            dispatch(setCurrentPage('home'));
        }
        if (e.target.id === 'lang_hover') {
            dispatch(setCurrentPage('greeting'));
        }
        if (e.target.id === 'share_hover') {
            dispatch(showBackDark(true));
            dispatch(showModalShare(true));
        }
    }

    return (
        <>

            <div
                className={className}
                id={`${id}_static`}
                onMouseEnter={handleMouseAction}
                onMouseLeave={handleMouseAction}
                onMouseDown={handleMouseAction}
                onMouseUp={handleMouseAction}

            />

            <div
                className={className}
                id={`${id}_hover`}
                onMouseEnter={handleMouseAction}
                onMouseLeave={handleMouseAction}
                onMouseDown={handleMouseAction}
                onMouseUp={handleMouseAction}
                onClick={showModal}
            />

        </>
    );
}

