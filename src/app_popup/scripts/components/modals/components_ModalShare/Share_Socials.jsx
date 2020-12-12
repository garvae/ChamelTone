import React from "react";

import {
    Facebook,
    Reddit,
    VK,
    Google,
    Tumblr,
    Mail,
    Pinterest,
    Linkedin,

} from 'react-social-sharing';

export default function ShareSocials() {

    const shareUrl = 'https://www.garvae.com/portfolio/extensions/chameltone';

    const stylesReddit = {
        background: '#FF4500'
    };

    function clickAction(){
        setTimeout(()=>{
            window.close()
        }, 100)
    }


    return (
        <div
            className="modalShare_socials"
            id="socials">

            <Facebook onClick={clickAction} className='modalShare_socials_icon' solid small link={shareUrl} name='.' />
            <Reddit onClick={clickAction} className='modalShare_socials_icon' solid small link={shareUrl} name='.' style={stylesReddit}/>
            <VK onClick={clickAction} className='modalShare_socials_icon' solid small link={shareUrl} name='.' />
            <Google onClick={clickAction} className='modalShare_socials_icon' solid small link={shareUrl} name='.' />
            <Tumblr onClick={clickAction} className='modalShare_socials_icon' solid small link={shareUrl} name='.' />
            <Mail onClick={clickAction} className='modalShare_socials_icon' solid small link={shareUrl} name='.' />
            <Pinterest onClick={clickAction} className='modalShare_socials_icon' solid small link={shareUrl} name='.' />
            <Linkedin onClick={clickAction} className='modalShare_socials_icon' solid small link={shareUrl} name='.' />

        </div>
    );


}