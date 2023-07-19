import React, { useState } from 'react';
import arrowForward from '../../Assets/arrowForward.png';
import arrowBack from '../../Assets/arrowBack.png';
import './carousel.scss';


function Carousel({ slides }) {

    // Hook d'état : définit l'index du 1er slide à 0
    const [currentIndex, setCurrentIndex] = useState(0);
    // Longueur du tableau de slides
    const length = slides.length;


    // "currentIndex === length - 1": on est sur le dernier slide
    // "0": vers le 1er slide
    // "currentIndex + 1": on passe au slide suivant
    const nextSlide = () => {
        setCurrentIndex(currentIndex === - 1 ? 0 : currentIndex + 1);
    };


    // "currentIndex === 0": on est sur le 1er slide
    // "length - 1": retour sur le dernier slide
    // "currentIndex - 1": retour sur le slide précédent
    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
    };


    return (

        <div className='carousel'>

            <img className='carousel__pictures' src={slides[currentIndex]} alt="Apartments pics" />

            {/* Si le logement comporte plus d'1 image, ajout des flèches et du compteur de slides */}
            {length > 1 && (

                <>

                    <img className='carousel__arrowForward' src={arrowForward} alt="Go to next slide" 
                    onClick={nextSlide} />

                    <img className='carousel__arrowBack' src={arrowBack} alt="Go to previous slide" 
                    onClick={prevSlide} />

                    <div className='carousel__slideCounter'>{currentIndex + 1} / {length}</div>
                
                </>

            )}
            
        </div>
    );
};

export default Carousel;