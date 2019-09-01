import React from 'react';

import './Header.css';

import logo from '../assets/logo.svg';

export default function Header() {
    return(
        <header id="main-header">
            <div className="header-content">
                <img src={logo} alt="Compass" />

                <a href="#">Link fake 1</a>
                <a href="#">Link fake 2</a>
                <a href="#">Link fake 3</a>
                <a href="#">Link fake 4</a>
            </div>
        </header>
    );
};
