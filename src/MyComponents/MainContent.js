import React from "react";

import EmailLogo from '../images/EmailLogo.png';
import LinkedinLogo from '../images/LinkedinLogo.png';

function MainContent() {
    return (
        <div className='MainContent'>
            <div className = 'Personal'>
                <h1>Temurmalik Rasulov</h1>
                <h4>Frontend Developer</h4>
                <a href="https://penguindev.uz/">penguindev.uz</a>
            </div>
            <div className = 'Buttons'>
                <form action = 'mailto:temurmalik.rasulov@gmail.com'>
                    <button className ='EmailButton' onClick = 'mailto:temurmalik.rasulov@gmail.com'>
                        <img alt='Email Logo' src={EmailLogo} />
                        <h4>Email</h4>
                    </button>
                </form>
                <form action = 'https://www.linkedin.com/in/temurmalik-u-rasulov-66a313227/' target = '_blank'>
                    <button className = 'LinkedinButton'>
                        <img alt='LinkedIn Logo' src={LinkedinLogo} />
                        <h4>LinkedIn</h4>
                    </button>
                </form>
            </div>
            <div className = 'AboutMe'>
                <h1>About</h1>
                    <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. 
                    I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h1>Interests</h1>
                    <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. 
                    Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </div>
    )
}

export default MainContent;