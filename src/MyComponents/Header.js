import React from "react";
import ProfilePhoto from '../images/ProfilePhoto.jpg'

function Header() {
    return (
        <div className='ProfilePhoto'>
            <img src={ProfilePhoto} />
        </div>
    )
}

export default Header;