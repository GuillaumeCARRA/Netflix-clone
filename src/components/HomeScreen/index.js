import React from 'react';
import Nav from '../NavBar';
import Banner from '../Banner';
import Row from '../Row';
import './homeScreen.css';

function HomeScreen() {
    return (
        <div>
            {/* NavBar  */}
            <Nav />
            
            {/* Banner */}
            <Banner />
            
            {/* Row */}
            <Row />
        </div>
    )
}

export default HomeScreen;
