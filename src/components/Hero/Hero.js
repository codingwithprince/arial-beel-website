import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero-area header-area">
            <div className="bg-darks"></div>
             {/* <!--Overlay  --> */}
            <div class="content">
                <h2 id="bigText" data-aos="zoom-out-left">আড়িয়াল বিল</h2>
                <p>Welcome to the third largest wetland in Bangladesh.</p>
                <a className="readButton" href="#about">Read More </a>
                <a className="locationButton" href="#location"> <MdLocationOn /> Location </a>
            </div>
            <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#FFFAFA" fill-opacity="1" d="M0,224L48,240C96,256,192,288,288,272C384,256,480,192,576,181.3C672,171,768,213,864,229.3C960,245,1056,235,1152,234.7C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
</svg>
        </div>
    );
};

export default Hero;