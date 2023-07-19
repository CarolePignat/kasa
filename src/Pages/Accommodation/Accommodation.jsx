import React from 'react';
import Header from '../../Layout/Header/Header';
import Footer from '../../Layout/Footer/Footer';
import { useParams } from 'react-router-dom';
import accommodationDatas from '../../Datas/accommodationDatas.json';
import Error from '../Error/Error';
import Carousel from '../../Components/Carousel/Carousel';
import Tags from '../../Components/Tags/Tags';
import Host from '../../Components/Host/Host';
import Rating from '../../Components/Rating/Rating';
import Collapse from '../../Components/Collapse/Collapse';
import './accommodation.scss';


function Accommodation() {

    // Récupération de "id" dans URL avec le hook "useParams"
    // -> retourne paire clé-valeur et correspond à la route "<path:'accommodation/:id'>"4
    const accommodationId = useParams();
    // Récupération du logement associé à "id" de URL
    const selectedAccommodation = accommodationDatas.find(selectedAccommodation => selectedAccommodation.id === accommodationId.id);

    // Déclaration des variables et assignation aux valeurs passées aux props ???
    const { pictures, title, location, host, rating } = selectedAccommodation;

    // Création de la liste des équipements pour le composant "Collapse"
    const accommodationEquipments = selectedAccommodation.equipments.map((equipment, index) => {

        return (
            <li key={index}>{equipment}</li>
        )
    })


    // Redirection vers la page "Error" si "id" du logement est incorrect
    if (!accommodationId) {
        return <Error />
    }


    return (

        <>

            <Header />

                <div className='accommodation'>

                    <div className='accommodation__carousel'>
                        <Carousel slides={pictures} />
                    </div>

                    <div className='accommodation__content'>

                        <div className='accommodation__content__infos'>
                            <h1 className='accommodation__content__infos__title'>{title}</h1>
                            <p className='accommodation__content__infos__location'>{location}</p>

                            <div className='accommodation__content__infos__tags'>
                                {selectedAccommodation.tags.map((tag, index) => (
                                    <Tags key={index} tags={tag} />
                                    )
                                )}
                            </div>
                        </div>

                        <div className='accommodation__content__host-rating'>
                            <Host host={host} />

                            <div className='accommodation__content__host-rating__rate'>
                                <Rating rating={rating} />
                            </div>
                        </div>

                    </div>

                    <div className='accommodation__collapse'>
                        <Collapse title='Description' content={selectedAccommodation.description} />
                        <Collapse title='Équipements' content={accommodationEquipments} />
                    </div>

                </div>

            <Footer />

        </>
    );
};

export default Accommodation;