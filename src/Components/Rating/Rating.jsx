import React from 'react';
import red_star from '../../Assets/red_star.png';
import grey_star from '../../Assets/grey_star.png';
import './rating.scss';


function Rating({ rating }) {

    return (

        <div className='starRating'>

            {/* Création d'un tableau englobant les 5 étoiles */}
            {[...Array(5)].map((star, index) => {

                // Valeur "1" pour la 1ère étoile, Valeur "5" pour la dernière
                // "index + 1": valeur de départ à 1 au lieu de 0
                const ratingValue = index + 1;

                return (

                    // "<=": si valeur plus petite ou égale à la notation -> étoile rouge, sinon grise
                    <img 
                        className='starRating__stars'
                        src={ratingValue <= rating ? red_star : grey_star} 
                        alt="Rating stars" 
                    />
                )
            })}
            
        </div>
    );
};

export default Rating;