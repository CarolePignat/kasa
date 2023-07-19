import React from 'react';
import './banner.scss';


function Banner({ picture, text }) {

    return (

        <div className='banner'>

            <div className='banner__overlay'></div>

            <img className='banner__picture' src={picture} alt="Banner pic" />
            <p className='banner__text'>{text}</p>
            
        </div>
    );
};

export default Banner;