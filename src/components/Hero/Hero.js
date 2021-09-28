import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero-area header-area">
             {/* <!--Overlay  --> */}
            <div class="bg-darks"></div>
            <div class="content">
                <h2 id="bigText" data-aos="zoom-out-left">আড়িয়াল বিল</h2>
                <p data-aos="zoom-out-right">Arial Beel is the third largest wetland in Bangladesh covering an area of
                    136 sq. km. It is situated in Sreenagar Upazila of Munshiganj District. </p>
                <button id="readMoreButton">Read More</button>
                <button id="loactionButton"><i class="fas fa-map-marker-alt"></i> Location</button>
            </div>
        </div>
    );
};

export default Hero;