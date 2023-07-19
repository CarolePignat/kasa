import React from 'react';
import logo_footer from '../../Assets/logo_footer.png';
import './footer.scss';


function Footer() {

    return (

        <footer className='footer'>

            <img className='footer__logo' src={logo_footer} alt="White Kasa footer logo" />
            <p className='footer__copyright'>© 2020 Kasa. All rights reserved</p>

        </footer>
    );
};

export default Footer;