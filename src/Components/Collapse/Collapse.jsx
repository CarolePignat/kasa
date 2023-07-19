import React, { useState } from 'react';
import arrow_collapse from '../../Assets/arrow_collapse.png';
import './collapse.scss';


function Collapse({ title, content }) {

    // Déclaration de la variable d'état "isExpanded" avec le hook d'état "useState"
    const [isExpanded, setIsExpanded] = useState(false);


    return (

        <div className='collapse'>

            {/* Par défaut, le contenu est caché, la flèche dirigée vers le bas */}
            {/* Au clic, le contenu s'affiche, la flèche dirigée vers le haut */}
            {/* Gestion des événements avec "onClick" */}
            <h3 className='collapse__title' onClick={() => setIsExpanded(!isExpanded)}>
                {title}

                <img 
                    className={isExpanded ? 'arrow_up' : 'arrow_down'}
                    src={arrow_collapse} 
                    alt="Show content" 
                />
            </h3>

            <div className={isExpanded ? 'collapse__content' : 'collapse__content__hidden'}>
                {content}
            </div>
            
        </div>
    );
};

export default Collapse;