import React from 'react';
import logo from '../../Assets/logo.png';
import { NavLink } from 'react-router-dom';
import './header.scss';


function Header() {

    return (

        <header className='header'>

            <img className='header__logo' src={logo} alt="Red Kasa logo" />

            <div className='header__navbar'>

                <ul className='header__navbar__menu'>

                    <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>Accueil</li>
                    </NavLink>

                    <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>A propos</li>
                    </NavLink>

                </ul>

            </div>

        </header>
    );
};

export default Header;