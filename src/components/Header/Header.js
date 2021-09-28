import React from 'react';
import './Header.css';
import { AiOutlineMenuFold } from 'react-icons/ai'
import Hero from '../Hero/Hero';

const Header = () => {
    return (
        <div className="header-area">
            {/* Navbar */}
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Arial beel</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon">
                            <AiOutlineMenuFold color="#fff" fontSize="30px" />
                        </span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">Season</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">Pictures</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* ==== Hero === */}
            <Hero />
        </div>
    );
};

export default Header;