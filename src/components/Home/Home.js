import React from 'react';
import About from '../About/About';
import Hero from '../Hero/Hero';
import ImageGallery from '../ImageGallery/ImageGallery';
import Location from '../Location/Location';
import Seasons from '../Seasons/Seasons';

const Home = () => {
    return (
        <div className="home">
            {/* === Hero Section === */}
            <Hero />
            {/* === Seasons Section === */}
            <Seasons />
            {/* === Image Gallery Section === */}
            <ImageGallery />
            {/* === Location section === */}
            <Location />
            {/* === About section === */}
            <About />
        </div>
    );
};

export default Home;