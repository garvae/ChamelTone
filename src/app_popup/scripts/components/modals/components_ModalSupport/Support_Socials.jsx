import React from "react";

export default function SocialsSupport() {

    function linkAction(e){
        if (e.target.id === 'fb'){
            window.open(
                "https://www.facebook.com/groups/chameltone", "_blank")
        }
        if (e.target.id === 'gh'){
            window.open(
                "https://www.github.com/garvae/chameltone", "_blank")
        }
        if (e.target.id === 'vk'){
            window.open(
                "https://www.vk.com/chameltone", "_blank")
        }
        window.close()
    }

    return (
        <div
            className="modalSupport__link"
            id="socials">

                <a id="fb" onClick={linkAction} href="" />
                <a id="gh" onClick={linkAction} href="" />
                <a id="vk" onClick={linkAction} href="" />

        </div>
    );


}

