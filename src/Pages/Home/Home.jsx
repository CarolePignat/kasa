import React from 'react';
import Header from '../../Layout/Header/Header';
import Footer from '../../Layout/Footer/Footer';    
import Banner from '../../Components/Banner/Banner';
import banner_homepage from '../../Assets/banner_homepage.png';
import Gallery from '../../Components/Gallery/Gallery';
import './home.scss';


function Home() {

    return (

        <div className='home'>

            <Header />

            <div className='home__banner'>
                <Banner picture={banner_homepage} text="Chez vous, partout et ailleurs" />
            </div>

            <div className='home__gallery'>
                <Gallery />
            </div>

            <Footer />
            
        </div>
    );
};

export default Home;