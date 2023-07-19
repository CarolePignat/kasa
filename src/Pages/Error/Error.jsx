import React from 'react';
import Header from '../../Layout/Header/Header';
import Footer from '../../Layout/Footer/Footer';
import { NavLink } from 'react-router-dom';
import './error.scss';


function Error() {

    return (

        <>

            <Header />

                <div className='error'>

                    <h1 className='error__title'>404</h1>
                    <h3 className='error__subtitle'>Oups! La page que vous demandez n'existe pas.</h3>

                    <NavLink to="/" className='error__link'>Retourner sur la page d’accueil</NavLink>
                    
                </div>

            <Footer />

        </>
    );
};

export default Error;