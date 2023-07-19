import React from 'react';
import './host.scss';


function Host({ host }) {

    // Méthode "split" pour séparer le prénom et le nom lors de l'espace
    const fullname = host.name.split(' ');
    // Destructuration du tableau pour attribuer les variables "firstName" et "lastName"
    const [firstName, lastName] = fullname;

    // const firstName = fullname[0]
    // const lastName = fullname[1]


    return (

        <div className='host'>

            <div className='host__name'>
                <p>{firstName}</p>
                <p>{lastName}</p>
            </div>

            <img className='host__picture' src={host.picture} alt="Owner's pic" />
            
        </div>
    );
};

export default Host;