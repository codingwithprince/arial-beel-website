import React from 'react';
import Hero from '../Hero/Hero';
import Seasons from '../Seasons/Seasons';

const Home = () => {
    return (
        <div className="home">
            {/* === Hero Section === */}
            <Hero />
            {/* === Seasons Section === */}
            <Seasons />
        </div>
    );
};

export default Home;