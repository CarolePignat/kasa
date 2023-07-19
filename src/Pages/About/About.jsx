import React from 'react';
import Header from '../../Layout/Header/Header';
import Footer from '../../Layout/Footer/Footer';
import Banner from '../../Components/Banner/Banner';
import banner_aboutpage from '../../Assets/banner_aboutpage.png';
import collapseDatas from '../../Datas/collapseDatas.json';
import Collapse from '../../Components/Collapse/Collapse';
import './about.scss';


function About() {

    return (

        <div className='about'>

            <Header />

            <div className='about__banner'>
                <Banner picture={banner_aboutpage} />
            </div>

            <div className='about__collapse'>

                {collapseDatas.map(data => {

                    return (

                        <div key={data.id}>
                            <Collapse title={data.title} content={data.content} />
                        </div>
                    )

                })}

            </div>

            <Footer />
            
        </div>
    );
};

export default About;