import React from "react";

import FacebookLogo from '../images/FacebookLogo.png'
import InstagramLogo from '../images/InstagramLogo.png'
import TwitterLogo from  '../images/TwitterLogo.png'
import TelegramLogo from '../images/TelegramLogo.png'

function Footer() {
    return (
        <div className='Footer'>
            <a href = 'https://twitter.com/' target = '_blank'> <img alt = 'twitter' src = {TwitterLogo} /> </a>
            <a href = 'https://www.facebook.com/profile.php?id=100004955020666' target = '_blank'> <img alt = 'facebook' src = {FacebookLogo} /> </a>
            <a href = 'https://www.instagram.com/tru_unk/' target = '_blank'> <img alt = 'instagram' src = {InstagramLogo} /> </a>
            <a href = 'https://t.me/Burger_wit_dat_cookie' target = '_blank'> <img alt = 'telegram' src ={TelegramLogo} /> </a>
        </div>
    )
}

export default Footer;