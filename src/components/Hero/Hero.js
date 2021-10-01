import React from 'react';
import { MdLocationOn } from 'react-icons/md'
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero-area header-area mt-5">
            <div className="bg-darks"></div>
             {/* <!--Overlay  --> */}
            <div class="content">
                <h2 id="bigText" data-aos="zoom-out-left">আড়িয়াল বিল</h2>
                <p data-aos="zoom-out-right">Arial Beel is the third largest wetland in Bangladesh covering an area of
                    136 sq. km. It is situated in Sreenagar Upazila of Munshiganj District. </p>
                <button className="button"><a href="#about" className="hero-btn">Read More </a></button>
                <button className="button"><a href="#location" className="hero-btn"> <MdLocationOn /> Location </a></button>
            </div>
        </div>
    );
};

export default Hero;