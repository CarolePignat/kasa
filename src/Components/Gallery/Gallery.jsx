import React from 'react';
import accommodationDatas from '../../Datas/accommodationDatas.json';
import Cards from '../Cards/Cards';
import './gallery.scss';


function Gallery() {

    return (

        <div className='gallery'>

            {accommodationDatas.map(data => {

                return (
                    <Cards 
                        key={data.id}
                        id={data.id}
                        cover={data.cover}
                        title={data.title}
                    />
                )
            })

            }
            
        </div>
    );
};

export default Gallery;