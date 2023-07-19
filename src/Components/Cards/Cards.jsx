import React from 'react';
import { NavLink } from 'react-router-dom';
import './cards.scss';



function Cards({ id, cover, title }) {

    return (

        <div className='cards'>

            <NavLink to={`/accommodation/${id}`}>

                <img src={cover} alt={title} />
                <p className='cards__title'>{title}</p>

            </NavLink>
            
        </div>
    );
};

export default Cards;