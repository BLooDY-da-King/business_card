import React from 'react';

import Header from './MyComponents/Header';
import MainContent from './MyComponents/MainContent';
import Footer from './MyComponents/Footer';

function BusinessCard() {
    return (
        <div className = 'BusCard'>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

export default BusinessCard;