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


    // Redirection vers la page "Error" si "id" du logement est incorrect
    if (!selectedAccommodation) {
        return <Error />
    }


    return (

        <>

            <Header />

                <div className='accommodation'>

                    <div className='accommodation__carousel'>
                        <Carousel slides={selectedAccommodation.pictures} />
                    </div>

                    <div className='accommodation__content'>

                        <div className='accommodation__content__infos'>
                            <h1 className='accommodation__content__infos__title'>{selectedAccommodation.title}</h1>
                            <p className='accommodation__content__infos__location'>{selectedAccommodation.location}</p>

                            <div className='accommodation__content__infos__tags'>
                                {selectedAccommodation.tags.map((tag, index) => (
                                    <Tags key={index} tags={tag} />
                                    )
                                )}
                            </div>
                        </div>

                        <div className='accommodation__content__host-rating'>
                            <Host host={selectedAccommodation.host} />

                            <div className='accommodation__content__host-rating__rate'>
                                <Rating rating={selectedAccommodation.rating} />
                            </div>
                        </div>

                    </div>

                    <div className='accommodation__collapse'>
                        <Collapse title='Description' content={selectedAccommodation.description} />

                        <Collapse 
                            title='Équipements'
                            content={selectedAccommodation.equipments.map((equipment, index) => (

                                    <li key={index}>{equipment}</li>
                                )
                            )}
                        />
                    </div>

                </div>

            <Footer />

        </>
    );
};

export default Accommodation;