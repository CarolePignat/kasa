import React from 'react';
import './tags.scss';


function Tags({ tags }) {

    return (

        <div className='tags'>
            <p className='tags__text'>{tags}</p>
        </div>
    );
};

export default Tags;